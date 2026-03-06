import SectionBadge from "./SectionBadge";

export default function SectionHeader({ badge, title, subtitle, align = "center", className = "" }) {
    const alignClass = align === "center" ? "items-center" : "items-start";
    const textAlign = align === "center" ? "text-center" : "text-left";

    return (
        <div className={`flex flex-col ${alignClass} ${className} lg:gap-4.5 gap-2.5`}>
            <div className={`flex flex-col ${alignClass} lg:gap-6 gap-3`}>
                <div className="section-badge" data-scroll-animate="scale-bounce" data-scroll-duration="0.5">
                    <SectionBadge>{badge}</SectionBadge>
                </div>
                <h2 className={`section-title text-[#00143B] font-medium lg:text-[48px] text-[24px] ${textAlign}`} data-scroll-animate="blur-fade" data-scroll-delay="100">
                    {title}
                </h2>
            </div>
            {subtitle && (
                <span className={`section-subtitle lg:text-xl text-[10px] text-[#232323] ${textAlign}`} data-scroll-animate="slide-up-20" data-scroll-delay="200">
                    {subtitle}
                </span>
            )}
        </div>
    );
}
