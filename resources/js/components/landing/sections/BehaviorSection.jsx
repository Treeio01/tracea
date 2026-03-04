import SectionHeader from "../ui/SectionHeader";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import BehaviorBg from "../illustrations/BehaviorBg";

export default function BehaviorSection() {
    return (
        <section id="behavior" className="flex relative flex-col items-center gap-[258px] w-full max-w-[1420px] mt-[140px]">
            <BehaviorBg className="absolute top-1/2 left-1/2 -translate-1/2" />
            <div className="flex self-end flex-col gap-4.5 w-full max-w-[433px] z-50">
                <span className="text-xl text-[#232323]">
                    Looking at behavior helps reduce overreaction to short-term price noise and provides a clearer view of participation quality.
                </span>
                <button className="bg-white flex w-max border items-baseline gap-2 border-[#C8C8C8] rounded-full py-4 px-9">
                    <span className="text-black">Visit</span>
                    <ArrowUpRightIcon />
                </button>
            </div>
            <div className="flex self-start flex-col items-start gap-4.5 max-w-[755px] z-50">
                <SectionHeader
                    badge="Behavior"
                    title="Behavior over Price"
                    align="left"
                />
                <span className="text-xl text-[#232323] text-left">
                    <b>Price moves fast. Behavior changes slower.</b> TRACEA focuses on how wallets act over time — how long they hold, how often they trade, and whether outcomes are repeatable.
                </span>
            </div>
        </section>
    );
}
