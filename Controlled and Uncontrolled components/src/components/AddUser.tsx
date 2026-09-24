import { useForm, type SubmitHandler } from "react-hook-form";
import type { User } from "./UserList";
import { nameValidator, salaryValidator } from "../helpers/validator";

export type Account = Omit<User, "id">;

type Props = {
    onAdd: (user:Account) => void
}
export const AddUser:React.FC<Props> = ({onAdd}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Account>();

    const handleAdd: SubmitHandler<Account> = (data) => {
        onAdd(data);
    };
    return (
        <section className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur">
            <div className="border-b border-white/10 px-5 py-5 sm:px-7">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-300">
                        +
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">
                            Add a team member
                        </h2>
                        <p className="mt-1 text-sm text-slate-400">
                            Create a new profile for your directory.
                        </p>
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(handleAdd)}
                className="grid gap-5 px-5 py-6 sm:grid-cols-2 sm:px-7 lg:grid-cols-4"
            >
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                    {errors.name && <p className="text-red-400 m2">{errors.name.message}</p>}
                    First name
                    <input
                        className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10"
                        placeholder="e.g. Alice"
                        type="text"
                        {...register("name", nameValidator)}
                    />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                    {errors.surname && <p className="text-red-400 m2">{errors.surname.message}</p>}
                    Surname
                    <input
                        className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10"
                        placeholder="e.g. Johnson"
                        type="text"
                        {...register("surname", nameValidator)}
                    />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                    Gender
                    <select
                        {...register("gender")}
                        className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10"
                    >
                        <option value="">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                    Salary
                    {errors.salary && <p className="text-red-400 m2">{errors.salary.message}</p>}
                    <input
                        className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10"
                        placeholder="e.g. 3500"
                        type="text"
                        {...register("salary", salaryValidator)}
                        min="0"
                    />
                </label>
                <div className="flex items-end sm:col-span-2 lg:col-span-4 lg:justify-end">
                    <button
                        className="h-11 w-full rounded-xl bg-cyan-300 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:bg-cyan-200 focus:outline-none focus:ring-4 focus:ring-cyan-300/20 active:scale-[0.99] lg:w-auto"
                        type="submit"
                    >
                        Save member
                    </button>
                </div>
            </form>
        </section>
    );
};
