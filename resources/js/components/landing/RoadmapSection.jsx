export default function RoadmapSection({ text }) {
    const roadmap = [
        {
            quarter: "Q1 2026",
            title: "Core Analytics Launch",
            description: "Foundational metrics and behavioral signals",
            active: true,
            features: [
                "Wallet performance metrics (PnL, winrate, holding time)",
                "Behavioral tag system",
                "Demo access without TRCA"
            ]
        },
        {
            quarter: "Q2 2026",
            title: "Expanded Discovery",
            description: "Broader exploration with controlled depth",
            active: false,
            features: [
                "Higher discovery limits for TRCA holders",
                "Additional tag combinations and filters",
                "Saved presets and basic watchlists"
            ]
        },
        {
            quarter: "Q3 2026",
            title: "Advanced Analytical Views",
            description: "From metrics to structured behavioral insight",
            active: false,
            features: [
                "New holder-only analytical screens",
                "Extended historical depth",
                "Improved cohort comparison tools"
            ]
        },
        {
            quarter: "Q4 2026",
            title: "Platform Stability & Scale",
            description: "Hardening the system for sustained analysis",
            active: false,
            features: [
                "Performance optimization",
                "Expanded wallet coverage",
                "Data refresh and reliability improvements"
            ]
        },
        {
            quarter: "Q1 2027",
            title: "Contextual Analysis Layers",
            description: "Behavior placed inside market context",
            active: false,
            features: [
                "Cross-cohort comparison tools",
                "Market context overlays tied to behavior",
                "New TRCA-exclusive analytical modules"
            ]
        },
        {
            quarter: "Q2 2027",
            title: "Product Maturity",
            description: "A complete, modular analytical platform",
            active: false,
            features: [
                "Modular analytics framework",
                "Holder-priority feature rollout",
                "Long-term data consistency improvements"
            ]
        },
    ];

    return (
        <>
            <section id="roadmap" className="flex flex-col gap-[36px] items-start w-full max-w-[1420px] mt-[140px]">
                <div className="flex flex-col items-start gap-4.5">
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
                                <span className="text-[#0392FF]">Roadmap</span>
                            </div>
                        </div>
                        <h2 className="text-[#00143B] font-medium text-[48px] text-center">
                            Roadmap
                        </h2>
                    </div>
                    <span className="text-xl text-[#232323] text-center ">
                        Planned feature releases and access stages.
                    </span>
                </div>

                <div className="flex w-full justify-between flex-col md:flex-row">
                    <div className="flex flex-col gap-[26px] w-full max-w-[697px]">
                        {roadmap.map((item, idx) => (
                            <div
                                key={item.title}
                                className={`flex relative bg-[#FDFDFD] rounded-[36px] py-[50px] px-[30px] ${
                                    item.active
                                        ? "border border-[#3D78FF]"
                                        : "border border-white"
                                }`}
                                style={
                                    item.active
                                        ? { boxShadow: "0px 15px 14.5px 0px rgba(0, 0, 0, 0.07)" }
                                        : {}
                                }
                            >
                                {item.active && (
                                    <svg className="absolute right-[34px] top-[24px]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 13.5C8.71751 13.5 10.297 13.8473 11.4658 14.4316C12.6048 15.0011 13.5 15.8802 13.5 17C13.5 18.1198 12.6048 18.9989 11.4658 19.5684C10.297 20.1527 8.71751 20.5 7 20.5C5.28249 20.5 3.703 20.1527 2.53418 19.5684C1.39524 18.9989 0.5 18.1198 0.5 17C0.5 15.8802 1.39524 15.0011 2.53418 14.4316C3.703 13.8473 5.28249 13.5 7 13.5Z" fill="url(#paint0_radial_0_1676)" stroke="#CCCCCC"/>
                                        <path d="M8 10V16C8 16.2833 7.904 16.521 7.712 16.713C7.52 16.905 7.28267 17.0007 7 17C6.71733 16.9993 6.48 16.9033 6.288 16.712C6.096 16.5207 6 16.2833 6 16V1C6 0.716667 6.096 0.479333 6.288 0.288C6.48 0.0966668 6.71733 0.000666667 7 0H14.175C14.4083 0 14.6167 0.0749999 14.8 0.225C14.9833 0.375 15.1 0.566667 15.15 0.8L15.4 2H20C20.2833 2 20.521 2.096 20.713 2.288C20.905 2.48 21.0007 2.71733 21 3V11C21 11.2833 20.904 11.521 20.712 11.713C20.52 11.905 20.2827 12.0007 20 12H14.825C14.5917 12 14.3833 11.925 14.2 11.775C14.0167 11.625 13.9 11.4333 13.85 11.2L13.6 10H8Z" fill="url(#paint1_linear_0_1676)"/>
                                        <defs>
                                            <radialGradient id="paint0_radial_0_1676" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7 17) rotate(90) scale(3 8.39253)">
                                                <stop stopColor="#F1F1F1"/>
                                                <stop offset="1" stopColor="#D9D9D9"/>
                                            </radialGradient>
                                            <linearGradient id="paint1_linear_0_1676" x1="13.5424" y1="0" x2="13.5424" y2="17" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#75C3FF"/>
                                                <stop offset="1" stopColor="#3EA0EB"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                )}
                                <div className="flex gap-[20px]">
                                    <p className="text-[#B1B1B1] font-medium text-lg" style={item.active ? { color: "#232323" } : { }}>{item.quarter}</p>
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
                        {roadmap.map((item, idx) => {
                            const isActive = item.active;
                            const isLast = idx === roadmap.length - 1;
                            return (
                                <div key={item.quarter} className="flex flex-col gap-5 relative">
                                 
                                    <div className="flex absolute left-[-65px] top-0 h-full">
                                    
                                        {isActive ? (
                                            <div className="flex rounded-full z-50 w-[33px] h-[33px] bg-gradient-to-b from-[#8ACCFF] to-[#3EA0EB] border-4 border-white"></div>
                                        ) : (
                                            <div className="flex rounded-full z-50 w-[33px] h-[33px] bg-gradient-to-b from-[#FEFEFE] to-[#EDEDED] border-4 border-white"></div>
                                        )}
                                     
                                        {!isLast ? (
                                            <div className="flex absolute h-[calc(100%+44px)] left-1/2 top-[33px] -translate-x-1/2 w-[6px] bg-[#D9D9D9]"></div>
                                        ) : (
                                            
                                            <div className="flex absolute h-[calc(100%+44px)] left-1/2 top-[33px] -translate-x-1/2 w-[6px] bg-gradient-to-b from-[#D9D9D9] to-[#D9D9D9]/0"></div>
                                        )}
                                    </div>
                                    <span className="text-[20px] md:text-[26px] text-[#2D2D2D] font-semibold leading-[100%]">
                                        {item.quarter}
                                    </span>
                                    <ul className="flex flex-col gap-4">
                                        {item.features.map((feature, fidx) => (
                                            <li key={feature + fidx} className="relative">
                                                <div className="flex w-[8px] h-[8px] bg-[#3EA0EB] rounded-full absolute left-[-14px] top-1/2 -translate-y-1/2"></div>
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
        </>
    )
}