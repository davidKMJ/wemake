import { useParams } from "react-router";

export default function IdeaPage() {
    const { ideaId } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">Idea: {ideaId}</h1>
            <p>Idea page content for {ideaId}</p>
        </div>
    );
}
