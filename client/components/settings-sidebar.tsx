"use client"

import * as React from "react"
import {
  Bell,
  Check,
  Globe,
  Home,
  Keyboard,
  Link,
  Lock,
  Menu,
  MessageCircle,
  Paintbrush,
  Settings,
  Video,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

const data = {
    nav: [
        { name: "Notifications", link: "", icon: Bell },
        { name: "Profile", link: "profile", icon: Home },
        { name: "Account", link: "account", icon: Menu },
        { name: "Appearance", link: "", icon: Paintbrush },
        { name: "Messages & media", link: "", icon: MessageCircle },
        { name: "Language & region", link: "", icon: Globe },
        { name: "Accessibility", link: "", icon: Keyboard },
        { name: "Mark as read", link: "", icon: Check },
        { name: "Audio & video", link: "", icon: Video },
        { name: "Connected accounts", link: "", icon: Link },
        { name: "Privacy & visibility", link: "", icon: Lock },
        { name: "Advanced", link: "", icon: Settings },
    ],
}

export function SettingsSidebar() {
    const pathName = usePathname()
    const currentPath = pathName
        ?.split("/")
        .filter(Boolean)
        .pop()
        ?.replace(/\s+/g, "")
        .toLowerCase();

    return (
        <div>
        <Sidebar collapsible="none" className="hidden md:flex bg-background w-full">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.nav.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={currentPath === item.link}
                                    >
                                        <a href={`/settings/${item.link}`}>
                                            <item.icon />
                                            <span>{item.name}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
        </div>
    )
}
