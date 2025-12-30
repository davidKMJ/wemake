import { z } from "zod";
import type { Route } from "./+types/search-page";
import { data, Form } from "react-router";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { HeroSection } from "~/common/components/hero-section";
import ProductPagination from "~/common/components/product-pagination";
import { Input } from "~/common/components/ui/input";
import { getProductsBySearch, getPagesBySearch } from "../queries";
import { makeSSRClient } from "~/supa-client";

export const meta: Route.MetaFunction = () => {
    return [
        {
            title: `Search Products | wemake`,
        },
        {
            name: "description",
            content: "Search for products in our community",
        },
    ];
};

const searchParamsSchema = z.object({
    query: z.string().optional().default(""),
    page: z.coerce.number().optional().default(1),
});

export const loader = async ({ request }: Route.LoaderArgs) => {
    const { client, headers } = makeSSRClient(request);
    const { success, data: parsedData } = searchParamsSchema.safeParse(
        Object.fromEntries(new URL(request.url).searchParams)
    );
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
    if (parsedData.query === "") {
        return { products: [], totalPages: 1 };
    }
    const products = await getProductsBySearch(client, {
        query: parsedData.query,
        page: parsedData.page,
    });
    const totalPages = await getPagesBySearch(client, { query: parsedData.query });
    return { products, totalPages };
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-10">
            <HeroSection
                title="Search"
                subtitle="Search for products by title or description"
            />
            <Form className="flex justify-center max-w-screen-sm items-center gap-2 mx-auto">
                <Input
                    name="query"
                    placeholder="Search for products"
                    className="text-lg"
                />
                <Button type="submit">Search</Button>
            </Form>
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
