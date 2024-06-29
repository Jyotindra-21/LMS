import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";


const Sidebar = ({ setOpen }: { setOpen?: (open: boolean) => void }) => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm dark:bg-slate-950">
            <div className="p-6 ">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes setOpen={setOpen} />
            </div>
        </div>);
}

export default Sidebar;