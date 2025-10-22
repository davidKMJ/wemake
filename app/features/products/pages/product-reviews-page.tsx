import { Button } from "~/common/components/ui/button";
import { ReviewCard } from "../components/review-card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/common/components/ui/dialog";
import CreateReviewDialog from "../components/create-review-dialog";
import { useOutletContext } from "react-router";
import { z } from "zod";
import type { Route } from "./+types/product-reviews-page";
import { DateTime } from "luxon";

export function meta() {
    return [
        { title: "Product Reviews | wemake" },
        { name: "description", content: "Read and write product reviews" },
    ];
}

export const loader = async ({ request, params }: Route.LoaderArgs) => {
};

export const action = async ({ request, params }: Route.ActionArgs) => {
};

export default function ProductReviewsPage({
    loaderData,
    actionData,
}: Route.ComponentProps) {
    const { review_count } = useOutletContext<{
        review_count: string;
    }>();
    return (
        <Dialog>
            <div className="space-y-10 max-w-2xl">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">
                        {review_count}{" "}
                        {review_count === "1" ? "Review" : "Reviews"}
                    </h2>
                    <DialogTrigger asChild>
                        <Button variant={"secondary"}>Write a review</Button>
                    </DialogTrigger>
                </div>
                <div className="space-y-20">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <ReviewCard
                            key={index}
                            authorName={`User ${index}`}
                            authorUsername={`user${index}`}
                            authorAvatarUrl={`https://github.com/shadcn.png`}
                            rating={index}
                            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`}
                            postedAt={DateTime.now().minus({ days: index }).toISO()}
                        />
                    ))}
                </div>
            </div>
            <CreateReviewDialog />
        </Dialog>
    );
}
