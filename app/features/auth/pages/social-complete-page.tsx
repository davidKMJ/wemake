import { useParams } from "react-router";

export default function SocialCompletePage() {
    const { provider } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8">
                Social Complete - {provider}
            </h1>
            <p>Social complete page content for {provider}</p>
        </div>
    );
}
