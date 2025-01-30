'use client';

import { Calendar, Mail, MessageSquare, Ticket } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

const eventsData = [
    { month: 'Jan', events: 65 },
    { month: 'Feb', events: 59 },
    { month: 'Mar', events: 80 },
    { month: 'Apr', events: 81 },
    { month: 'May', events: 56 },
    { month: 'Jun', events: 55 },
    { month: 'Jul', events: 40 },
    { month: 'Aug', events: 45 },
    { month: 'Sep', events: 60 },
    { month: 'Oct', events: 70 },
    { month: 'Nov', events: 75 },
    { month: 'Dec', events: 85 },
];

const campaignsData = [
    { month: 'Jan', campaigns: 12 },
    { month: 'Feb', campaigns: 15 },
    { month: 'Mar', campaigns: 18 },
    { month: 'Apr', campaigns: 14 },
    { month: 'May', campaigns: 20 },
    { month: 'Jun', campaigns: 22 },
    { month: 'Jul', campaigns: 25 },
    { month: 'Aug', campaigns: 28 },
    { month: 'Sep', campaigns: 30 },
    { month: 'Oct', campaigns: 35 },
    { month: 'Nov', campaigns: 40 },
    { month: 'Dec', campaigns: 45 },
];

export default function DashboardPage() {
    const pageTitle = 'Dashboard';
    const breadcrumb = [{ title: 'Dashboard', route: 'dashboard' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Emails Sent
                            </CardTitle>
                            <Mail className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">54,231</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Events
                            </CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">396</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Tickets
                            </CardTitle>
                            <Ticket className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,832</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Feedbacks
                            </CardTitle>
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">723</div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Events Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer
                                config={{
                                    events: {
                                        label: 'Events',
                                        color: 'hsl(var(--primary))',
                                    },
                                }}
                                className="h-[100%]"
                            >
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={eventsData}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Bar
                                            dataKey="events"
                                            fill="var(--color-events)"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <ChartTooltip
                                            content={<ChartTooltipContent />}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Campaigns Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer
                                config={{
                                    campaigns: {
                                        label: 'Campaigns',
                                        color: 'hsl(var(--secondary))',
                                    },
                                }}
                                className="h-[100%]"
                            >
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={campaignsData}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Bar
                                            dataKey="campaigns"
                                            fill="var(--color-campaigns)"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <ChartTooltip
                                            content={<ChartTooltipContent />}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
