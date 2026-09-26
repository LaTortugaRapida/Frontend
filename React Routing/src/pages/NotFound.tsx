import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <main className="relative isolate flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-slate-950 px-5 py-16 text-white sm:px-8">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:56px_56px]"
            />
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <section>
                    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        Route not found
                    </p>
                    <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
                        This page
                        <br />
                        took a wrong
                        <br />
                        <span className="text-cyan-300">turn.</span>
                    </h1>
                    <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
                        The address may be outdated, or the page may have moved.
                        Let’s get you back to the people directory.
                    </p>
                    <Link
                        to="/"
                        className="mt-9 inline-flex items-center gap-3 rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                        <span aria-hidden="true">&larr;</span>
                        Back to users
                    </Link>
                </section>

                <div
                    aria-hidden="true"
                    className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
                >
                    <div className="absolute inset-8 rotate-6 rounded-[2rem] border border-white/10" />
                    <div className="absolute inset-14 -rotate-6 rounded-[2rem] border border-cyan-300/20" />
                    <div className="relative flex h-64 w-64 items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40 sm:h-72 sm:w-72">
                        <span className="select-none text-8xl font-black tracking-[-0.06em] text-white sm:text-9xl">
                            404
                        </span>
                        <span className="absolute -right-3 top-8 h-6 w-6 rounded-md border-4 border-slate-950 bg-cyan-300" />
                        <span className="absolute -bottom-3 left-10 h-6 w-6 rounded-md border-4 border-slate-950 bg-emerald-300" />
                    </div>
                    <div className="absolute right-2 top-10 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 font-mono text-xs text-slate-500">
                        ERR / 404
                    </div>
                    <div className="absolute bottom-9 left-1 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 font-mono text-xs text-cyan-300">
                        page: undefined
                    </div>
                </div>
            </div>
        </main>
    );
};
