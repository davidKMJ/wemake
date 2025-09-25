import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/common/components/ui/card";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
    id: number;
    title: string;
    views?: number;
    likes?: number;
    postedAt?: string;
    owner: boolean;
    claimed?: boolean;
}

export function IdeaCard({
    id,
    title,
    views,
    likes,
    postedAt,
    claimed,
    owner,
}: IdeaCardProps) {
    return (
        <Card className="bg-transparent hover:bg-card/50 transition-colors">
            <Link to={claimed ? `/ideas` : `/ideas/${id}`}>
                <CardHeader>
                    <CardTitle className="text-xl">
                        <span
                            className={cn(
                                claimed
                                    ? "bg-muted-foreground break-all selection:bg-muted-foreground text-muted-foreground"
                                    : ""
                            )}
                        >
                            {title}
                        </span>
                    </CardTitle>
                </CardHeader>
            </Link>
            {!owner ? (
                <CardContent className="flex items-center">
                    <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>{views}</span>
                    </div>
                    <DotIcon className="w-4 h-4" />
                    {postedAt ? <span>{postedAt}</span> : null}
                </CardContent>
            ) : null}
            <CardFooter className="flex justify-end gap-2">
                {!owner ? (
                    <Button variant="outline" asChild>
                        <div>
                            <HeartIcon className="size-4" />
                            <span>{likes}</span>
                        </div>
                    </Button>
                ) : null}
                {!claimed && !owner ? (
                    <Button className="text-primary-foreground" asChild>
                        <Link to={`/ideas/${id}/claim`}>
                            Claim idea now &rarr;
                        </Link>
                    </Button>
                ) : (
                    <div className="cursor-not-allowed">
                        <Button
                            variant="outline"
                            disabled
                            className="cursor-not-allowed"
                        >
                            <LockIcon className="size-4" />
                            Claimed
                        </Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
