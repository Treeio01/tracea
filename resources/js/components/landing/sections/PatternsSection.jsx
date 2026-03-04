import SectionHeader from "../ui/SectionHeader";
import PatternImg from "../illustrations/PatternImg";

export default function PatternsSection() {
    return (
        <section id="patterns" className="flex flex-col z-50 items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
            <SectionHeader
                badge="Patterns"
                title="From Single Wallets to Patterns"
                subtitle="From isolated wallets to behavioral patterns."
            />
            <PatternImg />
        </section>
    );
}
