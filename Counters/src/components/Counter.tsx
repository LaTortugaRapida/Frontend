import { useState, useEffect } from "react";

type Props = {
    onDelete: () => void;
    onComplete: () => void;
};

export const Counter: React.FC<Props> = ({ onDelete, onComplete }) => {
    const [remainingTime, setRemainingTime] = useState(600);
    const [isPaused, setPause] = useState(false);

    const stopCounter = () => {
        setRemainingTime(600);
        setPause(false);
    };
    useEffect(() => {
        if (isPaused) {
            return;
        }
        const interval = setInterval(
            () =>
                setRemainingTime((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        onComplete();
                        return 0;
                    }
                    return prev - 1;
                }),
            1000,
        );

        return () => clearInterval(interval);
    }, [isPaused, onComplete]);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
        <div className="group relative flex aspect-square min-h-[280px] w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.065] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#efefd0]/35 hover:bg-white/[0.09] hover:shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#3073b7]/20 blur-3xl transition duration-500 group-hover:bg-[#efefd0]/10" />
            <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#efefd0]/20 bg-[#efefd0]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#efefd0]">
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${isPaused ? "bg-[#3073b7]" : "bg-[#efefd0] shadow-[0_0_9px_#efefd0]"}`}
                    />
                    {isPaused ? "Paused" : "Active"}
                </span>
            </div>

            <div className="relative py-8 text-center">
                <p className="font-mono text-[clamp(3.5rem,8vw,5.7rem)] font-medium leading-none tracking-[-0.1em] text-white">
                    {minutes.toString().padStart(2, "0")}
                    <span className="mx-1 text-[#efefd0]/80">:</span>
                    {seconds.toString().padStart(2, "0")}
                </p>
            </div>

            <div className="relative grid grid-cols-[1fr_auto_auto] gap-2">
                <button
                    onClick={() => setPause(() => !isPaused)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#efefd0]/25 bg-[#efefd0]/10 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#efefd0] transition hover:bg-[#efefd0]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efefd0]"
                >
                    <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {isPaused ? (
                            <path d="M8 5v14l11-7-11-7Z" />
                        ) : (
                            <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
                        )}
                    </svg>
                    <span>{isPaused ? "play" : "pause"}</span>
                </button>
                <button
                    onClick={() => stopCounter()}
                    aria-label="Stop counter"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/70 transition hover:border-[#3073b7]/70 hover:bg-[#3073b7]/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3073b7]"
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M6 6h12v12H6z" />
                    </svg>
                    <span className="sr-only">Stop</span>
                </button>
                <button
                    onClick={() => onDelete()}
                    aria-label="Delete counter"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/70 transition hover:border-[#ff8fa3]/40 hover:bg-[#ff8fa3]/10 hover:text-[#ffb2bf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8fa3]"
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                    >
                        <path
                            d="M4 7h16M10 11v6m4-6v6M9 7V4h6v3m-9 0 1 13h10l1-13"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="sr-only">Delete</span>
                </button>
            </div>
        </div>
    );
};
