import { useState } from "react";
import { Counter } from "./components/Counter";
import type { Timer } from "./helpers/types";
import { CounterList } from "./components/CounterList";

export default function App() {
    const [counters, setCounters] = useState<Timer[]>([]);

    const [nextId, setNextId] = useState(1);

    const addCounter = () => {
        const newCounter = {
            id: nextId,
            startTime: Date.now(),
            endTime: null,
            completed: false,
        };
        setNextId((prevId) => prevId + 1);
        setCounters((previousCounters) => [...previousCounters, newCounter]);
    };

    const deleteCounter = (id: number) => {
        setCounters(counters.filter((counter) => counter.id !== id));
    };

    const completeCounter = (id: number) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id
                    ? {
                          id: counter.id,
                          startTime: counter.startTime,
                          endTime: Date.now(),
                          completed: true,
                      }
                    : counter,
            ),
        );
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#07100f] text-[#dce7e2]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -left-48 -top-44 h-[34rem] w-[34rem] rounded-full bg-[#3073b7]/25 blur-[110px]" />
                <div className="absolute right-[-13rem] top-[12rem] h-[38rem] w-[38rem] rounded-full bg-[#efefd0]/10 blur-[120px]" />
                <div className="absolute bottom-[-20rem] left-[30%] h-[34rem] w-[34rem] rounded-full bg-[#3073b7]/15 blur-[130px]" />
                <div className="aurora-noise absolute inset-0 opacity-[0.035] mix-blend-soft-light" />
            </div>

            <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 py-5 sm:px-8 lg:px-12 lg:py-8">
                <header className="flex items-center justify-between border-b border-white/10 pb-5 lg:pb-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] shadow-[0_0_28px_rgba(239,239,208,0.15)] backdrop-blur-xl" aria-label="Counters">
                            <svg className="h-5 w-5 text-[#efefd0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                <circle cx="12" cy="12" r="8.5" />
                                <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                    </div>

                    <button
                        onClick={() => addCounter()}
                        className="group inline-flex items-center gap-2 rounded-full border border-[#efefd0]/40 bg-[#efefd0] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#081411] shadow-[0_0_24px_rgba(239,239,208,0.14)] transition hover:-translate-y-0.5 hover:bg-[#f8f8df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#efefd0] sm:px-5"
                    >
                        <svg className="h-4 w-4 transition-transform group-hover:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                        <span>Create Counter</span>
                    </button>
                </header>

                <main className="flex flex-1 flex-col gap-12 py-10 lg:gap-16 lg:py-14">
                    <section aria-labelledby="live-counters-heading">
                        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                            <h1 id="live-counters-heading" className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Counters</h1>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {counters.map((elem) => (
                                <Counter
                                    key={elem.id}
                                    onDelete={() => deleteCounter(elem.id)}
                                    onComplete={() => completeCounter(elem.id)}
                                />
                            ))}
                        </div>
                    </section>

                    <CounterList counters={counters} />
                </main>

            </div>
        </div>
    );
}
