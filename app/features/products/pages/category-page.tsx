import { url, z } from "zod";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/category-page";
import { HeroSection } from "~/common/components/hero-section";
import ProductPagination from "~/common/components/product-pagination";
import { data } from "react-router";

export const meta: Route.MetaFunction = ({ params, data }) => {
    return [
        { title: "Developer Tools | wemake" },
        { name: "description", content: "Browse products in this category" },
    ];
};

const paramsSchema = z.object({
    category: z.coerce.number(),
});

const searchParamsSchema = z.object({
    page: z.coerce.number().min(1).optional().default(1),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
    const { success, data: parsedData } = paramsSchema.safeParse(params);
    if (!success) {
        throw data(
            {
                error_code: "invalid_category_id",
                message: "Invalid category ID",
            },
            { status: 400 }
        );
    }

    const { success: successSearchParams, data: parsedDataSearchParams } =
        searchParamsSchema.safeParse(Object.fromEntries(new URL(request.url).searchParams));
    if (!successSearchParams) {
        throw data(
            {
                error_code: "invalid_page",
                message: "Invalid page",
            },
            { status: 400 }
        );
    }

    return { products: [], page: parsedDataSearchParams.page, totalPages: 1 };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection
                title="Developer Tools"
                subtitle="Description of this category"
            />
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
