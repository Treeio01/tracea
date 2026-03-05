import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import XIcon from "../icons/XIcon";
import LaunchAppButton from "../../LaunchAppButton";
import { NAV_ITEMS } from "../data/navItems";

const CLOSE_DURATION = 380;

export default function LandingMobileMenu({ isOpen, onClose, twitterUrl }) {
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
        <div className="1395:hidden fixed inset-0 z-[9999]" aria-hidden={!isOpen}>
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
                className="absolute bottom-0 left-0 right-0 min-h-[280px] max-h-[85vh] bg-[#FDFDFD] rounded-t-[24px] flex flex-col py-6 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] overflow-y-auto"
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
                <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="py-4 flex px-5 w-full items-center gap-3 bg-white border border-[#F3F5F5] rounded-[16px] hover:border-[#E9E9E9] transition-colors"
                        >
                            <span className="leading-[100%] text-[#494949]">{item.label}</span>
                        </a>
                    ))}
                </div>
                <div onClick={onClose} className="mt-auto pt-3">
                    <LaunchAppButton className="w-full flex justify-center p-4 bg-[#3EA0EB] rounded-[16px]">
                        <span className="text-white font-semibold">Dashboard</span>
                    </LaunchAppButton>
                </div>
            </div>
        </div>,
        document.body
    );
}
