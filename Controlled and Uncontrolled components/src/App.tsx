import { UserList } from "./components/UserList";
import { AddUser, type Account } from "./components/AddUser";
import type { User } from "./components/UserList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get<User[]>("http://localhost:4000/users")
            .then((response) => setUsers(response.data));
    }, []);

    const addUser = (body: Account) => {
        axios.post("http://localhost:4000/users", body).then((response) => {
            window.location.reload();
            console.log(response.data);
        });
    };

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <header className="mb-8 border-b border-white/10 pb-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                        People / Directory
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Team overview
                    </h1>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                        A clear view of your team, roles, and compensation.
                    </p>
                </header>
                <AddUser onAdd={addUser} />
                <UserList users={users} />
            </div>
        </main>
    );
}
