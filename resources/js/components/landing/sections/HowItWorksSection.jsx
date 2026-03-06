import SectionHeader from "../ui/SectionHeader";

const STEPS = [
    {
        image: "/assets/img/how-it-works-block-img-1.svg",
        text: "Connect your wallet or open the demo",
    },
    {
        image: "/assets/img/how-it-works-block-img-2.svg",
        text: "Analyze wallets or explore behavioral cohorts",
        extraClass: "whitespace-nowrap",
    },
    {
        image: "/assets/img/how-it-works-block-img-3.svg",
        text: "Hold TRCA to unlock deeper access",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="flex z-50 flex-col items-center gap-[36px] w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="How it works"
                title="How TRACEA Works"
                subtitle={<>TRACEA organizes raw activity into coherent behavioral patterns <br /> through a structured analytical process.</>}
            />
            <div className="steps-grid flex gap-[26px] w-full justify-center flex-wrap relative" data-scroll-stagger="0.18" data-scroll-animate-type="slide-up-50" data-scroll-stagger-children=".step-card">
                <div className="lg:flex-row flex-col lg:h-max h-full lg:max-w-full max-w-[36px] flex absolute left-1/2 top-1/2 -translate-1/2 w-full justify-evenly z-[100]">
                    <img className="step-arrow lg:rotate-0 rotate-90" src="/assets/img/how-it-works-arrow.svg" alt="" data-scroll-animate="scale-bounce" data-scroll-delay="100" />
                    <img className="step-arrow lg:rotate-0 rotate-90" src="/assets/img/how-it-works-arrow.svg" alt="" data-scroll-animate="scale-bounce" data-scroll-delay="200" />
                </div>
                {STEPS.map((step, idx) => (
                    <div
                        key={step.image}
                        className="step-card flex w-full max-w-[456px] lg:p-[30px] p-[20px] bg-[#FDFDFD] flex-col lg:gap-[25px] gap-[16px] border border-white lg:rounded-[36px] rounded-[26px]"
                    >
                        <div className="block-svg-wrap">
                            <div className="block-svg-float" style={{ animationDelay: `${idx * 0.25}s` }}>
                                <img src={step.image} alt="" className="block-svg-img" />
                            </div>
                        </div>
                        <span className={`lg:text-xl text-[10px] relative text-[#3F3F3F] before:w-2 before:h-2 before:rounded-full before:bg-[#3EA0EB] before:absolute before:left-[-15px] before:top-[50%] before:-translate-y-1/2 ${step.extraClass || ""}`}>
                            {step.text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
