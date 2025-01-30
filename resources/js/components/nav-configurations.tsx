import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function NavConfigurations({
    items,
}: {
    items: {
        title: string;
        icon?: LucideIcon;
        route: string;
        dropdown: boolean;
        items?: {
            title: string;
            route: string;
        }[];
    }[];
}) {
    const [openCollapsibles, setOpenCollapsibles] = useState<{
        [key: string]: boolean;
    }>({});
    const { url } = usePage();

    useEffect(() => {
        const updatedOpenCollapsibles = items.reduce(
            (acc, item) => {
                if (item.dropdown) {
                    acc[item.title] =
                        url.startsWith('/reports') ||
                        (item.items?.some((subItem) =>
                            route().current(subItem.route),
                        ) ??
                            false);
                }
                return acc;
            },
            {} as { [key: string]: boolean },
        );
        setOpenCollapsibles(updatedOpenCollapsibles);
    }, [items, url]);

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Configurations</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    if (item.dropdown) {
                        return (
                            <Collapsible
                                key={item.title}
                                asChild
                                open={openCollapsibles[item.title]}
                                onOpenChange={(isOpen) =>
                                    setOpenCollapsibles((prev) => ({
                                        ...prev,
                                        [item.title]: isOpen,
                                    }))
                                }
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem
                                                    key={subItem.title}
                                                >
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        isActive={route().current(
                                                            subItem.route,
                                                        )}
                                                    >
                                                        <Link
                                                            href={route(
                                                                subItem.route,
                                                            )}
                                                        >
                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    }

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={route().current(item.route)}
                            >
                                <Link href={route(item.route)}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
