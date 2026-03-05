import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionHeader from "../ui/SectionHeader";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import BehaviorBg from "../illustrations/BehaviorBg";

export default function BehaviorSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".behavior-top", {
            x: 80,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".behavior-bottom", {
            x: -80,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".behavior-bottom",
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="behavior" className="flex relative flex-col items-center gap-[258px] w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
           <SectionHeader
                    badge="Behavior"
                    title="Behavior over Price"
                    align="center"
                    subtitle="Price moves fast. Behavior changes slower. TRACEA focuses on how wallets act over time — how long they hold, how often they trade, and whether outcomes are repeatable."
                className="z-[100] lg:hidden flex"
                />
            <BehaviorBg className="absolute top-1/2 lg:left-1/2 lg:-translate-x-1/2 -translate-x-0 -translate-y-1/2 lg:max-w-full max-w-[900px] lg:right-[0] right-[-150px]" />
            <div className="behavior-top flex self-end flex-col gap-4.5 w-full max-w-[433px] z-50">
                <span className="lg:text-xl text-[10px] text-[#232323]">
                    Looking at behavior helps reduce overreaction to short-term price noise and provides a clearer view of participation quality.
                </span>
                <button className="bg-white flex w-max border items-baseline gap-2 border-[#C8C8C8] rounded-full lg:py-4 py-3 lg:px-9 px-8">
                    <span className="lg:text-[16px] text-[10px] text-black">Visit</span>
                    <ArrowUpRightIcon />
                </button>
            </div>
            <div className="behavior-bottom lg:flex hidden self-start flex-col items-start gap-4.5 max-w-[755px] z-50">
                <SectionHeader
                    badge="Behavior"
                    title="Behavior over Price"
                    align="left"
                />
                <span className="text-xl text-[#232323] text-left">
                    <b>Price moves fast. Behavior changes slower.</b> TRACEA focuses on how wallets act over time — how long they hold, how often they trade, and whether outcomes are repeatable.
                </span>
            </div>
        </section>
    );
}
