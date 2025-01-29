import { ModeToggle } from '@/components/mode-toggle';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

interface breadcrumbProps {
    breadcrumb: { title: string; route: string }[];
}

export const AppHeader = ({ breadcrumb }: breadcrumbProps) => {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumb.map((item, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink
                                href={route(item.route)}
                                className={cn(
                                    index === breadcrumb.length - 1
                                        ? 'font-bold text-primary' // Active styles
                                        : 'text-muted', // Default styles
                                )}
                            >
                                {item.title}
                            </BreadcrumbLink>
                            {index < breadcrumb.length - 1 && (
                                <BreadcrumbSeparator />
                            )}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-4">
                <ModeToggle />
            </div>
        </header>
    );
};
