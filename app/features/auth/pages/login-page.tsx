import InputPair from "~/common/components/input-pair";
import { Link, redirect, useNavigation } from "react-router";
import { Form } from "react-router";
import type { Route } from "./+types/login-page";
import { Button } from "~/common/components/ui/button";
import { LoaderCircle } from "lucide-react";
import AuthButtons from "../components/auth-buttons";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Login | wemake" },
        { name: "description", content: "Login to your account" },
    ];
};

export default function LoginPage() {
    const navigation = useNavigation();
    const isSubmitting =
        navigation.state === "submitting" || navigation.state === "loading";
    return (
        <div className="flex flex-col items-center justify-center h-full relative">
            <Button variant="ghost" asChild className="absolute top-4 right-4">
                <Link to="/auth/join">Join</Link>
            </Button>
            <div className="flex flex-col items-center justify-center gap-10 max-w-lg w-full">
                <h1 className="text-4xl font-bold">Login to your account</h1>
                <Form className="w-full space-y-4" method="post">
                    <InputPair
                        id="email"
                        label="Email"
                        description="Enter your email"
                        name="email"
                        type="text"
                        placeholder="Enter your name"
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
                            <LoaderCircle className="animate-spin" />
                        ) : (
                            "Login"
                        )}
                    </Button>
                    <AuthButtons />
                </Form>
            </div>
        </div>
    );
}
