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
        <section id="features" className="flex flex-col items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
            <SectionHeader
                badge="Core Features"
                title="Understanding Behavior, Not Predictions"
                subtitle={<>TRACEA analyzes real on-chain transactions, groups wallets by observed behavior, and <br /> provides market context — without signals or price forecasting.</>}
            />
            <div className="flex gap-[26px] w-full justify-center flex-wrap">
                {FEATURES.map((feature) => (
                    <div
                        key={feature.title}
                        className="flex relative flex-col gap-4 w-full max-w-[456px] py-9 px-7.5 bg-[#FDFDFD] border border-white rounded-[36px]"
                    >
                        <FeatureCornerIcon className="absolute bottom-[12px] right-[30px]" />
                        <span className="font-medium text-[28px] text-[#3F3F3F]">
                            {feature.title}
                        </span>
                        <DashedLine />
                        <ul className="flex flex-col gap-[10px]">
                            {feature.points.map((point, pi) => (
                                <li className="relative flex items-start" key={pi}>
                                    <span className="absolute left-[-20px] top-[-2px] text-[#9D9D9D] text-[22px] leading-[32px] font-normal select-none" style={{ lineHeight: "28px" }}>+</span>
                                    <span className="text-xl text-[#3F3F3F]">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
