import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@inertiajs/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import OverviewIcon from "../icons/OverviewIcon";
import LandingIcon from "../icons/LandingIcon";
import WalletIcon1 from "../icons/WalletIcon1";
import BehaivorIcon from "../icons/BehaivorIcon";
import XIcon from "@/components/landing/icons/XIcon";

const CLOSE_DURATION = 380;

export default function MobileMenu({ isOpen, onClose, twitterUrl }) {
    const overlayRef = useRef(null);
    const panelRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const t = setTimeout(() => setVisible(false), CLOSE_DURATION);
            return () => clearTimeout(t);
        }
    }, [isOpen]);

    useGSAP(
        () => {
            if (!overlayRef.current || !panelRef.current) return;
            if (isOpen) {
                gsap.killTweensOf([overlayRef.current, panelRef.current]);
                gsap.set(panelRef.current, { y: "100vh" });
                gsap.to(overlayRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });
                gsap.to(panelRef.current, {
                    y: 0,
                    duration: 0.45,
                    ease: "back.out(1.15)",
                    overwrite: true,
                });
            } else {
                gsap.killTweensOf([overlayRef.current, panelRef.current]);
                gsap.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.25,
                });
                gsap.to(panelRef.current, {
                    y: "100vh",
                    duration: 0.35,
                    ease: "power3.in",
                });
            }
        },
        { dependencies: [isOpen] }
    );

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEscape);
        }
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!visible) return null;

    return createPortal(
        <div className="lg:hidden fixed inset-0 z-[9999]" aria-hidden={!isOpen}>
            <div
                ref={overlayRef}
                role="button"
                tabIndex={0}
                onClick={onClose}
                onKeyDown={(e) => e.key === "Enter" && onClose()}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                style={{ opacity: 1 }}
                aria-label="Close menu"
            />
            <div
                ref={panelRef}
                className="absolute bottom-0 gap-3 left-0 right-0 min-h-[280px] max-h-[85vh] bg-[#FDFDFD] rounded-t-[24px] flex flex-col py-6 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] overflow-y-auto"
                style={{
                    boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.08), 0 -12px 40px -8px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)",
                }}
            >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[#E0E0E0]" aria-hidden />
                <div className="flex justify-between items-center mb-6 mt-1">
                    <img src="/assets/img/logo-full.svg" className="max-w-[118px]" alt="" />
                    <div className="flex items-center gap-2">
                        {twitterUrl && (
                            <a
                                href={twitterUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="p-2.5 rounded-full bg-[#323232] hover:bg-[#414141] transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <XIcon fill="#E0E0E0" />
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            className="p-2 -mr-2 rounded-full hover:bg-[#F0F0F0] transition-colors"
                            aria-label="Close"
                        >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6l12 12" stroke="#494949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <Link
                        href="#overview"
                        onClick={onClose}
                        className="py-4 flex px-5 w-full items-center gap-3 bg-white border border-[#F3F5F5] rounded-[16px] hover:border-[#E9E9E9] transition-colors"
                    >
                        <OverviewIcon className="shrink-0" />
                        <span className="leading-[100%] text-[#494949]">Overview</span>
                    </Link>
                    <div className="py-4 flex px-5 w-full items-center gap-3 bg-white/50 border border-[#F3F5F5] rounded-[16px] opacity-60 blur-[2px] pointer-events-none select-none">
                        <BehaivorIcon className="shrink-0" />
                        <span className="leading-[100%] text-[#494949]">Behavior Discovery</span>
                    </div>
                    <div className="py-4 flex px-5 w-full items-center gap-3 bg-white/50 border border-[#F3F5F5] rounded-[16px] opacity-60 blur-[2px] pointer-events-none select-none">
                        <WalletIcon1 className="shrink-0" />
                        <span className="leading-[100%] text-[#494949]">Wallet Analysis</span>
                    </div>
                </div>
                <Link
                    href="/"
                    onClick={onClose}
                    className="py-4 flex px-5 w-full items-center gap-3 bg-white border border-[#F3F5F5] rounded-[16px] hover:border-[#E9E9E9] transition-colors mt-auto"
                >
                    <LandingIcon className="shrink-0" />
                    <span className="leading-[100%] text-[#494949]">Return to landing page</span>
                </Link>
            </div>
        </div>,
        document.body
    );
}
