import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";

export function ButtonGhost() {
    const buttons = [
        { id: "profile", link: "profile", label: "Profile" },
        { id: "account", link: "account", label: "Account" },
        { id: "delete", link: "delete", label: "Delete" },
    ];

    const pathName = usePathname();
    const currentPath = pathName
        ?.split("/")
        .filter(Boolean)
        .pop()
        ?.replace(/\s+/g, "")
        .toLowerCase();
    
    return (
        <div>
            {buttons.map(({ id, link, label }) => (
                <Button asChild key={id} id={id} variant={currentPath === id ? "default" : "ghost"}>
                    <a href={`/settings/${link}`}>{label}</a>
                </Button>
            ))}
        </div>
    )
}
