import { useEffect, useState } from "react";
import { Http } from "../helpers/api";
import type { User } from "../helpers/types";
import { Link } from "react-router-dom";

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        Http.get<User[]>("/users").then((res) => {
            setUsers(res.data);
        });
    }, []);

    const deleteUser = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            Http
            .delete("/users/" + id)
            .then(() => {
                setUsers(users.filter((u) => u.id !== id));
            });
        }
    };
    return (
        <main className="min-h-screen bg-slate-950 px-5 py-10 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 border-b border-white/10 pb-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                        People directory
                    </p>
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Meet the team<span className="text-cyan-400">.</span>
                    </h1>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                        Browse employee profiles and salary details.
                    </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {users.map((u) => (
                        <div
                            key={u.id}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.1]"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" />
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-sm font-black text-cyan-300 ring-1 ring-cyan-300/20">
                                    #{u.id}
                                </div>
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-400">
                                    {u.gender}
                                </span>
                            </div>
                            <h3 className="mt-7 text-xl font-extrabold tracking-tight text-white">
                                {u.name} {u.surname}
                            </h3>
                            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-slate-400">
                                {u.gender === "Male" ? "he" : "she"} earns{" "}
                                <span className="font-bold text-teal-300">
                                    {u.salary} USD
                                </span>
                            </p>
                            <button
                                onClick={() => deleteUser(u.id)}
                                className="bg-pink-500 text-black px-2 rounded-md my-2 hover:bg-pink-600 cursor-pointer"
                            >
                                Delete
                            </button>
                            <Link to={`/users/edit/${u.id}`} className="text-teal-400 mx-4 hover:underline">Edit</Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};
