import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "HOME",
        url: "/",
        icon: Home,
    },
    {
        title: "ORDER HISTORY",
        url: "/pedidos",
        icon: Inbox,
    },
    {
        title: "MESSAGES",
        url: "#",
        icon: Calendar,
    },
    {
        title: "STATISTICS",
        url: "#",
        icon: Search,
    },
    {
        title: "PRODUCTS",
        url: "#",
        icon: Settings,
    },
    {
        title: "SETTINGS",
        url: "#",
        icon: Settings,
    },
]

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>DASHBOARD ORDERS</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar