import { NAV_ITEMS } from "../data/navItems";
import XIcon from "../icons/XIcon";

export default function Footer({ twitter }) {
    return (
        <footer className="w-full bg-[#1A1A1A] py-[26px] flex items-center justify-center">
            <div className="flex w-full max-w-[1420px] items-center justify-between">
                <img src="/assets/img/logo-full.svg" alt="" />
                <ul className="flex items-center gap-8">
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
                    <a href={twitter} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-[#323232] border border-[#414141] hover:bg-[#414141] transition-colors">
                        <XIcon fill="#E0E0E0" />
                    </a>
                    <button className="bg-[#3EA0EB] px-[32px] py-3.5 rounded-full">
                        <span className="text-[#FAFAFA] leading-[100%]">Dashboard</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
