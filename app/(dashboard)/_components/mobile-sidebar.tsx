"use client"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "./sidebar"
import { useState } from "react";
export const MobileSidebar = () => {
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    return (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition"><Menu /></SheetTrigger>
            <SheetContent side={"left"} className="p-0 bg-white">
                <Sidebar setOpen={setSheetOpen} />
            </SheetContent>
        </Sheet>

    )
}