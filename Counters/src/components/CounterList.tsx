import type { Timer } from "../helpers/types";

type Props = {
    counters: Timer[];
};

export const CounterList: React.FC<Props> = ({ counters }) => {
    return (
        <section aria-labelledby="history-heading" className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
            <div className="flex flex-col gap-2 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
                <h2 id="history-heading" className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">Counter history</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                    <tr className="border-b border-white/10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81968b]">
                        <th className="px-5 py-4 font-semibold sm:px-7">Counter ID</th>
                        <th className="px-5 py-4 font-semibold sm:px-7">Start time</th>
                        <th className="px-5 py-4 font-semibold sm:px-7">End time</th>
                        <th className="px-5 py-4 font-semibold sm:px-7">Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {counters.map((counter) => (
                        <tr key={counter.id} className="border-b border-white/[0.07] text-sm text-[#dce7e2] transition last:border-0 hover:bg-white/[0.035]">
                            <td className="px-5 py-5 font-mono text-[#efefd0] sm:px-7">{counter.id}</td>
                            <td className="whitespace-nowrap px-5 py-5 text-[#b6c7be] sm:px-7">
                                {new Date(counter.startTime).toLocaleString()}
                            </td>
                            <td className="whitespace-nowrap px-5 py-5 text-[#b6c7be] sm:px-7">
                                {counter.endTime
                                    ? new Date(
                                          counter.startTime,
                                      ).toLocaleString()
                                    : "-"}
                            </td>
                            <td className="px-5 py-5 text-[#b6c7be] sm:px-7">{counter.completed}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </section>
    );
};
