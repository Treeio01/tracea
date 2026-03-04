export default function DashedLine({ className = "", width = 396, ...props }) {
    return (
        <svg width={width} height="1" viewBox={`0 0 ${width} 1`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d={`M0 0.5H${width}`} stroke="#9D9D9D" strokeDasharray="3 3" />
        </svg>
    );
}
