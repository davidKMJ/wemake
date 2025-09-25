import { Outlet } from "react-router";

export default function LeaderboardLayout() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Outlet />
        </div>
    );
}
