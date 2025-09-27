import { HeroSection } from "~/common/components/hero-section";
import type { Route } from "./+types/leaderboards-page";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import { Link } from "react-router";
import { DateTime } from "luxon";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Leaderboards | wemake" },
        {
            name: "description",
            content: "See the top performers in our community",
        },
    ];
};

export default function LeaderboardsPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-20">
            <HeroSection
                title="Leaderboards"
                subtitle="See the top performers in our community."
            />
            <div className="grid grid-cols-3 gap-4 px-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight">
                        Daily Leaderboard
                    </h2>
                    <p className="text-md font-light text-foreground">
                        The most popular products made by our community today.
                    </p>
                </div>
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
                <Button variant="link" asChild className="text-lg self-center">
                    <Link to="/products/leaderboards/daily">
                        View all products &rarr;
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 px-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight">
                        Weekly Leaderboard
                    </h2>
                    <p className="text-md font-light text-foreground">
                        The most popular products made by our community this
                        week.
                    </p>
                </div>
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
                <Button variant="link" asChild className="text-lg self-center">
                    <Link to="/products/leaderboards/weekly">
                        View all products &rarr;
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 px-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight">
                        Monthly Leaderboard
                    </h2>
                    <p className="text-md font-light text-foreground">
                        The most popular products made by our community this
                        month.
                    </p>
                </div>
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
                <Button variant="link" asChild className="text-lg self-center">
                    <Link to="/products/leaderboards/monthly">
                        View all products &rarr;
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 px-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight">
                        Yearly Leaderboard
                    </h2>
                    <p className="text-md font-light text-foreground">
                        The most popular products made by our community this
                        year.
                    </p>
                </div>
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
                <Button variant="link" asChild className="text-lg self-center">
                    <Link to="/products/leaderboards/daily">
                        View all products &rarr;
                    </Link>
                </Button>
            </div>
        </div>
    );
}
