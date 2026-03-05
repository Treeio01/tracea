import { useId } from "react";

export default function TimeIcon({ className = "" }) {
    const id = useId().replace(/:/g, "-");
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_0_1961)">
<g clip-path="url(#clip0_0_1961)">
<rect width="32" height="32" rx="5.73134" fill="#FDFDFD"/>
<g filter="url(#filter1_d_0_1961)">
<rect x="1.19385" y="1.19403" width="29.6119" height="29.6119" rx="5.25373" fill="#FEFEFE"/>
<rect x="1.31325" y="1.31343" width="29.3731" height="29.3731" rx="5.13433" stroke="#F2F2F2" stroke-width="0.238806"/>
<path d="M16 7.00006C20.9707 7.00006 25 11.0294 25 16.0001C25 20.9708 20.9707 25.0001 16 25.0001C11.0293 25.0001 7 20.9708 7 16.0001C7 11.0294 11.0293 7.00006 16 7.00006ZM16 10.6001C15.7613 10.6001 15.5324 10.6949 15.3636 10.8637C15.1948 11.0324 15.1 11.2614 15.1 11.5001V16.0001C15.1001 16.2387 15.1949 16.4676 15.3637 16.6364L18.0637 19.3364C18.2334 19.5003 18.4608 19.591 18.6968 19.589C18.9327 19.5869 19.1585 19.4923 19.3253 19.3254C19.4922 19.1585 19.5869 18.9328 19.5889 18.6968C19.591 18.4608 19.5002 18.2335 19.3363 18.0638L16.9 15.6275V11.5001C16.9 11.2614 16.8052 11.0324 16.6364 10.8637C16.4676 10.6949 16.2387 10.6001 16 10.6001Z" fill="black"/>
<path d="M16 7.00006C20.9707 7.00006 25 11.0294 25 16.0001C25 20.9708 20.9707 25.0001 16 25.0001C11.0293 25.0001 7 20.9708 7 16.0001C7 11.0294 11.0293 7.00006 16 7.00006ZM16 10.6001C15.7613 10.6001 15.5324 10.6949 15.3636 10.8637C15.1948 11.0324 15.1 11.2614 15.1 11.5001V16.0001C15.1001 16.2387 15.1949 16.4676 15.3637 16.6364L18.0637 19.3364C18.2334 19.5003 18.4608 19.591 18.6968 19.589C18.9327 19.5869 19.1585 19.4923 19.3253 19.3254C19.4922 19.1585 19.5869 18.9328 19.5889 18.6968C19.591 18.4608 19.5002 18.2335 19.3363 18.0638L16.9 15.6275V11.5001C16.9 11.2614 16.8052 11.0324 16.6364 10.8637C16.4676 10.6949 16.2387 10.6001 16 10.6001Z" fill="url(#paint0_linear_0_1961)"/>
</g>
</g>
<rect x="0.119403" y="0.119403" width="31.7612" height="31.7612" rx="5.61194" stroke="url(#paint1_linear_0_1961)" stroke-width="0.238806"/>
</g>
<defs>
<filter id="filter0_i_0_1961" x="0" y="-0.716418" width="32" height="32.7164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.716418"/>
<feGaussianBlur stdDeviation="1.4209"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1961"/>
</filter>
<filter id="filter1_d_0_1961" x="0.50131" y="0.979105" width="30.9969" height="30.997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.477612"/>
<feGaussianBlur stdDeviation="0.346269"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1961"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1961" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_1961" x1="16.0508" y1="7.00006" x2="16.0508" y2="25.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#73C2FF"/>
<stop offset="1" stop-color="#3EA0EB"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1961" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
<stop stop-color="#EAEAEA"/>
<stop offset="1" stop-color="#D3D3D3"/>
</linearGradient>
<clipPath id="clip0_0_1961">
<rect width="32" height="32" rx="5.73134" fill="white"/>
</clipPath>
</defs>
</svg>

    );
}
