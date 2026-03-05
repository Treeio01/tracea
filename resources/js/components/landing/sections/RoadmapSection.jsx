import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".roadmap-left-card", {
            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".roadmap-left-col",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".roadmap-right-item", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".roadmap-right-col",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        gsap.utils.toArray(".roadmap-dot").forEach((dot, i) => {
            gsap.from(dot, {
                scale: 0,
                duration: 0.4,
                ease: "back.out(2)",
                scrollTrigger: {
                    trigger: dot,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        });

        gsap.utils.toArray(".roadmap-line").forEach((line) => {
            gsap.from(line, {
                scaleY: 0,
                transformOrigin: "top center",
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: line,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="roadmap" className="flex flex-col gap-[36px] items-start w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="Roadmap"
                title="Roadmap"
                subtitle="Planned feature releases and access stages."
                align="center"
                className="lg:hidden flex w-full"
            />
             <SectionHeader
                badge="Roadmap"
                title="Roadmap"
                subtitle="Planned feature releases and access stages."
                align="left"
                className="lg:flex hidden"
            />

            <div className="flex w-full justify-between flex-col md:flex-row">
                <div className="roadmap-left-col flex flex-col lg:gap-[26px] gap-[10px] w-full max-w-[697px]">
                    {ROADMAP.map((item, idx) => (
                        <div
                            key={item.quarter}
                            className={`roadmap-left-card flex relative bg-[#FDFDFD] lg:rounded-[36px] rounded-[26px] lg:py-[50px] py-[20px] lg:px-[30px] px-[20px] ${
                                item.active ? "border border-[#3D78FF]" : "border border-white"
                            }`}
                            style={item.active ? { boxShadow: "0px 15px 14.5px 0px rgba(0, 0, 0, 0.07)" } : {}}
                        >
                            {item.active && (
                                <FlagIcon className="absolute right-[34px] top-[24px]" />
                            )}
                            <div className="flex gap-[20px] lg:flex-row flex-col w-full">
                                <p
                                    className="lg:text-[#B1B1B1] text-white font-medium lg:text-lg text-[10px] lg:px-0 lg:py-0 py-2 px-4.5 lg:rounded-none rounded-full lg:bg-none bg-linear-to-r from-[#77C4FF] to-[#3EA0EB] w-max"
                                   
                                >
                                    {item.quarter}
                                </p>
                                <div className="flex flex-col lg:gap-[20px] gap-[10px]">
                                    <span className="font-semibold leading-[100%] text-[#00143B] lg:text-[32px] text-[24px]">
                                        {item.title}
                                    </span>
                                    <p className="leading-[140%] lg:text-xl text-[10px] text-[#232323]">
                                        {item.description}
                                    </p>
                                </div>
                                <ul className="lg:hidden flex flex-col gap-2 w-full">
                                    {item.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-center gap-1.5">
                                            <div className="flex rounded-full bg-[#3EA0EB] w-full max-w-[8px] min-h-[8px]"></div>
                                            <span className="text-[10px] text-[#4B4B4B] leading-[140%]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="roadmap-right-col lg:flex hidden flex-col gap-[44px] w-full max-w-[510px] mt-8 md:mt-0">
                    {ROADMAP.map((item, idx) => {
                        const isLast = idx === ROADMAP.length - 1;
                        return (
                            <div key={item.quarter} className="roadmap-right-item flex flex-col gap-5 relative">
                                <div className="flex absolute left-[-65px] top-0 h-full">
                                    <div
                                        className={`roadmap-dot flex rounded-full z-50 w-[33px] h-[33px] border-4 border-white ${
                                            item.active
                                                ? "bg-gradient-to-b from-[#8ACCFF] to-[#3EA0EB]"
                                                : "bg-gradient-to-b from-[#FEFEFE] to-[#EDEDED]"
                                        }`}
                                    />
                                    <div
                                        className={`roadmap-line flex absolute h-[calc(100%+44px)] left-1/2 top-[33px] -translate-x-1/2 w-[6px] ${
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
