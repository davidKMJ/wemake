import { useParams } from "react-router";

export default function SocialStartPage() {
    const { provider } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8">
                Social Login - {provider}
            </h1>
            <p>Social start page content for {provider}</p>
        </div>
    );
}
