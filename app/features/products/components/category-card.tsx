import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/common/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";

interface CategoryCardProps {
    id: number;
    name: string;
    description: string;
}

export function CategoryCard({ id, name, description }: CategoryCardProps) {
    return (
        <Link to={`/products/categories/${id}`}>
            <Card className="bg-transparent hover:bg-card/50"   >
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl tracking-tight">
                        {name}
                        <ChevronRightIcon className="size-6" />
                    </CardTitle>
                    <CardDescription className="text-base">
                        {description}
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}
