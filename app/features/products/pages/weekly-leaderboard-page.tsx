import { useParams } from "react-router";

export default function WeeklyLeaderboardPage() {
  const { year, week } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Weekly Leaderboard {year} Week {week}</h1>
      <p>Weekly leaderboard content for {year} week {week}</p>
    </div>
  );
}
