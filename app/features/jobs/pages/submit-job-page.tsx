import { HeroSection } from "~/common/components/hero-section";
import type { Route } from "./+types/submit-job-page";
import { Form, redirect } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { Button } from "~/common/components/ui/button";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";
import { getLoggedInUserId } from "~/features/auth/queries";
import { createJob } from "../mutations";

export const meta: Route.MetaFunction = ({ params, data }) => {
    return [
        { title: "Submit Job | wemake" },
        { name: "description", content: "Submit your job to our community" },
    ];
};

export const loader = async ({ request }: Route.LoaderArgs) => {
    const { client } = makeSSRClient(request);
    await getLoggedInUserId(client);
};

export const action = async ({ request }: Route.ActionArgs) => {
    const { client } = makeSSRClient(request);
    await getLoggedInUserId(client);
    const formData = await request.formData();
    const { success, data, error } = formSchema.safeParse(
        Object.fromEntries(formData)
    );
    if (!success) {
        return {
            fieldErrors: error.flatten().fieldErrors,
        };
    }
    const { job_id } = await createJob(client, data);
    return redirect(`/jobs/${job_id}`);
};

export const formSchema = z.object({
    position: z.string().min(1).max(40),
    overview: z.string().min(1).max(1000),
    responsibilities: z.string().min(1).max(400),
    qualifications: z.string().min(1).max(400),
    benefits: z.string().min(1).max(400),
    skills: z.string().min(1).max(400),
    companyName: z.string().min(1).max(40),
    companyLogoUrl: z.string().min(1).max(400),
    companyLocation: z.string().min(1).max(100),
    applyUrl: z.string().min(1).max(400),
    jobType: z.enum(
        JOB_TYPES.map((jobType) => jobType.value) as [string, ...string[]]
    ),
    jobLocation: z.enum(
        LOCATION_TYPES.map((location) => location.value) as [
            string,
            ...string[],
        ]
    ),
    salary: z.enum(SALARY_RANGE),
});

export default function SubmitJobPage({ actionData }: Route.ComponentProps) {
    return (
        <div>
            <HeroSection
                title="Post a Job"
                subtitle="Post a job to our community"
            />
            <Form
                method="post"
                className="flex flex-col gap-10 items-center w-full max-w-screen-lg mx-auto"
            >
                <div className="grid grid-cols-3 w-full gap-10">
                    <InputPair
                        id="position"
                        label="Position"
                        name="position"
                        placeholder="i.e. Senior Software Engineer"
                        maxLength={40}
                        description="(40 characters max)"
                        type="text"
                        required
                    />
                    {actionData?.fieldErrors?.position && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.position}
                        </p>
                    )}
                    <InputPair
                        id="overview"
                        label="Overview"
                        name="overview"
                        placeholder="i.e. We are looking for a senior software engineer with 5 years of experience in React and Node.js"
                        maxLength={1000}
                        description="(1000 characters max)"
                        type="text"
                        textArea
                        required
                    />
                    {actionData?.fieldErrors?.overview && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.overview}
                        </p>
                    )}
                    <InputPair
                        id="responsibilities"
                        label="Responsibilities"
                        name="responsibilities"
                        placeholder="i.e. Develop web applications, Maintain web applications"
                        maxLength={400}
                        description="(400 characters max, comma separated)"
                        type="text"
                        textArea
                        required
                    />
                    {actionData?.fieldErrors?.responsibilities && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.responsibilities}
                        </p>
                    )}
                    <InputPair
                        id="qualifications"
                        label="Qualifications"
                        name="qualifications"
                        placeholder="i.e. Bachelor's degree in Computer Science, 5 years of experience in React and Node.js"
                        maxLength={400}
                        description="(400 characters max, comma separated)"
                        type="text"
                        textArea
                        required
                    />
                    {actionData?.fieldErrors?.qualifications && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.qualifications}
                        </p>
                    )}
                    <InputPair
                        id="benefits"
                        label="Benefits"
                        name="benefits"
                        placeholder="i.e. Health insurance, Dental insurance, Vision insurance"
                        maxLength={400}
                        description="(400 characters max, comma separated)"
                        type="text"
                        textArea
                        required
                    />
                    {actionData?.fieldErrors?.benefits && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.benefits}
                        </p>
                    )}
                    <InputPair
                        id="skills"
                        label="Skills"
                        name="skills"
                        placeholder="i.e. React, Node.js, TypeScript"
                        maxLength={400}
                        description="(400 characters max, comma separated)"
                        type="text"
                        textArea
                        required
                    />
                    {actionData?.fieldErrors?.skills && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.skills}
                        </p>
                    )}
                    <InputPair
                        id="companyName"
                        label="Company Name"
                        name="companyName"
                        placeholder="i.e. Google"
                        maxLength={40}
                        description="(40 characters max)"
                        type="text"
                        required
                    />
                    {actionData?.fieldErrors?.companyName && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.companyName}
                        </p>
                    )}
                    <InputPair
                        id="companyLogoUrl"
                        label="Company Logo URL"
                        name="companyLogoUrl"
                        placeholder="i.e. https://www.google.com/logo.png"
                        maxLength={400}
                        description="(400 characters max)"
                        type="text"
                        required
                    />
                    {actionData?.fieldErrors?.companyLogoUrl && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.companyLogoUrl}
                        </p>
                    )}
                    <InputPair
                        id="companyLocation"
                        label="Company Location"
                        name="companyLocation"
                        placeholder="i.e. San Francisco, CA"
                        maxLength={100}
                        description="(100 characters max)"
                        type="text"
                        required
                    />
                    {actionData?.fieldErrors?.companyLocation && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.companyLocation}
                        </p>
                    )}
                    <InputPair
                        id="applyUrl"
                        label="Apply URL"
                        name="applyUrl"
                        placeholder="i.e. https://www.google.com/apply"
                        maxLength={400}
                        description="(400 characters max)"
                    />
                    {actionData?.fieldErrors?.applyUrl && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.applyUrl}
                        </p>
                    )}
                    <SelectPair
                        label="Job Type"
                        description="Select the type of job"
                        name="jobType"
                        required
                        placeholder="Select the type of job"
                        options={JOB_TYPES.map((jobType) => ({
                            value: jobType.value,
                            label: jobType.label,
                        }))}
                    />
                    {actionData?.fieldErrors?.jobType && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.jobType}
                        </p>
                    )}
                    <SelectPair
                        label="Job Location"
                        description="Select the location of the job"
                        name="jobLocation"
                        required
                        placeholder="Select the location of the job"
                        options={LOCATION_TYPES.map((location) => ({
                            value: location.value,
                            label: location.label,
                        }))}
                    />
                    {actionData?.fieldErrors?.jobLocation && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.jobLocation}
                        </p>
                    )}
                    <SelectPair
                        label="Salary"
                        description="Select the salary of the job"
                        name="salary"
                        required
                        placeholder="Select the salary of the job"
                        options={SALARY_RANGE.map((salary) => ({
                            value: salary,
                            label: salary,
                        }))}
                    />
                    {actionData?.fieldErrors?.salary && (
                        <p className="text-sm text-destructive">
                            {actionData.fieldErrors.salary}
                        </p>
                    )}
                </div>
                <Button type="submit" className="w-full max-w-sm">
                    Post job for $100
                </Button>
            </Form>
        </div>
    );
}
