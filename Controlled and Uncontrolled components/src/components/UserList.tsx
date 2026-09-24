export type User = {
    id: number;
    name: string;
    surname: string;
    gender: "male" | "female";
    salary: number;
};

type Props = {
    users: User[];
};

export const UserList: React.FC<Props> = ({ users }) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-7">
                <div>
                    <h2 className="text-lg font-semibold text-white">
                        All team members
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Your current people data at a glance.
                    </p>
                </div>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {users.length} members
                </span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left text-sm">
                    <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-500">
                        <tr>
                            <th className="px-5 py-4 font-medium sm:px-7">
                                ID
                            </th>
                            <th className="px-5 py-4 font-medium">Name</th>
                            <th className="px-5 py-4 font-medium">Surname</th>
                            <th className="px-5 py-4 font-medium">Gender</th>
                            <th className="px-5 py-4 text-right font-medium sm:px-7">
                                Salary
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                        {users.map((user) => (
                            <tr
                                className="transition-colors hover:bg-cyan-400/[0.04]"
                                key={user.id}
                            >
                                <td className="px-5 py-4 font-mono text-xs text-slate-500 sm:px-7">
                                    #{String(user.id).padStart(3, "0")}
                                </td>
                                <td className="px-5 py-4 font-medium text-slate-100">
                                    {user.name}
                                </td>
                                <td className="px-5 py-4 text-slate-300">
                                    {user.surname}
                                </td>
                                <td className="px-5 py-4 capitalize text-slate-400">
                                    {user.gender}
                                </td>
                                <td className="px-5 py-4 text-right font-medium text-slate-200 sm:px-7">
                                    {user.salary}{" "}
                                    <span className="text-xs font-normal text-slate-500">
                                        USD
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
