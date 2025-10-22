import { Form, redirect } from "react-router";
import InputPair from "~/common/components/input-pair";
import type { Route } from "./+types/submit-post-page";
import { HeroSection } from "~/common/components/hero-section";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { z } from "zod";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Submit Post | wemake" },
        { name: "description", content: "Create a new post" },
    ];
};

const formSchema = z.object({
    title: z.string().min(1).max(40),
    content: z.string().min(1).max(1000),
    category: z.string(),
});

export default function SubmitPage() {
    return (
        <div className="space-y-10">
            <HeroSection
                title="Submit Post"
                subtitle="Share your thoughts with the community"
            />
            <Form method="post" className="flex flex-col gap-7 max-w-screen-lg mx-auto">
                <InputPair
                    label="Title"
                    name="title"
                    id="title"
                    description="(40 characters or less)"
                    placeholder="Enter a title"
                    required
                />
                <SelectPair
                    required
                    name="category"
                    label="Category"
                    description="Choose a category"
                    placeholder="Select a category"
                    options={[
                        {
                            label: "General",
                            value: "general",
                        },
                        {
                            label: "Technology",
                            value: "technology",
                        },
                        {
                            label: "Science",
                            value: "science",
                        },
                    ]}
                />
                <InputPair
                    label="Content"
                    name="content"
                    id="content"
                    description="(1000 characters or less)"
                    maxLength={1000}
                    placeholder="Enter your content"
                    textArea
                    required
                />
                <div className="flex justify-center">
                    <Button type="submit" className="w-1/2">Submit</Button>
                </div>
            </Form>
        </div>
    );
}
