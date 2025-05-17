import React, { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { SettingsSidebar } from "@/components/settings-sidebar"
import { ButtonGhost } from "@/components/settings-topbar"

type SettingsLayoutProps = {
    children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <SidebarProvider
            style={
                {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <div className="px-4 lg:px-7">
                                <div className="border-b pb-6">
                                    <h1 className="text-2xl font-bold">Settings</h1>
                                    <p className="text-muted-foreground text-balance">
                                        Manage your account settings
                                    </p>
                                </div>
                                <div className="flex md:hidden bg-background pt-4 px-3"><ButtonGhost /></div>
                                <div className="flex h-svh items-center justify-center pt-4">
                                    <SidebarProvider className="items-start">
                                        <SettingsSidebar />
                                        {children}
                                    </SidebarProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
