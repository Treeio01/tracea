import SectionHeader from "../ui/SectionHeader";
import TraceaSmallLogo from "../icons/TraceaSmallLogo";
import RealUseImg from "../illustrations/RealUseImg";

export default function RealUseSection() {
    return (
        <section id="real-use" className="flex flex-col items-center gap-9 w-full max-w-[1420px] mt-[140px]">
            <SectionHeader
                badge="Real Use"
                title="Designed for Real Use"
                subtitle="Built for everyday analysis, not hype cycles."
            />
            <div className="flex relative w-full rounded-4xl py-[100px] px-[70px] pb-[70px] bg-[#1A1A1A] border-10 border-white">
                <img src="/assets/img/real-use-section-light-left.svg" className="absolute left-0 top-0" alt="" />
                <img src="/assets/img/real-use-section-light-right.png" className="absolute h-full right-0 bottom-0" alt="" />
                <div className="flex absolute flex-col gap-[6px] max-w-[319px] top-[18px] right-[258px]">
                    <div className="flex p-2.5 bg-linear-to-b from-[#080808] to-[#353535] rounded-[52px]">
                        <span className="text-[#DDDDDD] text-center text-[12px]">
                            Tools that support routine analysis create stronger decision frameworks over time.
                        </span>
                    </div>
                    <RealUseImg />
                </div>
                <TraceaSmallLogo className="absolute bottom-[28px] left-[70px]" />
                <div className="flex flex-col gap-[79px] z-50 max-w-[433px]">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-5">
                            <span className="text-white font-semibold text-[32px]">
                                Core Analytics Launch
                            </span>
                            <p className="text-[20px] text-[#EDEDED]">
                                Foundational metrics and behavioral signals
                            </p>
                        </div>
                        <button className="px-8 py-3.5 rounded-full bg-linear-to-r from-[#77C4FF] to-[#3EA0EB] w-max">
                            <span className="text-[#FAFAFA]">Dashboard</span>
                        </button>
                    </div>
                    <span className="text-[#DDDDDD]">
                        TRACEA is designed to be used regularly, not occasionally. The interface and data focus on repeatable analysis, not one-time excitement.
                    </span>
                </div>
            </div>
        </section>
    );
}
