import { Form, Link, NavLink, Outlet, useOutletContext } from "react-router";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button, buttonVariants } from "~/common/components/ui/button";
import {
    Dialog,
    DialogDescription,
    DialogHeader,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "~/common/components/ui/dialog";
import { Textarea } from "~/common/components/ui/textarea";
import { cn } from "~/lib/utils";
import type { Route } from "./+types/profile-layout";

export const meta: Route.MetaFunction = () => {
    return [{ title: `Profile | wemake` }];
};

export default function ProfileLayout({
    loaderData,
    params,
}: Route.ComponentProps & { params: { username: string } }) {
    return (
        <div className="space-y-10">
            <div className="flex items-center gap-4">
                <Avatar className="size-40">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="text-2xl">S</AvatarFallback>
                </Avatar>
                <div className="space-y-5">
                    <div className="flex gap-2">
                        <h1 className="text-2xl font-semibold">John Doe</h1>
                        <Button variant="secondary">Follow</Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="secondary">Message</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Message</DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="space-y-4">
                                    <span className="text-sm text-muted-foreground">
                                        Send a message to John Doe
                                    </span>
                                    <Form className="space-y-4">
                                        <Textarea
                                            placeholder="Message"
                                            className="resize-none"
                                            rows={4}
                                        />
                                        <Button type="submit">Send</Button>
                                    </Form>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-sm text-muted-foreground">
                            @john_doe
                        </span>
                        <Badge variant={"secondary"} className="capitalize">
                            Developer
                        </Badge>
                        <Badge variant={"secondary"}>100 followers</Badge>
                        <Badge variant={"secondary"}>100 following</Badge>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                {[
                    {
                        label: "About",
                        to: `/users/john_doe`,
                    },
                    {
                        label: "Products",
                        to: `/users/john_doe/products`,
                    },
                    {
                        label: "Posts",
                        to: `/users/john_doe/posts`,
                    },
                ].map((item) => (
                    <NavLink
                        end
                        key={item.label}
                        className={({ isActive }) =>
                            cn(
                                buttonVariants({ variant: "outline" }),
                                isActive && "bg-accent text-foreground "
                            )
                        }
                        to={item.to}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
            <div className="max-w-screen-md">
                <Outlet />
            </div>
        </div>
    );
}
