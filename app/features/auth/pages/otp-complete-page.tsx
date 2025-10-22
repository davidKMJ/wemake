import { Form, useSearchParams } from "react-router";
import type { Route } from "./+types/otp-complete-page";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Complete OTP | wemake" },
        { name: "description", content: "Complete OTP verification" },
    ];
};

export default function OtpCompletePage() {
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    return (
        <div className="flex flex-col items-center justify-center h-full relative">
            <div className="flex flex-col items-center justify-center gap-10 max-w-lg w-full">
                <div>
                    <h1 className="text-4xl font-bold text-center">
                        Confirm OTP
                    </h1>
                    <p className="text-sm text-muted-foreground text-center">
                        Enter the OTP code sent to your email to verify your
                        account.
                    </p>
                </div>
                <Form className="w-full space-y-4" method="post">
                    <InputPair
                        id="email"
                        label="Email"
                        description="Enter your email"
                        name="email"
                        type="text"
                        placeholder="Enter your name"
                        defaultValue={email ?? ""}
                        required
                    />
                    <InputPair
                        id="otp"
                        label="OTP"
                        description="Enter the OTP code"
                        name="otp"
                        type="text"
                        placeholder="Enter your OTP"
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
