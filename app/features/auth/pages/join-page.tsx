import InputPair from "~/common/components/input-pair";
import { Form, Link, useNavigation } from "react-router";
import type { Route } from "./+types/join-page";
import { Button } from "~/common/components/ui/button";
import { LoaderCircle } from "lucide-react";
import AuthButtons from "../components/auth-buttons";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Join | wemake" },
        { name: "description", content: "Create a new account" },
    ];
};


export default function JoinPage() {
    const navigation = useNavigation();
    const isSubmitting =
        navigation.state === "submitting" || navigation.state === "loading";
    return (
        <div className="flex flex-col items-center justify-center h-full relative">
            <Button variant="ghost" asChild className="absolute top-4 right-4">
                <Link to="/auth/login">Login</Link>
            </Button>
            <div className="flex flex-col items-center justify-center gap-10 max-w-lg w-full">
                <h1 className="text-4xl font-bold">Create an account</h1>
                <Form className="w-full space-y-4" method="post">
                    <InputPair
                        id="name"
                        label="Name"
                        description="Enter your name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                    <InputPair
                        id="username"
                        label="Username"
                        description="Enter your username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        required
                    />
                    <InputPair
                        id="email"
                        label="Email"
                        description="Enter your email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <InputPair
                        label="Password"
                        description="Enter your password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <LoaderCircle className="w-4 h-4 animate-spin" />
                        ) : (
                            "Create account"
                        )}
                    </Button>
                    <AuthButtons />
                </Form>
            </div>
        </div>
    );
}
