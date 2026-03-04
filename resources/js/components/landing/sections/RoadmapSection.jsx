import SectionHeader from "../ui/SectionHeader";
import FlagIcon from "../icons/FlagIcon";

const ROADMAP = [
    {
        quarter: "Q1 2026",
        title: "Core Analytics Launch",
        description: "Foundational metrics and behavioral signals",
        active: true,
        features: [
            "Wallet performance metrics (PnL, winrate, holding time)",
            "Behavioral tag system",
            "Demo access without TRCA",
        ],
    },
    {
        quarter: "Q2 2026",
        title: "Expanded Discovery",
        description: "Broader exploration with controlled depth",
        active: false,
        features: [
            "Higher discovery limits for TRCA holders",
            "Additional tag combinations and filters",
            "Saved presets and basic watchlists",
        ],
    },
    {
        quarter: "Q3 2026",
        title: "Advanced Analytical Views",
        description: "From metrics to structured behavioral insight",
        active: false,
        features: [
            "New holder-only analytical screens",
            "Extended historical depth",
            "Improved cohort comparison tools",
        ],
    },
    {
        quarter: "Q4 2026",
        title: "Platform Stability & Scale",
        description: "Hardening the system for sustained analysis",
        active: false,
        features: [
            "Performance optimization",
            "Expanded wallet coverage",
            "Data refresh and reliability improvements",
        ],
    },
    {
        quarter: "Q1 2027",
        title: "Contextual Analysis Layers",
        description: "Behavior placed inside market context",
        active: false,
        features: [
            "Cross-cohort comparison tools",
            "Market context overlays tied to behavior",
            "New TRCA-exclusive analytical modules",
        ],
    },
    {
        quarter: "Q2 2027",
        title: "Product Maturity",
        description: "A complete, modular analytical platform",
        active: false,
        features: [
            "Modular analytics framework",
            "Holder-priority feature rollout",
            "Long-term data consistency improvements",
        ],
    },
];

export default function RoadmapSection() {
    return (
        <section id="roadmap" className="flex flex-col gap-[36px] items-start w-full max-w-[1420px] mt-[140px]">
            <SectionHeader
                badge="Roadmap"
                title="Roadmap"
                subtitle="Planned feature releases and access stages."
                align="left"
            />

            <div className="flex w-full justify-between flex-col md:flex-row">
                <div className="flex flex-col gap-[26px] w-full max-w-[697px]">
                    {ROADMAP.map((item) => (
                        <div
                            key={item.quarter}
                            className={`flex relative bg-[#FDFDFD] rounded-[36px] py-[50px] px-[30px] ${
                                item.active ? "border border-[#3D78FF]" : "border border-white"
                            }`}
                            style={item.active ? { boxShadow: "0px 15px 14.5px 0px rgba(0, 0, 0, 0.07)" } : {}}
                        >
                            {item.active && (
                                <FlagIcon className="absolute right-[34px] top-[24px]" />
                            )}
                            <div className="flex gap-[20px]">
                                <p
                                    className="text-[#B1B1B1] font-medium text-lg"
                                    style={item.active ? { color: "#232323" } : {}}
                                >
                                    {item.quarter}
                                </p>
                                <div className="flex flex-col gap-[20px]">
                                    <span className="font-semibold leading-[100%] text-[#00143B] text-[32px]">
                                        {item.title}
                                    </span>
                                    <p className="leading-[140%] text-xl text-[#232323]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-[44px] w-full max-w-[510px] mt-8 md:mt-0">
                    {ROADMAP.map((item, idx) => {
                        const isLast = idx === ROADMAP.length - 1;
                        return (
                            <div key={item.quarter} className="flex flex-col gap-5 relative">
                                <div className="flex absolute left-[-65px] top-0 h-full">
                                    <div
                                        className={`flex rounded-full z-50 w-[33px] h-[33px] border-4 border-white ${
                                            item.active
                                                ? "bg-gradient-to-b from-[#8ACCFF] to-[#3EA0EB]"
                                                : "bg-gradient-to-b from-[#FEFEFE] to-[#EDEDED]"
                                        }`}
                                    />
                                    <div
                                        className={`flex absolute h-[calc(100%+44px)] left-1/2 top-[33px] -translate-x-1/2 w-[6px] ${
                                            isLast
                                                ? "bg-gradient-to-b from-[#D9D9D9] to-[#D9D9D9]/0"
                                                : "bg-[#D9D9D9]"
                                        }`}
                                    />
                                </div>
                                <span className="text-[20px] md:text-[26px] text-[#2D2D2D] font-semibold leading-[100%]">
                                    {item.quarter}
                                </span>
                                <ul className="flex flex-col gap-4">
                                    {item.features.map((feature, fidx) => (
                                        <li key={fidx} className="relative">
                                            <div className="flex w-[8px] h-[8px] bg-[#3EA0EB] rounded-full absolute left-[-14px] top-1/2 -translate-y-1/2" />
                                            <span className="text-xl text-[#232323] leading-[140%]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
