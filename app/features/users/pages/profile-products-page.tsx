import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";
import { z } from "zod";

export const meta: Route.MetaFunction = () => {
    return [{ title: "Products | wemake" }];
};

export default function ProfileProductsPage({
    loaderData,
}: Route.ComponentProps) {
    return (
        <div className="flex flex-col gap-5">
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
    );
}
