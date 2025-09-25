import { useParams } from "react-router";

export default function ProfileProductsPage() {
    const { username } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">{username}'s Products</h1>
            <p>Profile products page content for {username}</p>
        </div>
    );
}
