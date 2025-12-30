import { IdeaCard } from "../components/idea-card";
import type { Route } from "./+types/ideas-page";
import { HeroSection } from "~/common/components/hero-section";
import { getGptIdeas } from "../queries";
import { makeSSRClient } from "~/supa-client";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "IdeasGPT | wemake" },
        { name: "description", content: "Browse and discover new ideas" },
    ];
};

export const loader = async ({ request }: Route.LoaderArgs) => {
    const { client } = makeSSRClient(request);
    const ideas = await getGptIdeas(client, { limit: 20 });
    return { ideas };
};

export default function IdeasPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection
                title="IdeasGPT"
                subtitle="Browse and discover new ideas"
            />
            <div className="grid grid-cols-4 gap-4 px-10">
                {loaderData.ideas.map((idea) => (
                    <IdeaCard
                        key={idea.gpt_idea_id}
                        id={idea.gpt_idea_id}
                        title={idea.idea}
                        views={idea.views}
                        likes={idea.likes}
                        postedAt={idea.created_at}
                        claimed={!!idea.claimed_at}
                        owner={false}
                    />
                ))}
            </div>
        </div>
    );
}
