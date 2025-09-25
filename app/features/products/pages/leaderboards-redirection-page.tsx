import { useParams } from "react-router";

export default function LeaderboardsRedirectionPage() {
  const { period } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Leaderboard Period: {period}</h1>
      <p>Leaderboard redirection page for period: {period}</p>
    </div>
  );
}
