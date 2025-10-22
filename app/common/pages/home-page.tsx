import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/home-page";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { Button } from "../components/ui/button";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";

export const meta: MetaFunction = () => {
    return [
        { title: "Home | wemake" },
        { name: "description", content: "Welcome to wemake" },
    ];
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-40">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-5xl font-bold leading-tight">
                        Today's Products
                    </h2>
                    <p className="text-xl font-light text-foreground">
                        The best products made by our community today.
                    </p>
                    <Button variant="link" asChild className="text-lg p-0">
                        <Link to="/products/leaderboards">
                            Explore all products &rarr;
                        </Link>
                    </Button>
                </div>
                {Array.from({ length: 10 }).map(() => (
                    <ProductCard
                        id={1}
                        name={"Product 1"}
                        description={"Product 1 description"}
                        reviews={"100"}
                        views={"100"}
                        upvotes={"100"}
                    />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-5xl font-bold leading-tight">
                        Latest Discussions
                    </h2>
                    <p className="text-xl font-light text-foreground">
                        The latest discussions made by our community today.
                    </p>
                    <Button variant="link" asChild className="text-lg p-0">
                        <Link to="/products/leaderboards">
                            Explore all products &rarr;
                        </Link>
                    </Button>
                </div>
                {Array.from({ length: 10 }).map(() => (
                    <PostCard
                        id={1}
                        title={"Post 1"}
                        author={"Author 1"}
                        authorAvatarUrl={"https://github.com/shadcn.png"}
                        category={"Category 1"}
                        postedAt={"2021-01-01"}
                        votesCount={100}
                    />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-5xl font-bold leading-tight">
                        IdeasGPT
                    </h2>
                    <p className="text-xl font-light text-foreground">
                        Find ideas for your next project.
                    </p>
                    <Button variant="link" asChild className="text-lg p-0">
                        <Link to="/ideas">Explore all ideas &rarr;</Link>
                    </Button>
                </div>
                {Array.from({ length: 10 }).map((_, index) => (
                    <IdeaCard
                        id={1}
                        title={"Idea 1"}
                        views={100}
                        likes={100}
                        postedAt={"2021-01-01"}
                        claimed={index % 2 === 0}
                        owner={false}
                    />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <h2 className="text-5xl font-bold leading-tight">
                        Latest Jobs
                    </h2>
                    <p className="text-xl font-light text-foreground">
                        Find your dream job.
                    </p>
                    <Button variant="link" asChild className="text-lg p-0">
                        <Link to="/jobs">Explore all jobs &rarr;</Link>
                    </Button>
                </div>
                {Array.from({ length: 10 }).map(() => (
                    <JobCard
                        id={1}
                        title={"Job 1"}
                        company={"Company 1"}
                        companyLogoUrl={"https://github.com/shadcn.png"}
                        companyHq={"Company 1"}
                        postedAt={"2021-01-01"}
                        type={"Job 1"}
                        positionLocation={"Location 1"}
                        salary={"$100,000 - $120,000"}
                    />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <h2 className="text-5xl font-bold leading-tight">
                        Find a team mate
                    </h2>
                    <p className="text-xl font-light text-foreground">
                        Join a team looking for a new member.
                    </p>
                    <Button variant="link" asChild className="text-lg p-0">
                        <Link to="/teams">Explore all teams &rarr;</Link>
                    </Button>
                </div>
                {Array.from({ length: 10 }).map(() => (
                    <TeamCard
                        id={1}
                        leaderUsername={"Leader 1"}
                        leaderAvatarUrl={"https://github.com/shadcn.png"}
                        positions={["Position 1", "Position 2"]}
                        description={"Description 1"}
                    />
                ))}
            </div>
        </div>
    );
}
