import { useParams } from "react-router";

export default function DashboardProductPage() {
    const { productId } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">My Product: {productId}</h1>
            <p>Dashboard product page content for {productId}</p>
        </div>
    );
}
