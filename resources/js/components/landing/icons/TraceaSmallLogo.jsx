import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function TraceaSmallLogo({ className = "", ...props }) {
    const svgRef = useRef(null);

    useGSAP(() => {
        gsap.to(svgRef.current, {
            opacity: 0.4,
            scale: 1.08,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    });

    return (
        <svg ref={svgRef} width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M20.9951 27.7295L12.4961 32.8652V13.6934L20.9951 8.55859V27.7295ZM28.3867 8.55859H0L5.09961 0H33.4854L28.3867 8.55859Z" fill="#242424" />
        </svg>
    );
}
