import { useParams } from "react-router";

export default function JobPage() {
    const { jobId } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">Job: {jobId}</h1>
            <p>Job page content for {jobId}</p>
        </div>
    );
}
