import { z } from "zod";
import type { Route } from "./+types/search-page";
import { data, Form } from "react-router";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { HeroSection } from "~/common/components/hero-section";
import ProductPagination from "~/common/components/product-pagination";
import { Input } from "~/common/components/ui/input";

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

const paramsSchema = z.object({
    query: z.string().optional().default(""),
    page: z.coerce.number().optional().default(1),
});

export const loader = async ({ request }: Route.LoaderArgs) => {
    const { success, data: parsedData } = paramsSchema.safeParse(
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
