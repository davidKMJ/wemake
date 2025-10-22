import { redirect } from "react-router";
import type { Route } from "./+types/my-profile-page";

export const loader = async ({ request }: Route.LoaderArgs) => {
    return redirect("/users/leader");
};
