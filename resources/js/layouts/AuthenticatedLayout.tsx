// AuthenticatedLayout.tsx
import { AppHeader } from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

interface AuthenticatedProps {
    children: ReactNode;
    title?: string;
    breadcrumb?: { title: string; route: string }[];
}

export default function Authenticated({
    children,
    title,
    breadcrumb,
}: AuthenticatedProps) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Head title={title} />
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <AppHeader breadcrumb={breadcrumb || []} />
                    <main>{children}</main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
