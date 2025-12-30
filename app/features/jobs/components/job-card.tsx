import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { DateTime } from "luxon";

interface JobCardProps {
    id: number;
    title: string;
    company: string;
    companyLogoUrl: string;
    companyHq: string;
    postedAt: string;
    type: string;
    positionLocation: string;
    salary: string;
}

export function JobCard({
    id,
    title,
    company,
    companyLogoUrl,
    companyHq,
    postedAt,
    type,
    positionLocation,
    salary,
}: JobCardProps) {
    return (
        <Link to={`/jobs/${id}`}>
            <Card className="bg-transparent transition-colors hover:bg-card/50">
                <CardHeader>
                    <div className="flex items-center gap-4 mb-8">
                        <img
                            src={companyLogoUrl}
                            alt={`${company} Logo`}
                            className="size-10 rounded-full overflow-hidden"
                        />
                        <div className="space-x-2">
                            <span className="text-sm text-accent-foreground">
                                {company}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {DateTime.fromISO(postedAt).toRelative()}
                            </span>
                        </div>
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="capitalize">
                            {type}
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                            {positionLocation}
                        </Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-muted-foreground">
                            {salary}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                            {companyHq}
                        </span>
                    </div>
                    <Button variant="secondary" className="text-sm">
                        Apply now
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
