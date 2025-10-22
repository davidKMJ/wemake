import { IdeaCard } from "~/features/ideas/components/idea-card";
import type { Route } from "./+types/dashboard-ideas-page";

export const meta: Route.MetaFunction = () => {
    return [{ title: "My Ideas | wemake" }];
};

export default function DashboardIdeasPage() {
    return (
        <div className="space-y-5 h-full">
            <h1 className="text-2xl font-semibold mb-6">Claimed Ideas</h1>
            <div className="grid grid-cols-4 gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <IdeaCard
                        key={`ideaId-${index}`}
                        id={index}
                        title={`Idea ${index}`}
                        owner={true}
                    />
                ))}
            </div>
        </div>
    );
}
