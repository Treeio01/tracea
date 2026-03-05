import { useId } from "react";

export default function CalendarIcon({ className = "" }) {
    const id = useId().replace(/:/g, "-");
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_0_1980)">
<g clip-path="url(#clip0_0_1980)">
<rect width="32" height="32" rx="5.73134" fill="#FDFDFD"/>
<g filter="url(#filter1_d_0_1980)">
<rect x="1.19385" y="1.19403" width="29.6119" height="29.6119" rx="5.25373" fill="#FEFEFE"/>
<rect x="1.31325" y="1.31343" width="29.3731" height="29.3731" rx="5.13433" stroke="#F2F2F2" stroke-width="0.238806"/>
<path d="M12.7857 7.46436C13.3783 7.46436 13.8571 7.94315 13.8571 8.53578V9.60721H18.1429V8.53578C18.1429 7.94315 18.6217 7.46436 19.2143 7.46436C19.8069 7.46436 20.2857 7.94315 20.2857 8.53578V9.60721H21.3571C22.5391 9.60721 23.5 10.5682 23.5 11.7501V21.3929C23.5 22.5748 22.5391 23.5358 21.3571 23.5358H10.6429C9.46094 23.5358 8.5 22.5748 8.5 21.3929V11.7501C8.5 10.5682 9.46094 9.60721 10.6429 9.60721H11.7143V8.53578C11.7143 7.94315 12.1931 7.46436 12.7857 7.46436ZM12.7857 16.0358C12.1931 16.0358 11.7143 16.5146 11.7143 17.1072V19.2501C11.7143 19.8427 12.1931 20.3215 12.7857 20.3215H14.9286C15.5212 20.3215 16 19.8427 16 19.2501V17.1072C16 16.5146 15.5212 16.0358 14.9286 16.0358H12.7857Z" fill="url(#paint0_linear_0_1980)"/>
</g>
</g>
<rect x="0.119403" y="0.119403" width="31.7612" height="31.7612" rx="5.61194" stroke="url(#paint1_linear_0_1980)" stroke-width="0.238806"/>
</g>
<defs>
<filter id="filter0_i_0_1980" x="0" y="-0.716418" width="32" height="32.7164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.716418"/>
<feGaussianBlur stdDeviation="1.4209"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1980"/>
</filter>
<filter id="filter1_d_0_1980" x="0.50131" y="0.979105" width="30.9969" height="30.997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.477612"/>
<feGaussianBlur stdDeviation="0.346269"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1980"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1980" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_1980" x1="16.0424" y1="7.46436" x2="16.0424" y2="23.5358" gradientUnits="userSpaceOnUse">
<stop stop-color="#73C2FF"/>
<stop offset="1" stop-color="#3EA0EB"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1980" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
<stop stop-color="#EAEAEA"/>
<stop offset="1" stop-color="#D3D3D3"/>
</linearGradient>
<clipPath id="clip0_0_1980">
<rect width="32" height="32" rx="5.73134" fill="white"/>
</clipPath>
</defs>
</svg>

    );
}
