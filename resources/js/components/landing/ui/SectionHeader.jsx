import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "./SectionBadge";

export default function SectionHeader({ badge, title, subtitle, align = "center" ,className = ""}) {
    const containerRef = useRef(null);
    const alignClass = align === "center" ? "items-center" : "items-start";
    const textAlign = align === "center" ? "text-center" : `text-${align}`;

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        tl.from(".section-badge", {
            scale: 0.6,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(2)",
        })
        .from(".section-title", {
            y: 40,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.7,
            ease: "power3.out",
        }, "-=0.2")
        .from(".section-subtitle", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        }, "-=0.3");
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`flex flex-col ${alignClass} ${className} lg:gap-4.5 gap-2.5`}>
            <div className={`flex flex-col ${alignClass} lg:gap-6 gap-3`}>
                <div className="section-badge">
                    <SectionBadge>{badge}</SectionBadge>
                </div>
                <h2 className={`section-title text-[#00143B] font-medium lg:text-[48px] text-[24px] ${textAlign}`}>
                    {title}
                </h2>
            </div>
            {subtitle && (
                <span className={`section-subtitle lg:text-xl text-[10px] text-[#232323] ${textAlign}`}>
                    {subtitle}
                </span>
            )}
        </div>
    );
}
