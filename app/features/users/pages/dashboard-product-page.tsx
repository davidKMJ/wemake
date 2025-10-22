import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/common/components/ui/card";
import type { Route } from "./+types/dashboard-product-page";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "~/common/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

export const meta: Route.MetaFunction = () => {
    return [{ title: "Product Dashboard | wemake" }];
};
    
const chartConfig = {
    views: {
        label: "Page Views",
        color: "var(--chart-1)",
    },
    visitors: {
        label: "Visitors",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

export default function DashboardProductPage({
    loaderData,
}: Route.ComponentProps) {
    return (
        <div className="space-y-5">
            <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={Array.from({ length: 10 }).map((_, index) => ({
                                month: `Month ${index}`,
                                product_views: index * 100,
                                product_visits: index * 100,
                            }))}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                padding={{ left: 15, right: 15 }}
                            />
                            <Area
                                dataKey="product_views"
                                type="natural"
                                stroke="var(--color-views)"
                                fill="var(--color-views)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Area
                                dataKey="product_visits"
                                type="natural"
                                stroke="var(--color-visitors)"
                                fill="var(--color-visitors)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <ChartTooltip
                                cursor={false}
                                wrapperStyle={{ minWidth: "200px" }}
                                content={
                                    <ChartTooltipContent indicator="dot" />
                                }
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}
