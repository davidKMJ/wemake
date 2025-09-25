import { useParams } from "react-router";

export default function ProfilePage() {
    const { username } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">Profile: {username}</h1>
            <p>Profile page content for {username}</p>
        </div>
    );
}
