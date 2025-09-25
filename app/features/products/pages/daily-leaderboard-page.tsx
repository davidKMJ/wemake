import { useParams } from "react-router";

export default function DailyLeaderboardPage() {
  const { year, month, day } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Daily Leaderboard {year}/{month}/{day}</h1>
      <p>Daily leaderboard content for {year}/{month}/{day}</p>
    </div>
  );
}
