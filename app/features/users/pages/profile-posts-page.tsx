import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";
import { z } from "zod";
import { data } from "react-router";

export const meta: Route.MetaFunction = () => {
    return [{ title: "Posts | wemake" }];
};

export default function ProfilePostsPage() {
    return (
        <div className="flex flex-col gap-5">
            {Array.from({ length: 10 }).map((_, index) => (
                <PostCard
                    id={index}
                    title={`Post ${index}`}
                    author={`Author ${index}`}
                    authorAvatarUrl="https://github.com/shadcn.png"
                    category="Technology"
                    postedAt="2025-01-01"
                    expanded
                />
            ))}
        </div>
    );
}
