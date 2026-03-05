import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FeatureCornerIcon({ className = "", ...props }) {
    const svgRef = useRef(null);

    useGSAP(() => {
        gsap.to(svgRef.current, {
            opacity: 0.4,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    });

    return (
        <svg ref={svgRef} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M18.6494 5.72949H13.791V18.5625L8.20703 22V9.16602L13.7891 5.72949H0L3.35059 0H22L18.6494 5.72949Z" fill="#D9D9D9" />
        </svg>
    );
}
