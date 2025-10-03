import { HeroSection } from "~/common/components/hero-section";
import type { Route } from "./+types/promote-page";
import SelectPair from "~/common/components/select-pair";
import { Form } from "react-router";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import type { DateRange } from "react-day-picker";
import { useState } from "react";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Promote Product | ProductHunt Clone" },
        {
            name: "description",
            content: "Promote your product in our community",
        },
    ];
};

export default function PromotePage() {
    const [promotionPeriod, setPromotionPeriod] = useState<
        DateRange | undefined
    >();
    const totalDays =
        promotionPeriod?.from && promotionPeriod.to
            ? DateTime.fromJSDate(promotionPeriod.to).diff(
                  DateTime.fromJSDate(promotionPeriod.from),
                  "days"
              ).days
            : 0;
    return (
        <div>
            <HeroSection
                title="Promote Your Product"
                subtitle="Promote your product in our community"
            />
            <Form className="max-w-sm mx-auto flex flex-col gap-10 items-center ">
                <SelectPair
                    label="Select a product"
                    description="Select the product you want to promote"
                    name="product"
                    placeholder="Select a product"
                    options={[
                        {
                            label: "AI Dark Mode Maker",
                            value: "ai-dark-mode-maker",
                        },
                        {
                            label: "AI Dark Mode Maker",
                            value: "ai-dark-mode-maker",
                        },
                        {
                            label: "AI Dark Mode Maker",
                            value: "ai-dark-mode-maker",
                        },
                    ]}
                />
                <div className="flex flex-col gap-4 items-center w-full">
                    <Label className="flex flex-col items-center gap-1">
                        Select a range of dates for promotion
                        <small className="text-muted-foreground">
                            Minimum duration is 3 days.
                        </small>
                    </Label>
                    <Calendar
                        mode="range"
                        selected={promotionPeriod}
                        onSelect={setPromotionPeriod}
                        min={3}
                        disabled={{ before: new Date() }}
                    />
                </div>
                <Button type="submit" disabled={totalDays === 0}>
                    Go to checkout (${totalDays * 20})
                </Button>
            </Form>
        </div>
    );
}
