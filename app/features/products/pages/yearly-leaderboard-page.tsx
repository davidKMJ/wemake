import { useParams } from "react-router";

export default function YearlyLeaderboardPage() {
  const { year } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Yearly Leaderboard {year}</h1>
      <p>Yearly leaderboard content for {year}</p>
    </div>
  );
}
