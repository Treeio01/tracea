import PatternImg from "./PatternImg";

export default function PatternsSection({ text }) {
    return (
        <>
            <section id="patterns" className="flex flex-col z-50 items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
                <div className="flex flex-col items-center gap-4.5">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
                                <span className="text-[#0392FF]">
                                   Patterns
                                </span>
                            </div>
                        </div>
                        <h2 className="text-[#00143B] font-medium text-[48px]">
                           From Single Wallets to Patterns
                        </h2>
                    </div>
                    <span className="text-xl text-[#232323] text-center">
                       From isolated wallets to behavioral patterns.
                    </span>
                </div>
                    <PatternImg/>
            </section>
        </>
    )
}