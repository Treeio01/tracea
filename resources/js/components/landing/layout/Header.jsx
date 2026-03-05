import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NAV_ITEMS } from "../data/navItems";
import XIcon from "../icons/XIcon";
import LaunchAppButton from "../../LaunchAppButton";
import LandingMobileMenu from "./LandingMobileMenu";

const SCROLL_THRESHOLD = 80;

export default function Header({ twitterUrl }) {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const check = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        check();
        window.addEventListener("scroll", check, { passive: true });
        return () => window.removeEventListener("scroll", check);
    }, []);

    useGSAP(() => {
        gsap.from(headerRef.current, {
            y: -60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
        });
    }, { scope: headerRef });

    return (
        <>
       
        <header
            ref={headerRef}
            className={`fixed z-[100] top-0 left-0 right-0 z-50 1395:flex hidden w-full max-w-[1420px] mx-auto mt-[55px] mb-[30px] items-center transition-colors duration-300 ${
                isScrolled ? "" : "bg-transparent"
            } ${isScrolled ? "justify-center" : "justify-between"}`}
        >
            <img
                src="/assets/img/logo-full.svg"
                alt=""
                className={`header-logo transition-opacity duration-300 ${isScrolled ? "opacity-0 w-0 overflow-hidden absolute pointer-events-none" : "opacity-100"}`}
            />
            <div className="flex w-max p-1.5 rounded-full bg-white border border-[#E9E9E9]">
                <ul className="flex w-full rounded-full bg-white border border-[#E9E9E9] py-3.5 px-6 items-center gap-8">
                    {isScrolled && (
                        <>
                            <img src="/assets/img/logo-full.svg" alt="" className="shrink-0" />
                            <div className="flex min-h-[14px] w-px bg-[#606060] shrink-0" />
                        </>
                    )}
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label} className="flex items-center shrink-0">
                            <a
                                href={item.href}
                                className="text-[#191919] text-lg font-normal transition-colors hover:text-[#585858]"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`flex gap-3 items-stretch transition-all duration-300 overflow-hidden ${
                    isScrolled ? "max-w-0 opacity-0" : "max-w-[320px] opacity-100"
                }`}
            >
                <a
                    href={twitterUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-full bg-white border border-[#E3E3E3]/70 items-stretch shrink-0 ${
                        twitterUrl ? "hover:opacity-90 transition-opacity" : "pointer-events-none opacity-70"
                    }`}
                >
                    <div className="flex items-center justify-center p-4 bg-white border border-[#E3E3E3]/70 rounded-full">
                        <XIcon />
                    </div>
                </a>
                <LaunchAppButton className="p-1.5 rounded-full bg-white border border-[#E3E3E3]/70 shrink-0">
                    <div className="flex items-center justify-center p-3 bg-[#3EA0EB] rounded-full py-3.5 px-8">
                        <span className="text-[#FAFAFA]">Dashboard</span>
                    </div>
                </LaunchAppButton>
            </div>
        </header>

        <header className="1395:hidden z-[150] fixed top-0 left-0 right-0 z-[90] w-full bg-white justify-between flex items-center py-3 px-[22px] border-b border-[#EFEFEF]">
            <img src="/assets/img/logo-full.svg" className="w-[81px]" alt="" />
            <button
                onClick={() => setMenuOpen(true)}
                className="p-2 -mr-2 rounded-lg hover:bg-[#F5F5F5] active:scale-95 transition-transform"
                aria-label="Open menu"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#3EA0EB" />
                    <rect x="4" y="7" width="16" height="2" rx="1" fill="#F2F2F2" />
                    <rect x="4" y="11" width="16" height="2" rx="1" fill="#F2F2F2" />
                    <rect x="4" y="15" width="16" height="2" rx="1" fill="#F2F2F2" />
                </svg>
            </button>
        </header>
        <LandingMobileMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            twitterUrl={twitterUrl}
        />
        </>
    );
}
