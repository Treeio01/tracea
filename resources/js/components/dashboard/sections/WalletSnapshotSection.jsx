import MetricCard from "../ui/MetricCard";
import { WALLET_METRICS, formatStatValue } from "../data/metrics";
import WalletIcon from "../icons/WalletIcon";
import PnlIcon from "../icons/PnlIcon";
import WinrateIcon from "../icons/WinrateIcon";
import TimeIcon from "../icons/TimeIcon";
import CalendarIcon from "../icons/CalendarIcon";
import SwapsIcon from "../icons/SwapsIcon";
import BuysSellsIcon from "../icons/BuysSellsIcon";

const ICON_MAP = {
    pnl: PnlIcon,
    winrate: WinrateIcon,
    time: TimeIcon,
    calendar: CalendarIcon,
    swaps: SwapsIcon,
    buysells: BuysSellsIcon,
};

export default function WalletSnapshotSection({ stats }) {
    return (
        <div className="flex flex-col lg:gap-[24px] gap-[12px] bg-[#FDFDFD] border-8 lg:rounded-[36px] rounded-[22px] border-white w-full lg:px-[35px] px-[22px] lg:py-[30px] py-[22px]">
            <div className="flex lg:gap-[14px] gap-[6px] items-center">
                <WalletIcon />
                <span className="lg:text-[32px] text-[22px] font-semibold leading-[120%] text-[#262626]">Wallet Snapshot</span>
            </div>
            <div className="flex gap-3 flex-wrap w-full">
                {WALLET_METRICS.map((metric) => {
                    const rawValue =
                        metric.key === "buysells"
                            ? stats?.swaps_count
                            : stats?.[metric.key];
                    const value = stats ? formatStatValue(metric.key, rawValue) : "—";
                    return (
                        <MetricCard
                            key={metric.title}
                            title={metric.title}
                            description={metric.description}
                            value={value}
                            icon={ICON_MAP[metric.icon]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
