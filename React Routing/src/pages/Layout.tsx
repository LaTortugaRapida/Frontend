import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-950">
            <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12"
                    aria-label="Main navigation"
                >
                    <NavLink
                        to="/"
                        end
                        className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950">
                            P
                        </span>
                        <span className="hidden text-sm font-bold tracking-tight text-white sm:block">
                            People
                            <span className="text-cyan-400">Directory</span>
                        </span>
                    </NavLink>
                    <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                                    isActive
                                        ? "bg-white text-slate-950 shadow-sm"
                                        : "text-slate-400 hover:bg-white/10 hover:text-white"
                                }`
                            }
                        >
                            Users
                        </NavLink>
                        <NavLink
                            to="/add"
                            className={({ isActive }) =>
                                `rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                                    isActive
                                        ? "bg-cyan-400 text-slate-950 shadow-sm"
                                        : "text-slate-400 hover:bg-white/10 hover:text-white"
                                }`
                            }
                        >
                            Add user
                        </NavLink>
                    </div>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    );
};
