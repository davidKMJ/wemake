import { useParams } from "react-router";

export default function ProfilePostsPage() {
    const { username } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">{username}'s Posts</h1>
            <p>Profile posts page content for {username}</p>
        </div>
    );
}
