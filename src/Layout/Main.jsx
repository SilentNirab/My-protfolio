import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Main = () => {
    const NavLinks = <>
        <li className="text-lg text-gray-400">
            <NavLink to={'/'} className={({ isActive, isPending }) =>
                isActive
                    ? "text-black"
                    : isPending
                        ? "pending "
                        : ""
            }>Home</NavLink>
        </li>
        <li className="text-lg text-gray-400">
            <NavLink to={'/about'} className={({ isActive, isPending }) =>
                isActive
                    ? "text-black"
                    : isPending
                        ? "pending "
                        : ""
            }>About</NavLink>
        </li>
        <li className="text-lg text-gray-400">
            <NavLink to={'/protfolio'} className={({ isActive, isPending }) =>
                isActive
                    ? "text-black"
                    : isPending
                        ? "pending "
                        : ""
            }>Protfolio</NavLink>
        </li>
        <li className="text-lg text-gray-400">
            <NavLink to={'/contact'} className={({ isActive, isPending }) =>
                isActive
                    ? "text-black"
                    : isPending
                        ? "pending "
                        : ""
            }>Contact</NavLink>
        </li>

        
    </>
    return (
        <div className="">
            <div className="drawer md:drawer-open relative">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className=" bg-[#f8f8f8] min-h-screen drawer-content flex flex-col items-center justify-center">
                    <div className="p-4 absolute top-0 right-0">
                        <label htmlFor="my-drawer-2" className="btn bg-[#f8f8f8] hover:bg-[#ffffff] drawer-button md:hidden"><GiHamburgerMenu></GiHamburgerMenu></label>

                    </div>
                    {/* Page content here */}
                    <div className="">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="p-4 pl-20 space-y-2 w-80 min-h-full bg-white text-base-content flex flex-col justify-center text-left">
                        {/* Sidebar content here */}
                        <h2 className="text-2xl font-bold">Developer</h2>
                        {NavLinks}
                    </ul>

                </div>
            </div>
        </div>
    )
};

export default Main;