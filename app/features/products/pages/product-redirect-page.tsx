import { redirect } from "react-router";
import type { Route } from "./+types/product-redirect-page";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Product | wemake" },
        { name: "description", content: "Product details" },
    ];
};

export function loader({ params }: Route.LoaderArgs) {
    return redirect(`/products/${params.productId}/overview`);
}
