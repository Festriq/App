import { AppHeader } from '@/Components/app-header';
import { AppSidebar } from '@/Components/app-sidebar';
import { ThemeProvider } from '@/Components/theme-provider';
import { SidebarInset, SidebarProvider } from '@/Components/ui/sidebar';
import { PropsWithChildren, ReactNode } from 'react';

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <AppHeader />
                    <main>{children}</main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
