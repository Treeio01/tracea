import { Link } from "@inertiajs/react";
import OverviewIcon from "../icons/OverviewIcon";
import LandingIcon from "../icons/LandingIcon";
import WalletIcon1 from "../icons/WalletIcon1";
import BehaivorIcon from "../icons/BehaivorIcon";

export default function Sidebar() {
    return (
        <aside className="lg:flex hidden bg-[#FDFDFD] justify-between border-3 border-white flex-col w-full max-w-[344px] pb-[52px] px-9 py-8 h-full">
            <div className="flex flex-col gap-8">
                <img src="/assets/img/logo-full.svg" className="max-w-[118px]" alt="" />
                <div className="flex w-full min-h-[1px] bg-[#DFDFDF]" />
                <Link
                    href="#overview"
                    className="py-4.5 flex px-6 w-full items-center gap-1.5 bg-white border border-[#F3F5F5] rounded-[16px] hover:border-[#E9E9E9] hover:opacity-90 transition-all"
                >
                    <OverviewIcon className="shrink-0" />
                    <span className="leading-[100%] text-[#494949]">Overview</span>
                </Link>
                <div
                    className="py-4.5 flex px-6 w-full items-center gap-1.5 bg-white/50 border border-[#F3F5F5] rounded-[16px] opacity-60 blur-[2px] pointer-events-none select-none"
                >
                    <BehaivorIcon className="shrink-0" />
                    <span className="leading-[100%] text-[#494949]">Behavior Discovery</span>
                </div>
                <div
                    className="py-4.5 flex px-6 w-full items-center gap-1.5 bg-white/50 border border-[#F3F5F5] rounded-[16px] opacity-60 blur-[2px] pointer-events-none select-none"
                >
                    <WalletIcon1 className="shrink-0" />
                    <span className="leading-[100%] text-[#494949]">Wallet Analysis</span>
                </div>
            </div>
            <Link
                href="/"
                className="py-4.5 flex px-6 w-full items-center gap-1.5 bg-white border border-[#F3F5F5] rounded-[16px] hover:border-[#E9E9E9] hover:opacity-90 transition-all mt-auto"
            >
                <LandingIcon className="shrink-0" />
                <span className="leading-[100%] text-[#494949]">Return to landing page</span>
            </Link>
        </aside>
    );
}
