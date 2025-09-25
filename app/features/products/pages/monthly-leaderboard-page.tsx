import { useParams } from "react-router";

export default function MonthlyLeaderboardPage() {
  const { year, month } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Monthly Leaderboard {year}/{month}</h1>
      <p>Monthly leaderboard content for {year}/{month}</p>
    </div>
  );
}
