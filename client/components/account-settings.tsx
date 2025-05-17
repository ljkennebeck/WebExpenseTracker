"use client"

import * as React from "react"

export function AccountSettings() {
    return (
        <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
            <header className="flex shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 mb-10">
                <div className="px-4 lg:px-7 w-full max-w-200">
                    <div className="border-b pb-6 pt-3">
                        <h1 className="text-xl font-semibold">Account</h1>
                        <p className="text-muted-foreground text-balance text-sm">
                            Manage your account settings
                        </p>
                    </div>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="aspect-video max-w-3xl rounded-xl bg-muted/50"
                    />
                ))}
            </div>
        </main>
    )
}