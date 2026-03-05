import { useState } from "react";
import OverviewHeader from "./sections/OverviewHeader";
import OverviewTitle from "./sections/OverviewTitle";
import MarketSnapshotSection from "./sections/MarketSnapshotSection";
import WalletAnalyzerSection from "./sections/WalletAnalyzerSection";
import WalletSnapshotSection from "./sections/WalletSnapshotSection";
import ExpandedSnapshotSection from "./sections/ExpandedSnapshotSection";

export default function Content({ walletAddress, defaultWalletAddress, twitterUrl }) {
    const [stats, setStats] = useState(null);

    return (
        <div className="flex w-full h-full flex-col lg:pt-[26px] pt-[12px] lg:pb-[26px] pb-[26px] lg:pr-[99px] p-2 gap-[28px]">
            <OverviewHeader walletAddress={walletAddress} twitterUrl={twitterUrl} />
            <div className="flex flex-col w-full gap-[34px]">
                <OverviewTitle />
                <div className="flex xl:flex-row flex-col gap-[14px] w-full">
                    <div className="flex flex-col gap-[14px] max-w-[603px] w-full">
                        <MarketSnapshotSection />
                        <WalletAnalyzerSection
                            defaultAddress={defaultWalletAddress}
                            onStatsLoaded={setStats}
                        />
                    </div>
                    <div className="flex w-full flex-col gap-[14px] h-max">
                        <WalletSnapshotSection stats={stats} />
                        <ExpandedSnapshotSection twitterUrl={twitterUrl} />
                    </div>
                </div>
            </div>
        </div>
    );
}
