import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";

const TRCA_ITEMS = [
    { image: "/assets/img/trca-block-img-1.svg", text: "Longer history windows", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-2.svg", text: "Larger wallet lists per query", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-3.svg", text: "Saved presets and watchlists", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-4.svg", text: "Advanced tag combinations", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-5.svg", text: "Early access to new analytical modules", maxWidth: "698px" },
    { image: "/assets/img/trca-block-img-6.svg", text: "Priority access to upcoming features", maxWidth: "698px" },
];

export default function TRCASection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".trca-card", {
            y: 80,
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".trca-grid",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="trca" className="flex flex-col items-center gap-[36px] w-full max-w-[1422px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="TRCA"
                title="What TRCA holders unlock"
                subtitle="From isolated wallets to behavioral patterns."
            />
            <div className="trca-grid flex gap-[26px] w-full justify-center flex-wrap">
                {TRCA_ITEMS.map((item, idx) => (
                    <div
                        key={item.image}
                        className="trca-card flex overflow-hidden w-full relative lg:px-[30px] px-[20px] lg:py-[210px] py-[140px] lg:pb-[34px] pb-[24px] bg-[#FDFDFD] flex-col lg:gap-[25px] gap-[16px] border border-white lg:rounded-[36px] rounded-[26px]"
                        style={{ maxWidth: item.maxWidth }}
                    >
                        <div className="flex w-full absolute bottom-0 min-h-[111px] left-1/2 -translate-x-1/2 bg-linear-to-b from-white/0 via-white to-white z-[45]" />
                        <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                            <img src={item.image} alt="" className="max-w-full h-auto block" />
                        </div>
                        <span className="lg:text-xl text-[10px] text-[#3F3F3F] z-50">{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
