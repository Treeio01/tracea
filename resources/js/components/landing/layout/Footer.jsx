import { NAV_ITEMS } from "../data/navItems";
import XIcon from "../icons/XIcon";
import LaunchAppButton from "../../LaunchAppButton";

export default function Footer({ twitter }) {
    return (
        <footer className="w-full bg-[#1A1A1A] lg:py-[26px] py-[16px] lg:px-[40px] px-[20px] flex items-center justify-center">
            <div className="flex w-full max-w-[1420px] items-center justify-between">
                <img src="/assets/img/logo-full.svg" className="lg:w-[154px] w-[105px]" alt="" />
                <ul className="lg:flex hidden items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="text-[#E0E0E0] text-lg font-normal transition-colors hover:text-white"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4 items-center">
                    <a href={twitter || "#"} target="_blank" rel="noopener noreferrer" className={`lg:p-4 p-2 rounded-full bg-[#323232] border border-[#414141] transition-colors ${twitter ? "hover:bg-[#414141]" : "pointer-events-none opacity-70"}`}>
                        <XIcon fill="#E0E0E0" />
                    </a>
                    <LaunchAppButton className="bg-[#3EA0EB] lg:px-[32px] px-[26px] flex lg:py-3.5 py-3 rounded-full">
                        <span className="text-[#FAFAFA] leading-[100%] lg:text-[16px] text-[10px]">Dashboard</span>
                    </LaunchAppButton>
                </div>
            </div>
        </footer>
    );
}
