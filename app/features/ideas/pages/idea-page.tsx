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

const paramsSchema = z.object({
    ideaId: z.coerce.number(),
});

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Idea Details | wemake" },
        { name: "description", content: "View idea details and information" },
    ];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
    const { success, data: parsedData } = paramsSchema.safeParse(params);
    if (!success) {
        throw data(
            { error_code: "invalid_params", message: "Invalid params" },
            { status: 400 }
        );
    }
    return { idea: {
        gpt_idea_id: parsedData.ideaId,
        idea: `Idea ${parsedData.ideaId}`,
        views: 100,
        likes: 100,
        created_at: "2025-01-01",
        is_claimed: false,
        owner: false,
    } };
};

export const action = async ({ request, params }: Route.ActionArgs) => {
    return { ok: true };
}

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection title={`Idea #${loaderData.idea.gpt_idea_id}`} />
            <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-10">
                <p className="italic text-center">{loaderData.idea.idea}</p>
                <div className="flex items-center gap-1 text-sm">
                    <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>{100}</span>
                    </div>
                    <DotIcon className="w-4 h-4" />
                    <span>2025-01-01</span>
                    <DotIcon className="w-4 h-4" />
                    <Button variant="outline">
                        <HeartIcon className="w-4 h-4" />
                        <span>{100}</span>
                    </Button>
                </div>
                {!false ? (
                    <Form method="post">
                        <Button size="lg">Claim idea now &rarr;</Button>
                    </Form>
                ) : null}
            </div>
        </div>
    );
}