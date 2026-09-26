import { Link, useNavigate, useParams } from "react-router-dom";
import type { User } from "../helpers/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Http } from "../helpers/api";
import { useEffect } from "react";

type UserForm = Omit<User, "id">;

export const EditUser = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<UserForm>();

    const {id} = useParams();

    useEffect(() => {
        Http
        .get<User>(`/users/${id}`)
        .then(res => {
            reset(res.data)
        })

    }, [id, reset])

    const handleEdit: SubmitHandler<UserForm> = (data) => {
        Http
        .put(`/users/${id}`, data)
        .then(() => {
            navigate("/")
        });
    };
    return (
        <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
                <Link
                    to="/"
                    className="mb-8 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                    &larr; Back to people
                </Link>
                <section className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 sm:p-9">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                        People directory
                    </p>
                    <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                        Edit the user
                    </h1>

                    <form
                        onSubmit={handleSubmit(handleEdit)}
                        className="mt-8 space-y-6"
                    >
                        <div>
                            {errors.name && (
                                <p className="text-pink-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            {errors.surname && (
                                <p className="text-pink-500">
                                    {errors.surname.message}
                                </p>
                            )}
                        </div>
                        <div>
                            {errors.gender && (
                                <p className="text-pink-500">
                                    {errors.gender.message}
                                </p>
                            )}
                        </div>
                        <div>
                            {errors.salary && (
                                <p className="text-pink-500">
                                    {errors.salary.message}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="block space-y-2">
                                <span className="text-sm font-semibold text-slate-200">
                                    Name
                                </span>
                                <input
                                    {...register("name", {
                                        required: "Please fill in your name.",
                                    })}
                                    type="text"
                                    placeholder="Enter first name"
                                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                                />
                            </label>
                            <label className="block space-y-2">
                                <span className="text-sm font-semibold text-slate-200">
                                    Surname
                                </span>
                                <input
                                    {...register("surname", {
                                        required:
                                            "Please fill in your surname.",
                                    })}
                                    type="text"
                                    placeholder="Enter surname"
                                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                                />
                            </label>
                        </div>

                        <label className="block space-y-2">
                            <span className="text-sm font-semibold text-slate-200">
                                Gender
                            </span>
                            <select
                                {...register("gender", {
                                    required: "Please select your gender.",
                                })}
                                defaultValue=""
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                            >
                                <option value="" disabled>
                                    Select gender
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </label>

                        <label className="block space-y-2">
                            <span className="text-sm font-semibold text-slate-200">
                                Salary (USD)
                            </span>
                            <input
                                {...register("salary", {
                                    required: "Please fill in your salary.",
                                })}
                                type="number"
                                min="0"
                                placeholder="Enter salary"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:w-auto"
                        >
                            Add user
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
};
