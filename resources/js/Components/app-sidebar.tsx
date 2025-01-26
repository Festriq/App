import { AudioWaveform, Monitor, SquareTerminal } from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/Components/nav-main';
import { NavUser } from '@/Components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
} from '@/Components/ui/sidebar';
import { NavDashboard } from './nav-dashboard';

// This is sample data.
const data = {
    dashboard: [
        {
            title: 'Dashboard',
            route: 'dashboard',
            icon: Monitor,
        },
    ],
    navMain: [
        {
            title: 'Playground',
            route: 'dashboard',
            icon: SquareTerminal,
            isActive: false,
            items: [
                {
                    title: 'History',
                    route: 'dashboard',
                },
            ],
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
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
