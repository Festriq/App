import { Calendar, Mail, MessageSquare, Ticket } from 'lucide-react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';

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

const userRegistrationData = [
    {
        month: 'Jan',
        externalRegistered: 100,
        registeredAndOpened: 80,
        notRegistered: 20,
    },
    {
        month: 'Feb',
        externalRegistered: 120,
        registeredAndOpened: 95,
        notRegistered: 25,
    },
    {
        month: 'Mar',
        externalRegistered: 140,
        registeredAndOpened: 110,
        notRegistered: 30,
    },
    {
        month: 'Apr',
        externalRegistered: 160,
        registeredAndOpened: 130,
        notRegistered: 30,
    },
    {
        month: 'May',
        externalRegistered: 180,
        registeredAndOpened: 150,
        notRegistered: 30,
    },
    {
        month: 'Jun',
        externalRegistered: 200,
        registeredAndOpened: 170,
        notRegistered: 30,
    },
    {
        month: 'Jul',
        externalRegistered: 220,
        registeredAndOpened: 190,
        notRegistered: 30,
    },
    {
        month: 'Aug',
        externalRegistered: 240,
        registeredAndOpened: 210,
        notRegistered: 30,
    },
    {
        month: 'Sep',
        externalRegistered: 260,
        registeredAndOpened: 230,
        notRegistered: 30,
    },
    {
        month: 'Oct',
        externalRegistered: 280,
        registeredAndOpened: 250,
        notRegistered: 30,
    },
    {
        month: 'Nov',
        externalRegistered: 300,
        registeredAndOpened: 270,
        notRegistered: 30,
    },
    {
        month: 'Dec',
        externalRegistered: 320,
        registeredAndOpened: 290,
        notRegistered: 30,
    },
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
                        <CardContent className="p-0">
                            <ChartContainer
                                config={{
                                    events: {
                                        label: 'Events',
                                        color: 'hsl(var(--primary))',
                                    },
                                }}
                                className="aspect-[5/2] p-6"
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
                        <CardContent className="p-0">
                            <ChartContainer
                                config={{
                                    campaigns: {
                                        label: 'Campaigns',
                                        color: 'hsl(var(--secondary))',
                                    },
                                }}
                                className="aspect-[5/2] p-6"
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
                <Card>
                    <CardHeader>
                        <CardTitle>User Registration Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ChartContainer
                            config={{
                                externalRegistered: {
                                    label: 'Externally Registered',
                                    color: 'hsl(var(--primary))',
                                },
                                registeredAndOpened: {
                                    label: 'Registered and Opened',
                                    color: 'hsl(var(--secondary))',
                                },
                                notRegistered: {
                                    label: 'Not Registered',
                                    color: 'hsl(var(--muted))',
                                },
                            }}
                            className="aspect-[5/1] p-6"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={userRegistrationData}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Area
                                        type="monotone"
                                        dataKey="externalRegistered"
                                        stackId="1"
                                        stroke="var(--color-externalRegistered)"
                                        fill="var(--color-externalRegistered)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="registeredAndOpened"
                                        stackId="1"
                                        stroke="var(--color-registeredAndOpened)"
                                        fill="var(--color-registeredAndOpened)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="notRegistered"
                                        stackId="1"
                                        stroke="var(--color-notRegistered)"
                                        fill="var(--color-notRegistered)"
                                    />
                                    <ChartTooltip
                                        content={<ChartTooltipContent />}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
