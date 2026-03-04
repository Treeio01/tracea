import SectionBadge from "./SectionBadge";

export default function SectionHeader({ badge, title, subtitle, align = "center" }) {
    const alignClass = align === "center" ? "items-center" : "items-start";
    const textAlign = align === "center" ? "text-center" : `text-${align}`;

    return (
        <div className={`flex flex-col ${alignClass} gap-4.5`}>
            <div className={`flex flex-col ${alignClass} gap-6`}>
                <SectionBadge>{badge}</SectionBadge>
                <h2 className={`text-[#00143B] font-medium text-[48px] ${textAlign}`}>
                    {title}
                </h2>
            </div>
            {subtitle && (
                <span className={`text-xl text-[#232323] ${textAlign}`}>
                    {subtitle}
                </span>
            )}
        </div>
    );
}
