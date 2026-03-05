import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";
import PatternImg from "../illustrations/PatternImg";

export default function PatternsSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".pattern-img", {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".pattern-img",
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="patterns" className="flex flex-col z-50 items-center gap-[36px] w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="Patterns"
                title="From Single Wallets to Patterns"
                subtitle="From isolated wallets to behavioral patterns."
            />
            <div className="pattern-img flex w-full h-full max-w-[714px] overflow-hidden" >
                <PatternImg />
            </div>
        </section>
    );
}
