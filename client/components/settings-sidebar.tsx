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

const data = {
    nav: [
        { name: "Notifications", link: "profile", icon: Bell },
        { name: "Profile", link: "profile", icon: Home },
        { name: "Account", link: "account", icon: Menu },
        { name: "Appearance", link: "profile", icon: Paintbrush },
        { name: "Messages & media", link: "profile", icon: MessageCircle },
        { name: "Language & region", link: "profile", icon: Globe },
        { name: "Accessibility", link: "profile", icon: Keyboard },
        { name: "Mark as read", link: "profile", icon: Check },
        { name: "Audio & video", link: "profile", icon: Video },
        { name: "Connected accounts", link: "profile", icon: Link },
        { name: "Privacy & visibility", link: "profile", icon: Lock },
        { name: "Advanced", link: "profile", icon: Settings },
    ],
}

export function SettingsSidebar() {
    const [open, setOpen] = React.useState(true)
    const [active, setActive] = React.useState("Home")

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
                                        isActive={item.name === active}
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
