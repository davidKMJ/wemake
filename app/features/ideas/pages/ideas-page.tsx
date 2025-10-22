import { IdeaCard } from "../components/idea-card";
import type { Route } from "./+types/ideas-page";
import { HeroSection } from "~/common/components/hero-section";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "IdeasGPT | wemake" },
        { name: "description", content: "Browse and discover new ideas" },
    ];
};

export const loader = async ({ request }: Route.LoaderArgs) => {
};

export default function IdeasPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection
                title="IdeasGPT"
                subtitle="Browse and discover new ideas"
            />
            <div className="grid grid-cols-4 gap-4 px-10">
                {Array.from({ length: 10 }).map((_, index) => (
                    <IdeaCard
                        id={index}
                        title={`Idea ${index}`}
                        views={100}
                        likes={100}
                        postedAt="2025-01-01"
                        claimed={false}
                        owner={false}
                    />
                ))}
            </div>
        </div>
    );
}