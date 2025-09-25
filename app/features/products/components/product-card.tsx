import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/common/components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    reviews: string;
    views: string;
    upvotes: string;
}

export function ProductCard({
    id,
    name,
    description,
    reviews,
    views,
    upvotes,
}: ProductCardProps) {
    return (
        <Link to={`/products/${id}`} className="block">
            <Card className="w-full flex flex-row px-2 items-center justify-between bg-transparent hover:bg-card/50">
                <CardHeader className="gap-3 w-full">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                        {description}
                    </CardDescription>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-px text-xs text-muted-foreground">
                            <MessageCircleIcon className="size-4" />
                            <span>{reviews}</span>
                        </div>
                        <div className="flex items-center gap-px text-xs text-muted-foreground">
                            <EyeIcon className="size-4" />
                            <span>{views}</span>
                        </div>
                    </div>
                </CardHeader>
                <CardFooter className="py-0">
                    <Button variant="outline" className="flex flex-col h-14">
                        <ChevronUpIcon className="size-4 shrink-0" />
                        <span>{upvotes}</span>
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
