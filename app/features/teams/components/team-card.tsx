import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "~/common/components/ui/avatar";

interface TeamCardProps {
    id: number;
    leaderUsername: string;
    leaderAvatarUrl: string | null;
    positions: string[];
    description: string;
}

export function TeamCard({
    id,
    leaderUsername,
    leaderAvatarUrl,
    positions,
    description,
}: TeamCardProps) {
    return (
        <Link to={`/teams/${id}`} className="block">
            <Card className="bg-transparent hover:bg-card/50 flex flex-col justify-between transition-colors h-full">
                <CardHeader className="flex flex-row items-center gap-2">
                    <CardTitle className="text-base leading-loose">
                        <Badge
                            variant="secondary"
                            className="inline-flex shadow-sm items-center text-base"
                        >
                            <span>@{leaderUsername}</span>
                            <Avatar className="size-4">
                                {leaderAvatarUrl && (
                                    <AvatarImage src={leaderAvatarUrl} />
                                )}
                                <AvatarFallback>
                                    {leaderUsername[0]?.toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        </Badge>
                        <span> is looking for </span>
                        {positions.map((position) => (
                            <Badge key={position} className="text-base">
                                {position}
                            </Badge>
                        ))}
                        <span> to build </span>
                        <span>{description}</span>
                    </CardTitle>
                </CardHeader>
                <CardFooter className="justify-end">
                    <Button variant="link" asChild>
                        Join team &rarr;
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
