export default function FeaturesSection({ text }) {
    const features = [
        {
            title: "Wallet Performance Analysis",
            points: [
                "Shows real trading statistics for any public Solana wallet based on executed transactions.",
                "Helps assess consistency and profitability",
                "Helps understand trade frequency and holding behavior"
            ]
        },
        {
            title: "Behavioral Tag Discovery",
            points: [
                "Groups wallets by observed trading behavior using predefined tags.",
                "Helps explore cohorts instead of single wallets",
                "Helps identify common behavior patterns behind activity"
            ]
        },
        {
            title: "Market Context Ticker",
            points: [
                "Displays price movement of major assets as continual information.",
                "Helps interpret wallet behavior within market conditions",
                "Avoids signal-based or predictive framing"
            ]
        }
    ];

    return (
        <>
           <section id="features" className="flex flex-col items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
                <div className="flex flex-col items-center gap-4.5">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
                                <span className="text-[#0392FF]">
                                    Core Features
                                </span>
                            </div>
                        </div>
                        <h2 className="text-[#00143B] font-medium text-[48px]">
                            Understanding Behavior, Not Predictions
                        </h2>
                    </div>
                    <span className="text-xl text-[#232323] text-center">
                        TRACEA analyzes real on-chain transactions, groups wallets by observed behavior, and <br /> provides market context — without signals or price forecasting.
                    </span>
                </div>

                <div className="flex gap-[26px] w-full justify-center flex-wrap">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.title}
                            className="flex relative flex-col gap-4 w-full max-w-[456px] py-9 px-7.5 bg-[#FDFDFD] border border-white rounded-[36px]"
                        >
                            <svg className="absolute bottom-[12px] right-[30px]" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6494 5.72949H13.791V18.5625L8.20703 22V9.16602L13.7891 5.72949H0L3.35059 0H22L18.6494 5.72949Z" fill="#D9D9D9"/>
                            </svg>

                            <span className="font-medium text-[28px] text-[#3F3F3F]">
                                {feature.title}
                            </span>
                            <svg width="396" height="1" viewBox="0 0 396 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0.5H396" stroke="#9D9D9D" strokeDasharray="3 3"/>
                            </svg>
                            <ul className="flex flex-col gap-[10px]">
                                {feature.points.map((point, pi) => (
                                    <li className="relative flex items-start" key={pi}>
                                        <span className="absolute left-[-20px] top-[-2px] text-[#9D9D9D] text-[22px] leading-[32px] font-normal select-none" style={{lineHeight: '28px'}}>+</span>
                                        <span className="text-xl text-[#3F3F3F]">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}