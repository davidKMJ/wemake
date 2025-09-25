import { useParams } from "react-router";

export default function PostPage() {
    const { postId } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">Post: {postId}</h1>
            <p>Post page content for {postId}</p>
        </div>
    );
}
