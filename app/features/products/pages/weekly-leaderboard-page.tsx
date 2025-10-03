import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { HeroSection } from "~/common/components/hero-section";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { Route } from "./+types/weekly-leaderboard-page";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
    year: z.coerce.number(),
    week: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
    const date = DateTime.fromObject({
        weekYear: Number(params.year),
        weekNumber: Number(params.week),
    });
    return [
        {
            title: `Best products of ${date
                    .startOf("week")
                    .toLocaleString(DateTime.DATE_SHORT)} - ${date
                    .endOf("week")
                    .toLocaleString(DateTime.DATE_SHORT)} | wemake`,
        },
    ];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
    const { success, data: parsedData } = paramsSchema.safeParse(params);
    if (!success) {
        throw data(
            {
                error_code: "invalid_params",
                message: "Invalid params",
            },
            {
                status: 400,
            }
        );
    }

    const date = DateTime.fromObject({
        weekYear: parsedData.year,
        weekNumber: parsedData.week,
    });

    if (!date.isValid) {
        throw data(
            {
                error_code: "invalid_date",
                message: "Invalid date",
            },
            {
                status: 400,
            }
        );
    }
    const today = DateTime.now().startOf("week");
    if (date > today) {
        throw data(
            {
                error_code: "future_date",
                message: "Future date",
            },
            {
                status: 400,
            }
        );
    }

    return { ...parsedData };
};

export default function WeeklyLeaderboardPage({
    loaderData,
}: Route.ComponentProps) {
    const urlDate = DateTime.fromObject({
        weekYear: loaderData.year,
        weekNumber: loaderData.week,
    });
    const previousWeek = urlDate.minus({ weeks: 1 });
    const nextWeek = urlDate.plus({ weeks: 1 });
    const isToday = urlDate.equals(DateTime.now().startOf("week"));
    return (
        <div className="space-y-10">
            <HeroSection
                title={`Best products of ${urlDate
                    .startOf("week")
                    .toLocaleString(DateTime.DATE_SHORT)} - ${urlDate
                    .endOf("week")
                    .toLocaleString(DateTime.DATE_SHORT)}`}
            />
            <div className="flex gap-2 justify-center items-center">
                <Button variant="outline" asChild>
                    <Link
                        to={`/products/leaderboards/weekly/${previousWeek.weekYear}/${previousWeek.weekNumber}`}
                    >
                        <ChevronLeftIcon className="w-4 h-4" />
                        {previousWeek.toLocaleString(DateTime.DATE_SHORT)}
                    </Link>
                </Button>
                {isToday ? (
                    <></>
                ) : (
                    <Button variant="outline" asChild>
                        <Link
                            to={`/products/leaderboards/weekly/${nextWeek.weekYear}/${nextWeek.weekNumber}`}
                        >
                            {nextWeek.toLocaleString(DateTime.DATE_SHORT)}
                            <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                    </Button>
                )}
            </div>
            <div className="space-y-5 w-full max-w-screen-md mx-auto">
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard
                        id={index}
                        name={`Product ${index}`}
                        description={`Product ${index} description`}
                        reviews={`100`}
                        views={`100`}
                        upvotes={`100`}
                    />
                ))}
            </div>
            <ProductPagination totalPages={10} />
        </div>
    );
}

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
    if (isRouteErrorResponse(error)) {
        return (
            <div>
                {error.data.message} / {error.data.error_code}
            </div>
        );
    }
    if (error instanceof Error) {
        return <div>{error.message}</div>;
    }
    return <div>Unknown error in leaderboard</div>;
};
