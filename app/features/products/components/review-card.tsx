import { Avatar, AvatarImage, AvatarFallback } from "~/common/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { DateTime } from "luxon";
import { cn } from "~/lib/utils";

interface ReviewCardProps {
    authorName: string;
    authorUsername: string;
    authorAvatarUrl: string | null;
    rating: number;
    content: string;
    postedAt: string;
}

export function ReviewCard({
    authorName,
    authorUsername,
    authorAvatarUrl,
    rating,
    content,
    postedAt,
}: ReviewCardProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarFallback>{authorName[0]}</AvatarFallback>
                    {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
                </Avatar>
                <div>
                    <h4 className="text-lg font-bold">{authorName}</h4>
                    <p className="text-sm text-muted-foreground">
                        @{authorUsername}
                    </p>
                </div>
            </div>
            <div className="flex gap-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                        key={index}
                        className={cn(
                            "size-4",
                            index < rating
                                ? "fill-yellow-400"
                                : "fill-background"
                        )}
                        fill="currentColor"
                    />
                ))}
            </div>
            <p className="text-sm text-muted-foreground">{content}</p>
            <span className="text-sm text-muted-foreground">
                {DateTime.fromISO(postedAt).toRelative()}
            </span>
        </div>
    );
}
