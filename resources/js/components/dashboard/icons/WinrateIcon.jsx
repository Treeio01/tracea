import { useId } from "react";

export default function WinrateIcon({ className = "" }) {
    const id = useId().replace(/:/g, "-");
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_0_1971)">
        <g clip-path="url(#clip0_0_1971)">
        <rect width="32" height="32" rx="5.73134" fill="#FDFDFD"/>
        <g filter="url(#filter1_d_0_1971)">
        <rect x="1.19385" y="1.19403" width="29.6119" height="29.6119" rx="5.25373" fill="#FEFEFE"/>
        <rect x="1.31325" y="1.31343" width="29.3731" height="29.3731" rx="5.13433" stroke="#F2F2F2" stroke-width="0.238806"/>
        <path d="M13.9766 24.1247C13.1491 23.9361 12.3541 23.6255 11.618 23.2031M17.7809 7.42944C19.6718 7.8613 21.3601 8.92234 22.5693 10.4389C23.7785 11.9554 24.437 13.8375 24.437 15.7771C24.437 17.7166 23.7785 19.5988 22.5693 21.1153C21.3601 22.6318 19.6718 23.6928 17.7809 24.1247M8.82083 20.6209C8.30258 19.8668 7.90859 19.0345 7.65386 18.1557M7.43701 14.3504C7.58918 13.4469 7.88212 12.5909 8.29298 11.8063L8.45371 11.5162M11.0349 8.71911C11.9253 8.10745 12.9235 7.66986 13.9766 7.42944" stroke="url(#paint0_linear_0_1971)" stroke-width="1.90216" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </g>
        <rect x="0.119403" y="0.119403" width="31.7612" height="31.7612" rx="5.61194" stroke="url(#paint1_linear_0_1971)" stroke-width="0.238806"/>
        </g>
        <defs>
        <filter id="filter0_i_0_1971" x="0" y="-0.716418" width="32" height="32.7164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.716418"/>
        <feGaussianBlur stdDeviation="1.4209"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0 0.471154 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1971"/>
        </filter>
        <filter id="filter1_d_0_1971" x="0.50131" y="0.979105" width="30.9969" height="30.997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.477612"/>
        <feGaussianBlur stdDeviation="0.346269"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1971"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1971" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_0_1971" x1="15.985" y1="7.42944" x2="15.985" y2="24.1247" gradientUnits="userSpaceOnUse">
        <stop stop-color="#73C2FF"/>
        <stop offset="1" stop-color="#3EA0EB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_0_1971" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EAEAEA"/>
        <stop offset="1" stop-color="#D3D3D3"/>
        </linearGradient>
        <clipPath id="clip0_0_1971">
        <rect width="32" height="32" rx="5.73134" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    );
}
