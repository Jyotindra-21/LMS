import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (

        <div className="p-4 border-b h-full flex items-center bg-red shadow-sm dark:bg-slate-950">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}