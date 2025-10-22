import { HeroSection } from "~/common/components/hero-section";
import type { Route } from "./+types/community-page";
import { Await, data, Form, Link, useSearchParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../constants";
import { Input } from "~/common/components/ui/input";
import { PostCard } from "../components/post-card";
import { z } from "zod";

export const meta: Route.MetaFunction = () => {
    return [{ title: "Community | wemake" }];
};

const searchParamsSchema = z.object({
    sorting: z.enum(["newest", "popular"]).optional().default("newest"),
    period: z
        .enum(["all", "today", "week", "month", "year"])
        .optional()
        .default("all"),
    keyword: z.string().optional(),
    topic: z.string().optional(),
});

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sorting = searchParams.get("sorting") || "newest";
    const period = searchParams.get("period") || "all";
    return (
        <div className="space-y-20">
            <HeroSection
                title="Community"
                subtitle="Ask questions, share ideas, and connect with other developers"
            />
            <div className="grid grid-cols-6 items-start gap-40">
                <div className="col-span-4 space-y-10">
                    <div className="flex justify-between">
                        <div className="space-y-5 w-full">
                            <div className="flex items-center gap-5">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1">
                                        <span className="text-sm capitalize">
                                            {sorting}
                                        </span>
                                        <ChevronDownIcon className="size-5" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {SORT_OPTIONS.map((option) => (
                                            <DropdownMenuCheckboxItem
                                                className="capitalize cursor-pointer"
                                                key={option}
                                                onCheckedChange={(
                                                    checked: boolean
                                                ) => {
                                                    if (checked) {
                                                        searchParams.set(
                                                            "sorting",
                                                            option
                                                        );
                                                        setSearchParams(
                                                            searchParams
                                                        );
                                                    }
                                                }}
                                            >
                                                {option}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {sorting === "popular" && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center gap-1">
                                            <span className="text-sm capitalize">
                                                {period}
                                            </span>
                                            <ChevronDownIcon className="size-5" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {PERIOD_OPTIONS.map((option) => (
                                                <DropdownMenuCheckboxItem
                                                    className="capitalize cursor-pointer"
                                                    key={option}
                                                    onCheckedChange={(
                                                        checked: boolean
                                                    ) => {
                                                        if (checked) {
                                                            searchParams.set(
                                                                "period",
                                                                option
                                                            );
                                                            setSearchParams(
                                                                searchParams
                                                            );
                                                        }
                                                    }}
                                                >
                                                    {option}
                                                </DropdownMenuCheckboxItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}
                            </div>
                            <Form className="w-2/3">
                                <Input
                                    type="text"
                                    name="keyword"
                                    placeholder="Search for discussions"
                                />
                            </Form>
                        </div>
                        <Button asChild>
                            <Link to={`/community/submit`}>
                                Create Discussion
                            </Link>
                        </Button>
                    </div>
                    <div className="space-y-5">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <PostCard
                                key={index}
                                id={index}
                                title={`Post ${index}`}
                                author={`Author ${index}`}
                                authorAvatarUrl={`https://github.com/shadcn.png`}
                                category={`Category ${index}`}
                                postedAt={`2021-01-01`}
                                votesCount={100}
                                expanded
                            />
                        ))}
                    </div>
                </div>
                <aside className="col-span-2 space-y-5">
                    <span className="text-sm font-bold text-muted-foreground uppercase">
                        Topics
                    </span>
                    <div className="flex flex-col gap-2 items-start mt-2">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Button key={index} variant={"link"} asChild>
                                <Link to={`/community?topic=${index}`} preventScrollReset>
                                    Topic {index}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}
