import { ChevronUpIcon } from "lucide-react";
import { StarIcon } from "lucide-react";
import { data, Link, NavLink, Outlet } from "react-router";
import { Button, buttonVariants } from "~/common/components/ui/button";
import type { Route } from "./+types/product-overview-layout";
import { cn } from "~/lib/utils";
import { z } from "zod";

export const meta: Route.MetaFunction = ({ data }) => {
    return [
        { title: `Product Overview | wemake` },
        { name: "description", content: "The description of the product" },
    ];
};

const paramsSchema = z.object({
    productId: z.coerce.number(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
};

export default function ProductOverviewLayout({
    loaderData,
}: Route.ComponentProps) {
    return (
        <div className="flex flex-col gap-4 px-40">
            <div className="flex justify-between">
                <div className="flex gap-10">
                    <div className="size-40 rounded-xl shadow-xl bg-primary/50 overflow-hidden">
                        <img
                            src={"https://github.com/shadcn.png"}
                            alt={"product"}
                            className="size-full object-fill"
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-bold">{"product"}</h1>
                        <p className="text-2xl font-light text-muted-foreground">
                            {"product"}
                        </p>
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex gap-2 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <StarIcon
                                        className="size-4"
                                        fill={
                                            index < 5
                                                ? "currentColor"
                                                : "none"
                                        }
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                {"5"} reviews
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Button
                        variant="secondary"
                        size="lg"
                        className="text-lg h-14 px-10"
                        asChild
                    >
                        <Link
                            to={`/products/1/visit`}
                            target="_blank"
                        >
                            Visit Website
                        </Link>
                    </Button>
                    <Button size="lg" className="text-lg h-14 px-10">
                        <ChevronUpIcon className="size-4" />
                        Upvote ({5})
                    </Button>
                </div>
            </div>
            <div className="flex gap-2.5">
                <NavLink
                    end
                    className={({ isActive }) =>
                        cn([
                            buttonVariants({ variant: "outline" }),
                            isActive && "bg-accent text-foreground",
                        ])
                    }
                    to={`/products/1/overview`}
                >
                    Overview
                </NavLink>
                <NavLink
                    end
                    className={({ isActive }) =>
                        cn([
                            buttonVariants({ variant: "outline" }),
                            isActive && "bg-accent text-foreground",
                        ])
                    }
                    to={`/products/1/reviews`}
                >
                    Reviews
                </NavLink>
            </div>
            <div>
                <Outlet
                    context={{
                        description: "product",
                        how_it_works: "product",
                        review_count: 5,
                    }}
                />
            </div>
        </div>
    );
}
