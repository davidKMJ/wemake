import type { Route } from "./+types/idea-page";
import { HeroSection } from "~/common/components/hero-section";
import { Button } from "~/common/components/ui/button";
import { data, Form, Link, redirect } from "react-router";
import { Badge } from "~/common/components/ui/badge";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "~/common/components/ui/avatar";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { z } from "zod";
import { getGptIdea } from "../queries";
import { DateTime } from "luxon";
import { makeSSRClient } from "~/supa-client";
import { getLoggedInUserId } from "~/features/auth/queries";
import { claimIdea } from "../mutations";

const paramsSchema = z.object({
    ideaId: z.coerce.number(),
});

export const meta = ({
    data: {
        idea: { gpt_idea_id, idea },
    },
}: Route.MetaArgs) => {
    return [
        { title: `Idea #${gpt_idea_id}: ${idea} | wemake` },
        { name: "description", content: "Find ideas for your next project" },
    ];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
    const { client, headers } = makeSSRClient(request);
    const idea = await getGptIdea(client, Number(params.ideaId));
    if (idea.claimed_at) {
        throw redirect(`/ideas`);
    }
    return { idea };
};

export const action = async ({ request, params }: Route.ActionArgs) => {
    const { client } = makeSSRClient(request);
    const userId = await getLoggedInUserId(client);
    const idea = await getGptIdea(client, Number(params.ideaId));
    if (idea.claimed_at) {
        return { ok: false };
    }
    await claimIdea(client, { ideaId: Number(params.ideaId), userId });
    return redirect(`/my/dashboard/ideas`);
};

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection title={`Idea #${loaderData.idea.gpt_idea_id}`} />
            <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-10">
                <p className="italic text-center">"{loaderData.idea.idea}"</p>
                <div className="flex items-center gap-1 text-sm">
                    <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>{loaderData.idea.views}</span>
                    </div>
                    <DotIcon className="w-4 h-4" />
                    <span>
                        {DateTime.fromISO(
                            loaderData.idea.created_at
                        ).toRelative()}
                    </span>
                    <DotIcon className="w-4 h-4" />
                    <Button variant="outline">
                        <HeartIcon className="w-4 h-4" />
                        <span>{loaderData.idea.likes}</span>
                    </Button>
                </div>
                {loaderData.idea.claimed_at ? null : (
                    <Form method="post">
                        <Button size="lg">Claim idea</Button>
                    </Form>
                )}
            </div>
        </div>
    );
}
