export const WALLET_METRICS = [
    { title: "Realized PnL", description: "Net profit from closed\npositions", key: "pnl", icon: "pnl" },
    { title: "Winrate", description: "Share of profitable\ntrades", key: "winrate", icon: "winrate" },
    { title: "Avg hold time", description: "Average duration of\npositions", key: "average_holding_time_sec", icon: "time" },
    { title: "Active days", description: "Days with on-chain\nactivity", key: "consecutive_trading_days", icon: "calendar" },
    { title: "Total swaps", description: "Number of executed\ntrades", key: "swaps_count", icon: "swaps" },
    { title: "Buys / Sells", description: "Buy-to-sell transaction\ncount", key: "buysells", icon: "buysells" },
];

export function formatStatValue(key, value) {
    if (value == null) return "—";
    switch (key) {
        case "pnl": {
            const n = Number(value);
            const sign = n >= 0 ? "+" : "";
            return `${sign}$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
        case "winrate": {
            const n = Number(value);
            const pct = n <= 1 ? n * 100 : n;
            return `${pct.toFixed(1)}%`;
        }
        case "average_holding_time_sec": {
            const sec = Number(value);
            if (sec < 60) return `${sec}s`;
            const m = Math.floor(sec / 60);
            if (m < 60) return `${m}m`;
            const h = Math.floor(m / 60);
            const mm = m % 60;
            if (h < 24) return `${h}h ${mm}m`;
            const d = Math.floor(h / 24);
            const hh = h % 24;
            return `${d}d ${hh}h`;
        }
        case "consecutive_trading_days":
        case "swaps_count":
            return String(Number(value));
        case "buysells": {
            const n = Number(value);
            const half = Math.floor(n / 2);
            return `${half} / ${n - half}`;
        }
        default:
            return String(value);
    }
}
