import { z } from "zod";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/category-page";
import { HeroSection } from "~/common/components/hero-section";
import ProductPagination from "~/common/components/product-pagination";
import { data } from "react-router";
import {
    getCategory,
    getCategoryPages,
    getProductsByCategory,
} from "../queries";
import { makeSSRClient } from "~/supa-client";

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
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    const { data, success } = paramsSchema.safeParse(params);
    if (!success) {
        throw new Response("Invalid category", { status: 400 });
    }
    const { client, headers } = makeSSRClient(request);
    const category = await getCategory(client, data.category);
    const products = await getProductsByCategory(client, {
        categoryId: data.category,
        page: Number(page),
    });
    const totalPages = await getCategoryPages(client, data.category);
    return { category, products, totalPages };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection
                title={loaderData.category.name}
                subtitle={loaderData.category.description}
            />
            <div className="space-y-5 w-full max-w-screen-md mx-auto">
                {loaderData.products.map((product) => (
                    <ProductCard
                        key={product.product_id}
                        id={product.product_id}
                        name={product.name}
                        description={product.tagline}
                        reviews={product.reviews}
                        views={product.views}
                        upvotes={product.upvotes}
                    />
                ))}
            </div>
            <ProductPagination totalPages={loaderData.totalPages} />
        </div>
    );
}
