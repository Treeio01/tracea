import SectionHeader from "../ui/SectionHeader";
import FeatureCornerIcon from "../icons/FeatureCornerIcon";
import DashedLine from "../icons/DashedLine";

const FEATURES = [
    {
        title: "Wallet Performance Analysis",
        points: [
            "Shows real trading statistics for any public Solana wallet based on executed transactions.",
            "Helps assess consistency and profitability",
            "Helps understand trade frequency and holding behavior",
        ],
    },
    {
        title: "Behavioral Tag Discovery",
        points: [
            "Groups wallets by observed trading behavior using predefined tags.",
            "Helps explore cohorts instead of single wallets",
            "Helps identify common behavior patterns behind activity",
        ],
    },
    {
        title: "Market Context Ticker",
        points: [
            "Displays price movement of major assets as continual information.",
            "Helps interpret wallet behavior within market conditions",
            "Avoids signal-based or predictive framing",
        ],
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="flex flex-col items-center gap-[36px] w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="Core Features"
                title="Understanding Behavior, Not Predictions"
                subtitle={<>TRACEA analyzes real on-chain transactions, groups wallets by observed behavior, and <br /> provides market context — without signals or price forecasting.</>}
            />
            <div className="features-grid flex lg:gap-[26px] gap-[10px] w-full justify-center flex-wrap" data-scroll-stagger="0.15" data-scroll-animate-type="slide-up-70" data-scroll-stagger-children=".feature-card">
                {FEATURES.map((feature) => (
                    <div
                        key={feature.title}
                        className="feature-card flex relative flex-col lg:gap-4 gap-2.5 w-full max-w-[456px] lg:py-9 py-[26px] lg:px-7.5 px-5 bg-[#FDFDFD] border border-white lg:rounded-[36px] rounded-[26px]"
                    >
                        <FeatureCornerIcon className="absolute bottom-[12px] right-[30px]" />
                        <span className="font-medium lg:text-[28px] text-[16px] text-[#3F3F3F]">
                            {feature.title}
                        </span>
                        <DashedLine className="w-full" />
                        <ul className="flex flex-col gap-[10px]">
                            {feature.points.map((point, pi) => (
                                <li className="relative flex items-start" key={pi}>
                                    <span className="absolute lg:flex hidden left-[-20px] top-[-2px] text-[#9D9D9D] text-[22px] leading-[32px] font-normal select-none" style={{ lineHeight: "28px" }}>+</span>
                                    <span className="lg:text-xl text-[10px] text-[#3F3F3F]">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
