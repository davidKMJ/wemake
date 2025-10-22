import { HeroSection } from "~/common/components/hero-section";
import { TeamCard } from "../components/team-card";
import type { Route } from "./+types/teams-page";

export const meta: Route.MetaFunction = () => [{ title: "Teams | wemake" }];

export const loader = async ({ request }: Route.LoaderArgs) => {
    return { teams: [] };
};

export default function TeamsPage() {
    return (
        <div className="space-y-20">
            <HeroSection
                title="Teams"
                subtitle="Find a team looking for a new member."
            />
            <div className="grid grid-cols-4 gap-4 px-10">
                {Array.from({ length: 10 }).map((_, index) => (
                    <TeamCard
                        key={index}
                        id={index}
                        leaderUsername={`Leader ${index}`}
                        leaderAvatarUrl={`https://github.com/shadcn.png`}
                        positions={["Position 1", "Position 2"]}
                        description={`Description ${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
