import SectionHeader from "../ui/SectionHeader";
import PatternImg from "../illustrations/PatternImg";

export default function PatternsSection() {
    return (
        <section id="patterns" className="flex flex-col z-50 items-center gap-[36px] w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="Patterns"
                title="From Single Wallets to Patterns"
                subtitle="From isolated wallets to behavioral patterns."
            />
            <div className="pattern-img flex w-full h-full max-w-[714px] overflow-hidden" data-scroll-animate="slide-up-60" data-scroll-duration="1">
                <PatternImg />
            </div>
        </section>
    );
}
