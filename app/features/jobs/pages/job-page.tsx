import type { Route } from "./+types/job-page";
import { HeroSection } from "~/common/components/hero-section";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { DotIcon } from "lucide-react";
import { z } from "zod";
import { data } from "react-router";
import { DateTime } from "luxon";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Job Details | wemake" },
        { name: "description", content: "View job details and information" },
    ];
};

const paramsSchema = z.object({
    jobId: z.coerce.number(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
    
};

export default function JobPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="px-10">
            <div className="bg-gradient-to-tr from-primary/80 to-preimary/10 h-60 w-full rounded-lg"></div>
            <div className="grid grid-cols-6 gap-20 -mt-20 items-start">
                <div className="col-span-4 space-y-10">
                    <div>
                        <div className="rounded-full overflow-hidden size-40 bg-white ml-5">
                            <img
                                src={"https://github.com/shadcn.png"}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mt-3">
                                {`Job 1`}
                            </h1>
                            <h4 className="text-lg text-muted-foreground">
                                {`Company 1`}
                            </h4>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="secondary">
                            {`Job Type 1`}
                        </Badge>
                        <Badge variant="secondary">
                            {`Location 1`}
                        </Badge>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">Overview</h4>
                        <p className="text-lg">{`Overview 1`}</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">Responsibilities</h4>
                        <ul className="text-lg list-disc list-inside">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <li className="text-lg">{`Responsibility ${index}`}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">Qualifications</h4>
                        <ul className="text-lg list-disc list-inside">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <li className="text-lg">{`Qualification ${index}`}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">Benefits</h4>
                        <ul className="text-lg list-disc list-inside">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <li className="text-lg">{`Benefit ${index}`}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">Skills</h4>
                        <ul className="text-lg list-disc list-inside">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <li className="text-lg">{`Skill ${index}`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 sticky top-20 mt-32 p-6 border rounded-lg space-y-4">
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">
                            Avg. Salary
                        </span>
                        <span className="text-2xl font-medium">
                            {`Salary Range 1`}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">
                            Location
                        </span>
                        <span className="text-2xl font-medium">
                            {`Location 1`}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">
                            Type
                        </span>
                        <span className="text-2xl font-medium">
                            {`Job Type 1`}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-sm text-muted-foreground">
                            Posted{" "}
                            {DateTime.fromISO(
                                "2025-01-01"
                            ).toRelative()}
                        </span>
                        <DotIcon className="size-4" />
                        <span className="text-sm text-muted-foreground">
                            100 views
                        </span>
                    </div>
                    <Button className="w-full">Apply Now</Button>
                </div>
            </div>
        </div>
    );
}
