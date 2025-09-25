import { useParams } from "react-router";

export default function TeamPage() {
    const { teamId } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">Team: {teamId}</h1>
            <p>Team page content for {teamId}</p>
        </div>
    );
}
