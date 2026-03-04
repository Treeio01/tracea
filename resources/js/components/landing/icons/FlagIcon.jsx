export default function FlagIcon({ className = "", ...props }) {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M7 13.5C8.71751 13.5 10.297 13.8473 11.4658 14.4316C12.6048 15.0011 13.5 15.8802 13.5 17C13.5 18.1198 12.6048 18.9989 11.4658 19.5684C10.297 20.1527 8.71751 20.5 7 20.5C5.28249 20.5 3.703 20.1527 2.53418 19.5684C1.39524 18.9989 0.5 18.1198 0.5 17C0.5 15.8802 1.39524 15.0011 2.53418 14.4316C3.703 13.8473 5.28249 13.5 7 13.5Z" fill="url(#paint0_radial_flag)" stroke="#CCCCCC" />
            <path d="M8 10V16C8 16.2833 7.904 16.521 7.712 16.713C7.52 16.905 7.28267 17.0007 7 17C6.71733 16.9993 6.48 16.9033 6.288 16.712C6.096 16.5207 6 16.2833 6 16V1C6 0.716667 6.096 0.479333 6.288 0.288C6.48 0.0966668 6.71733 0.000666667 7 0H14.175C14.4083 0 14.6167 0.0749999 14.8 0.225C14.9833 0.375 15.1 0.566667 15.15 0.8L15.4 2H20C20.2833 2 20.521 2.096 20.713 2.288C20.905 2.48 21.0007 2.71733 21 3V11C21 11.2833 20.904 11.521 20.712 11.713C20.52 11.905 20.2827 12.0007 20 12H14.825C14.5917 12 14.3833 11.925 14.2 11.775C14.0167 11.625 13.9 11.4333 13.85 11.2L13.6 10H8Z" fill="url(#paint1_linear_flag)" />
            <defs>
                <radialGradient id="paint0_radial_flag" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7 17) rotate(90) scale(3 8.39253)">
                    <stop stopColor="#F1F1F1" />
                    <stop offset="1" stopColor="#D9D9D9" />
                </radialGradient>
                <linearGradient id="paint1_linear_flag" x1="13.5424" y1="0" x2="13.5424" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#75C3FF" />
                    <stop offset="1" stopColor="#3EA0EB" />
                </linearGradient>
            </defs>
        </svg>
    );
}
