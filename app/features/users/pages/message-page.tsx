import { useParams } from "react-router";

export default function MessagePage() {
    const { messageId } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">Message: {messageId}</h1>
            <p>Message page content for {messageId}</p>
        </div>
    );
}
