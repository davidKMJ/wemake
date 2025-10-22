import { Form } from "react-router";
import type { Route } from "./+types/otp-start-page";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Start OTP | wemake" },
        { name: "description", content: "Start OTP verification" },
    ];
};


export default function OtpStartPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full relative">
            <div className="flex flex-col items-center justify-center gap-10 max-w-lg w-full">
                <div>
                    <h1 className="text-4xl font-bold text-center">
                        Login with OTP
                    </h1>
                    <p className="text-sm text-muted-foreground text-center">
                        We will send a code to your email to verify your
                        account.
                    </p>
                </div>
                <Form method="post" className="w-full space-y-4">
                    <InputPair
                        id="email"
                        label="Email"
                        description="Enter your email"
                        name="email"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                    <Button type="submit" className="w-full">
                        Send OTP
                    </Button>
                </Form>
            </div>
        </div>
    );
}
