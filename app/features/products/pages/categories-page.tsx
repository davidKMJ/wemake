import { HeroSection } from "~/common/components/hero-section";
import type { Route } from "./+types/categories-page";
import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Categories | wemake" },
        { name: "description", content: "Browse products by category" },
    ];
};

export const loader = async ({ request }: Route.LoaderArgs) => {
    const categories = [
        {
            id: 1,
            name: "Category 1",
            description: "Category 1 description",
        },
    ];
    return { categories };
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection
                title="Categories"
                subtitle="Browse products by category"
            />
            <div className="grid grid-cols-4 gap-10 px-20">
                {Array.from({ length: 10 }).map((_, index) => (
                    <CategoryCard
                        id={index}
                        name={`Category ${index}`}
                        description={`Category ${index} description`}
                    />
                ))}
            </div>
        </div>
    );
}
