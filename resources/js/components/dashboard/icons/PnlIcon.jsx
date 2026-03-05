import { useId } from "react";

export default function PnlIcon({ className = "" }) {
    const id = useId().replace(/:/g, "-");
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_0_1953)">
<g clip-path="url(#clip0_0_1953)">
<rect width="32" height="32" rx="5.73134" fill="#FDFDFD"/>
<g filter="url(#filter1_d_0_1953)">
<rect x="1.19385" y="1.19403" width="29.6119" height="29.6119" rx="5.25373" fill="#FEFEFE"/>
<rect x="1.31325" y="1.31343" width="29.3731" height="29.3731" rx="5.13433" stroke="#F2F2F2" stroke-width="0.238806"/>
<path d="M19.6 15.8021L23.416 9.20509L24.973 10.1051L20.266 18.2501L14.407 14.8751L10.114 22.3001H25V24.1001H7V7.90009H8.8V20.9861L13.75 12.4001L19.6 15.8021Z" fill="url(#paint0_linear_0_1953)"/>
</g>
</g>
<rect x="0.119403" y="0.119403" width="31.7612" height="31.7612" rx="5.61194" stroke="url(#paint1_linear_0_1953)" stroke-width="0.238806"/>
</g>
<defs>
<filter id="filter0_i_0_1953" x="0" y="-0.716418" width="32" height="32.7164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.716418"/>
<feGaussianBlur stdDeviation="1.4209"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1953"/>
</filter>
<filter id="filter1_d_0_1953" x="0.50131" y="0.979105" width="30.9969" height="30.997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.477612"/>
<feGaussianBlur stdDeviation="0.346269"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1953"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1953" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_1953" x1="16.0508" y1="7.90009" x2="16.0508" y2="24.1001" gradientUnits="userSpaceOnUse">
<stop stop-color="#73C2FF"/>
<stop offset="1" stop-color="#3EA0EB"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1953" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
<stop stop-color="#EAEAEA"/>
<stop offset="1" stop-color="#D3D3D3"/>
</linearGradient>
<clipPath id="clip0_0_1953">
<rect width="32" height="32" rx="5.73134" fill="white"/>
</clipPath>
</defs>
</svg>

    );
}
