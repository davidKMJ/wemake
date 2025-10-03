import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { HeroSection } from "~/common/components/hero-section";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
    year: z.coerce.number(),
    month: z.coerce.number(),
    day: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params}) => {
    const date = DateTime.fromObject({
        year: Number(params.year),
        month: Number(params.month),
        day: Number(params.day),
    });
    return [{ title: `Best products of ${date.toLocaleString(DateTime.DATE_MED)} | wemake` }];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
    const { success, data: parsedData } = paramsSchema.safeParse(params);
    if (!success) {
        throw data(
            {
                error_code: "invalid_params",
                message: "Invalid params",
            },
            { status: 400 }
        );
    }

    const date = DateTime.fromObject(parsedData);

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

    const today = DateTime.now().startOf("day");
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

    return {
        year: parsedData.year,
        month: parsedData.month,
        day: parsedData.day,
    };
};

export default function DailyLeaderboardPage({
    loaderData,
}: Route.ComponentProps) {
    const urlDate = DateTime.fromObject({
        year: loaderData.year,
        month: loaderData.month,
        day: loaderData.day,
    });
    const previousDay = urlDate.minus({ days: 1 });
    const nextDay = urlDate.plus({ days: 1 });
    const isToday = urlDate.equals(DateTime.now().startOf("day"));
    return (
        <div className="space-y-10">
            <HeroSection
                title={`Best products of ${urlDate.toLocaleString(
                    DateTime.DATE_MED
                )}`}
            />
            <div className="flex items-center justify-center gap-2">
                <Button variant="secondary" asChild>
                    <Link
                        to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}
                    >
                        &larr; {previousDay.toLocaleString(DateTime.DATE_SHORT)}
                    </Link>
                </Button>
                {!isToday ? (
                    <Button variant="secondary" asChild>
                        <Link
                            to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
                        >
                            {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
                        </Link>
                    </Button>
                ) : null}
            </div>
            <div className="space-y-5 w-full max-w-screen-md mx-auto">
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard
                        key={index}
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
    return <div>Unknown error</div>;
}
