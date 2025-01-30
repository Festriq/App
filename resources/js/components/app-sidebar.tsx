import {
    AudioWaveform,
    CalendarRangeIcon,
    CalendarSearchIcon,
    ChartColumnIcon,
    MegaphoneIcon,
    MessageCircleHeartIcon,
    Monitor,
    TentIcon,
    TicketIcon,
    UsersIcon,
} from 'lucide-react';
import * as React from 'react';

import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
} from '@/components/ui/sidebar';
import { NavConfigurations } from './nav-configurations';
import { NavDashboard } from './nav-monitoring';
import { NavPlatform } from './nav-platform';

// This is sample data.
const data = {
    dashboard: [
        {
            title: 'Dashboard',
            route: 'dashboard',
            icon: Monitor,
        },
        {
            title: 'Calendar',
            route: 'calendar.index',
            icon: CalendarSearchIcon,
        },
    ],
    platform: [
        {
            title: 'Events',
            route: 'events.index',
            icon: CalendarRangeIcon,
        },
        {
            title: 'Tickets',
            route: 'tickets.index',
            icon: TicketIcon,
        },
        {
            title: 'Campaigns',
            route: 'campaigns.index',
            icon: TentIcon,
        },
        {
            title: 'Announcements',
            route: 'announcements.index',
            icon: MegaphoneIcon,
        },
        {
            title: 'Feedbacks',
            route: 'feedbacks.index',
            icon: MessageCircleHeartIcon,
        },
    ],
    reports: [
        {
            title: 'Reports',
            icon: ChartColumnIcon,
            route: 'reports.index', // Add a route for the parent item
            dropdown: true,
            items: [
                {
                    title: 'Events',
                    route: 'reports.events',
                },
                {
                    title: 'Tickets',
                    route: 'reports.tickets',
                },
                {
                    title: 'Campaigns',
                    route: 'reports.campaigns',
                },
            ],
        },
        {
            title: 'Users',
            route: 'users.index',
            icon: UsersIcon,
            dropdown: false,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <AudioWaveform size={18} />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">Festriq</span>
                        Enterprise Plan
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <NavDashboard dashboard={data.dashboard} />
                <NavPlatform items={data.platform} />
                <NavConfigurations items={data.reports} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
