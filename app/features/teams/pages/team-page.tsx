import { HeroSection } from "~/common/components/hero-section";
import { Button } from "~/common/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/common/components/ui/card";
import type { Route } from "./+types/team-page";

export const meta: Route.MetaFunction = () => [
    { title: "Team Details | wemake" },
];

export default function TeamPage() {
    return (
        <div className="space-y-20">
            <HeroSection
                title="Join Leader's team"
            />
            <div className="grid grid-cols-6 gap-40 items-start px-10">
                <div className="col-span-4 grid grid-cols-4 gap-5">
                    {[
                        {
                            title: "Product name",
                            value: "Product Name",
                        },
                        {
                            title: "Stage",
                            value: "Stage",
                        },
                        {
                            title: "Team size",
                            value: "10",
                        },
                        {
                            title: "Available equity",
                            value: "10%",
                        },
                    ].map((item) => (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {item.title}
                                </CardTitle>
                                <CardContent className="p-0 font-bold text-2xl">
                                    <p>{item.value}</p>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))}
                    <Card className="col-span-2">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Looking for
                            </CardTitle>
                            <CardContent className="p-0 font-bold text-2xl">
                                <ul className="text-lg list-disc list-inside">
                                    {["Role 1", "Role 2"]
                                        .map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                </ul>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className="col-span-2">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Idea description
                            </CardTitle>
                            <CardContent className="p-0 font-medium text-xl">
                                <p>Product Description</p>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </div>
                <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
                    <div className="flex gap-5">
                        <Avatar className="size-14">
                            <AvatarFallback>
                                L
                            </AvatarFallback>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">
                                Leader
                            </h4>
                            <Badge variant="secondary">
                                Role
                            </Badge>
                        </div>
                    </div>
                    <Form className="space-y-5">
                        <InputPair
                            label="Introduce yourself"
                            description="Tell us about yourself"
                            name="introduction"
                            type="text"
                            id="introduction"
                            required
                            textArea
                            placeholder="i.e. I'm a React Developer with 3 years of experience"
                        />
                        <Button type="submit" className="w-full">
                            Get in touch
                        </Button>
                    </Form>
                </aside>
            </div>
        </div>
    );
}
