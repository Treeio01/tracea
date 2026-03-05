import { useId, useEffect, useState } from "react";
import axios from "axios";

function formatPrice(price) {
    if (price == null || isNaN(price)) return "—";
    return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
}

function formatChange(change) {
    if (change == null || isNaN(change)) return "—";
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
}

function parseChartResponse(data) {
    const klines = data?.klines ?? [];
    const price = data?.price ?? (klines.length ? klines[klines.length - 1]?.p : null);
    const firstPrice = klines.length ? klines[0]?.p : null;
    const change24h =
        firstPrice != null && firstPrice > 0 && price != null
            ? ((price - firstPrice) / firstPrice) * 100
            : null;
    return { price, change24h };
}

export default function MarketSnapshotSection() {
    const id = useId().replace(/:/g, "-");
    const [solData, setSolData] = useState({ price: null, change24h: null });
    const [usdcData, setUsdcData] = useState({ price: null, change24h: null });
    const [loading, setLoading] = useState(true);
    const [updatedAt, setUpdatedAt] = useState(null);

    useEffect(() => {
        let cancelled = false;
        const fetchMarket = async () => {
            try {
                const [solRes, usdcRes] = await Promise.all([
                    axios.get("/api/sol/chart", { params: { tf: "24H" } }),
                    axios.get("/api/usdc/chart", { params: { tf: "24H" } }),
                ]);
                if (cancelled) return;
                setSolData(parseChartResponse(solRes.data));
                setUsdcData(parseChartResponse(usdcRes.data));
                setUpdatedAt(new Date());
            } catch {
                if (!cancelled) {
                    setSolData({ price: null, change24h: null });
                    setUsdcData({ price: null, change24h: null });
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchMarket();
        const interval = setInterval(fetchMarket, 60000);
        return () => {
            cancelled = true;
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="flex w-full relative overflow-hidden lg:gap-[24px] gap-[16px] flex-col lg:py-[30px] lg:pl-[40px] lg:pr-[20px] py-[22px] pl-[22px] pr-[22px] lg:rounded-[36px] rounded-[22px] bg-[#1A1A1A] border-8 border-white">
            <img src="/assets/img/dashboard-price-light.svg" className="absolute top-0 right-0" alt="" />
            <div className="flex w-full justify-between items-start z-50">
                <div className="flex flex-col lg:gap-3 gap-1">
                    <div className="flex gap-[10px] items-center">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter={`url(#filter0_d_ms_${id})`}>
                                <rect x="0.616699" width="32" height="32" rx="3.62264" fill={`url(#paint0_ms_${id})`} />
                                <rect x="0.680956" y="0.064257" width="31.8715" height="31.8715" rx="3.55838" stroke={`url(#paint1_ms_${id})`} strokeWidth="0.128514" />
                            </g>
                            <g filter={`url(#filter1_d_ms_${id})`}>
                                <rect x="2.6167" y="1.5" width="28" height="29" rx="3.36076" fill={`url(#paint2_ms_${id})`} />
                                <rect x="2.67631" y="1.55961" width="27.8808" height="28.8808" rx="3.30115" stroke={`url(#paint3_ms_${id})`} strokeWidth="0.119224" />
                            </g>
                            <path d="M10.2686 20.7181L14.8389 16.0199L17.2852 18.5375L17.6436 18.9066L18.002 18.5375L22.752 13.6478V16.0804H24.6865V10.2699H19.0127V12.2318H21.4043L17.6426 16.1049L15.1982 13.5863L14.8389 13.2162L14.4805 13.5863L8.89453 19.3451L8.55566 19.6927L8.89453 20.0414L9.55176 20.7181L9.91016 21.0873L10.2686 20.7181Z" fill={`url(#paint4_ms_${id})`} stroke={`url(#paint5_ms_${id})`} />
                            <path d="M5.54053 26.5234C5.54078 26.829 5.78852 27.0771 6.09424 27.0771H11.6323V28.1845H6.09424C5.17677 28.1845 4.43238 27.4408 4.43213 26.5234V20.9843H5.54053V26.5234ZM28.8013 26.5224C28.8013 27.4398 28.0575 28.1842 27.1401 28.1845H21.6011V27.0761H27.1401C27.4457 27.0758 27.6938 26.8281 27.6938 26.5224V20.9843H28.8013V26.5224ZM11.6333 4.92377H6.09424C5.78848 4.9239 5.54053 5.17169 5.54053 5.47748V11.0156H4.43311V5.47748C4.43311 4.55994 5.17673 3.8155 6.09424 3.81537H11.6333V4.92377ZM27.1392 3.81537C28.0566 3.81537 28.8009 4.5592 28.8013 5.4765V11.0156H27.6929V5.4765C27.6925 5.17095 27.4448 4.92279 27.1392 4.92279H21.6011V3.81537H27.1392Z" fill={`url(#paint6_ms_${id})`} />
                            <defs>
                                <filter id={`filter0_d_ms_${id}`} x="-0.000168264" y="0" width="33.2337" height="33.2594" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="0.64257" />
                                    <feGaussianBlur stdDeviation="0.308434" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1856" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1856" result="shape" />
                                </filter>
                                <filter id={`filter1_d_ms_${id}`} x="1.99983" y="1.5" width="29.2337" height="30.2594" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="0.64257" />
                                    <feGaussianBlur stdDeviation="0.308434" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1856" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1856" result="shape" />
                                </filter>
                                <linearGradient id={`paint0_ms_${id}`} x1="16.6167" y1="0" x2="16.6167" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3B3B3B" />
                                    <stop offset="1" stopColor="#0C0C0C" />
                                </linearGradient>
                                <linearGradient id={`paint1_ms_${id}`} x1="16.6167" y1="0" x2="16.6167" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#545454" />
                                    <stop offset="1" stopColor="#2E2E2E" />
                                </linearGradient>
                                <linearGradient id={`paint2_ms_${id}`} x1="16.6167" y1="1.5" x2="16.6167" y2="30.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#353535" />
                                    <stop offset="1" stopColor="#080808" />
                                </linearGradient>
                                <linearGradient id={`paint3_ms_${id}`} x1="16.6167" y1="1.5" x2="16.6167" y2="30.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3D3D3D" />
                                    <stop offset="1" stopColor="#151515" />
                                </linearGradient>
                                <linearGradient id={`paint4_ms_${id}`} x1="16.7196" y1="20.3695" x2="16.7196" y2="10.7695" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3EA0EB" />
                                    <stop offset="1" stopColor="#86CAFE" />
                                </linearGradient>
                                <linearGradient id={`paint5_ms_${id}`} x1="16.7196" y1="20.3695" x2="16.7196" y2="10.7695" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0D0D0D" />
                                    <stop offset="1" stopColor="#303030" />
                                </linearGradient>
                                <linearGradient id={`paint6_ms_${id}`} x1="16.6167" y1="3.81537" x2="16.6167" y2="28.1846" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4F4F4F" />
                                    <stop offset="1" stopColor="#292929" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="text-[22px] lg:text-[32px] font-semibold leading-[140%] text-[#F4F4F4]">Market snapshot</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="leading-[140%] lg:text-base text-[8px] text-[#B2B2B2]">Data source:</span>
                        <span className="text-[#717171] lg:text-base text-[8px] underline">CoinGecko</span>
                    </div>
                </div>
                <div className="lg:flex hidden items-center gap-2 p-3 rounded-full bg-[#262626]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.42861 0.210138C5.60856 -0.110245 6.85823 -0.062495 8.01029 0.346993C9.16235 0.756481 10.1618 1.50816 10.8749 2.50139V1.31264C10.8749 1.16345 10.9341 1.02038 11.0396 0.91489C11.1451 0.809401 11.2882 0.750138 11.4374 0.750138C11.5865 0.750138 11.7296 0.809401 11.8351 0.91489C11.9406 1.02038 11.9999 1.16345 11.9999 1.31264V4.50014H8.81236C8.66318 4.50014 8.5201 4.44087 8.41461 4.33539C8.30912 4.2299 8.24986 4.08682 8.24986 3.93764C8.24986 3.78845 8.30912 3.64538 8.41461 3.53989C8.5201 3.4344 8.66318 3.37514 8.81236 3.37514H10.1076C9.52011 2.456 8.64132 1.76047 7.61181 1.39981C6.5823 1.03915 5.46158 1.0342 4.42892 1.38576C3.39627 1.73732 2.51137 2.42506 1.91578 3.33897C1.32019 4.25288 1.04832 5.34014 1.14369 6.42682C1.23905 7.5135 1.69612 8.53679 2.44178 9.333C3.18744 10.1292 4.1786 10.6523 5.2567 10.8187C6.3348 10.985 7.43753 10.7849 8.38849 10.2505C9.33945 9.71601 10.0837 8.87805 10.5021 7.87064C10.5293 7.8008 10.5701 7.73708 10.6222 7.68324C10.6744 7.62941 10.7367 7.58653 10.8057 7.55712C10.8746 7.52772 10.9487 7.51239 11.0236 7.51202C11.0986 7.51166 11.1728 7.52628 11.242 7.55501C11.3113 7.58374 11.374 7.62602 11.4267 7.67935C11.4793 7.73268 11.5208 7.79599 11.5486 7.86557C11.5765 7.93515 11.5901 8.00958 11.5888 8.08451C11.5874 8.15944 11.5712 8.23334 11.5409 8.30189C11.15 9.24279 10.5259 10.0687 9.72751 10.7016C8.92912 11.3346 7.98268 11.7538 6.97743 11.9198C5.97217 12.0858 4.9412 11.993 3.98171 11.6503C3.02221 11.3076 2.1658 10.7262 1.49319 9.96086C0.820588 9.19555 0.353948 8.27157 0.137261 7.27601C-0.0794257 6.28045 -0.0390223 5.2461 0.254663 4.27048C0.548348 3.29486 1.08564 2.41009 1.81589 1.69958C2.54615 0.989073 3.44531 0.476978 4.42861 0.210138Z" fill="#E7E7E7" />
                    </svg>
                    <span className="text-[#E7E7E7] text-[12px] leading-[100%]">
                        {updatedAt
                            ? `Last updated ${updatedAt.toLocaleTimeString()}`
                            : loading
                              ? "Loading..."
                              : "—"}
                    </span>
                </div>
            </div>
            <div className="flex w-full flex-col gap-3 z-50">
                <div
                    className="flex items-stretch w-full p-1.5 gap-1.5 lg:rounded-[18px] rounded-[10px] border border-[#272626]"
                    style={{
                        background: "linear-gradient(to top, #0A0A0A, #202020)",
                        boxShadow: "0px 12px 18.2px 0px rgba(0, 0, 0, 0.08), inset 0px -3px 11.9px 0px rgba(120, 120, 120, 0.26)",
                    }}
                >
                    <div className="flex lg:p-[19px] p-[10px] lg:rounded-[19px] rounded-[10px] items-center justify-center bg-linear-to-t from-[#0A0A0A] to-[#1C1C1C] border border-[#272626] shrink-0" style={{ boxShadow: "0px 3.25px 4.71px 0px rgba(0, 0, 0, 0.21)" }}>
                        <svg className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" />
                            <path d="M12.3987 24.7385C12.5373 24.5999 12.7278 24.519 12.9299 24.519H31.2591C31.594 24.519 31.7615 24.9233 31.5247 25.16L27.904 28.7808C27.7654 28.9194 27.5748 29.0003 27.3727 29.0003H9.04352C8.70858 29.0003 8.54111 28.596 8.77788 28.3593L12.3987 24.7385Z" fill={`url(#sol_paint0_${id})`} />
                            <path d="M12.3987 11.2204C12.543 11.0818 12.7336 11.001 12.9299 11.001H31.2591C31.594 11.001 31.7615 11.4052 31.5247 11.642L27.904 15.2628C27.7654 15.4014 27.5748 15.4822 27.3727 15.4822H9.04352C8.70858 15.4822 8.54111 15.078 8.77788 14.8412L12.3987 11.2204Z" fill={`url(#sol_paint1_${id})`} />
                            <path d="M27.904 17.9367C27.7654 17.7981 27.5748 17.7173 27.3727 17.7173H9.04352C8.70858 17.7173 8.54111 18.1215 8.77788 18.3583L12.3987 21.9791C12.5373 22.1177 12.7278 22.1985 12.9299 22.1985H31.2591C31.594 22.1985 31.7615 21.7943 31.5247 21.5575L27.904 17.9367Z" fill={`url(#sol_paint2_${id})`} />
                            <defs>
                                <linearGradient id={`sol_paint0_${id}`} x1="-32.7601" y1="7.59985" x2="-33.2478" y2="32.1396" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00FFA3" />
                                    <stop offset="1" stopColor="#DC1FFF" />
                                </linearGradient>
                                <linearGradient id={`sol_paint1_${id}`} x1="-38.3068" y1="4.70473" x2="-38.7945" y2="29.2445" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00FFA3" />
                                    <stop offset="1" stopColor="#DC1FFF" />
                                </linearGradient>
                                <linearGradient id={`sol_paint2_${id}`} x1="-35.5511" y1="6.14366" x2="-36.0388" y2="30.6834" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00FFA3" />
                                    <stop offset="1" stopColor="#DC1FFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex py-2 lg:py-3.5 w-full justify-between px-2.5 lg:px-4.5 lg:rounded-[19px] rounded-[10px] items-center bg-linear-to-t from-[#0A0A0A] to-[#1C1C1C] border border-[#272626]" style={{ boxShadow: "0px 3.25px 4.71px 0px rgba(0, 0, 0, 0.21)" }}>
                        <div className="flex flex-col gap-1">
                            <span className="lg:text-lg text-[10px] font-semibold leading-[140%] text-[#F3F3F3]">Solana</span>
                            <span className="lg:text-sm text-[8px] leading-[140%] text-[#CFCECE]">SOL</span>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                            <div className="flex items-baseline gap-2">
                                <span className="lg:text-sm text-[8px] leading-[140%] text-[#E0E0E0]">Price:</span>
                                <span className="lg:text-lg text-[10px] font-semibold leading-[140%] text-[#F3F3F3]">
                                    {loading ? "—" : `${formatPrice(solData.price)} $`}
                                </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="lg:text-sm text-[8px] leading-[140%] text-[#E0E0E0]">24h Change:</span>
                                <span
                                    className={`lg:text-lg text-[10px] font-semibold leading-[140%] ${
                                        solData.change24h != null
                                            ? solData.change24h >= 0
                                                ? "text-[#4ADE80]"
                                                : "text-[#F87171]"
                                            : "text-[#F3F3F3]"
                                    }`}
                                >
                                    {loading ? "—" : formatChange(solData.change24h)}
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="flex items-stretch w-full p-1.5 gap-1.5 lg:rounded-[18px] rounded-[10px] border border-[#272626]"
                    style={{
                        background: "linear-gradient(to top, #0A0A0A, #202020)",
                        boxShadow: "0px 12px 18.2px 0px rgba(0, 0, 0, 0.08), inset 0px -3px 11.9px 0px rgba(120, 120, 120, 0.26)",
                    }}
                >
                    <div className="flex lg:p-[19px] p-[10px] lg:rounded-[19px] rounded-[10px] items-center justify-center bg-linear-to-t from-[#0A0A0A] to-[#1C1C1C] border border-[#272626] shrink-0" style={{ boxShadow: "0px 3.25px 4.71px 0px rgba(0, 0, 0, 0.21)" }}>
                        <svg className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 40C31.0834 40 40 31.0834 40 20C40 8.9166 31.0834 0 20 0C8.9166 0 0 8.9166 0 20C0 31.0834 8.9166 40 20 40Z" fill="#2775CA" />
                            <path d="M25.5025 23.1685C25.5025 20.2519 23.7525 19.2519 20.2525 18.8353C17.7525 18.5019 17.2525 17.8353 17.2525 16.6685C17.2525 15.5017 18.0859 14.7519 19.7525 14.7519C21.2525 14.7519 22.0859 15.2519 22.5025 16.5019C22.5859 16.7519 22.8359 16.9185 23.0859 16.9185H24.4191C24.7525 16.9185 25.0025 16.6685 25.0025 16.3353V16.2519C24.6691 14.4185 23.1691 13.0019 21.2525 12.8353V10.8353C21.2525 10.5019 21.0025 10.2519 20.5859 10.1685H19.3359C19.0025 10.1685 18.7525 10.4185 18.6691 10.8353V12.7519C16.1691 13.0853 14.5859 14.7519 14.5859 16.8353C14.5859 19.5853 16.2525 20.6685 19.7525 21.0853C22.0859 21.5019 22.8359 22.0019 22.8359 23.3353C22.8359 24.6687 21.6691 25.5853 20.0859 25.5853C17.9191 25.5853 17.1691 24.6685 16.9191 23.4185C16.8359 23.0853 16.5859 22.9185 16.3359 22.9185H14.9191C14.5859 22.9185 14.3359 23.1685 14.3359 23.5019V23.5853C14.6691 25.6685 16.0025 27.1685 18.7525 27.5853V29.5853C18.7525 29.9185 19.0025 30.1685 19.4191 30.2519H20.6691C21.0025 30.2519 21.2525 30.0019 21.3359 29.5853V27.5853C23.8359 27.1685 25.5025 25.4185 25.5025 23.1685Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.33014 15.9157C5.91334 22.3325 9.24674 29.5825 15.7467 31.9157C15.9967 32.0825 16.2467 32.4157 16.2467 32.6657V33.8325C16.2467 33.9991 16.2467 34.0825 16.1633 34.1657C16.0801 34.4991 15.7467 34.6657 15.4133 34.4991C10.7467 32.9991 7.16334 29.4157 5.66334 24.7491C3.16334 16.8325 7.49674 8.41572 15.4133 5.91572C15.4967 5.83252 15.6633 5.83252 15.7467 5.83252C16.0801 5.91572 16.2467 6.16572 16.2467 6.49912V7.66572C16.2467 8.08252 16.0801 8.33252 15.7467 8.49912C12.3301 9.74912 9.58014 12.4157 8.33014 15.9157ZM23.8285 6.24836C23.9117 5.91496 24.2451 5.74836 24.5785 5.91496C29.1617 7.41496 32.8285 10.9984 34.3285 15.7484C36.8285 23.665 32.4951 32.0818 24.5785 34.5818C24.4951 34.665 24.3285 34.665 24.2451 34.665C23.9117 34.5818 23.7451 34.3318 23.7451 33.9984V32.8318C23.7451 32.415 23.9117 32.165 24.2451 31.9984C27.6617 30.7484 30.4117 28.0818 31.6617 24.5818C34.0785 18.165 30.7451 10.915 24.2451 8.58176C23.9951 8.41496 23.7451 8.08176 23.7451 7.74836V6.58176C23.7451 6.41496 23.7451 6.33176 23.8285 6.24836Z" fill="white" />
                        </svg>
                    </div>
                    <div className="flex lg:py-3.5 py-2 w-full justify-between px-2.5 lg:px-4.5 lg:rounded-[19px] rounded-[10px] items-center bg-linear-to-t from-[#0A0A0A] to-[#1C1C1C] border border-[#272626]" style={{ boxShadow: "0px 3.25px 4.71px 0px rgba(0, 0, 0, 0.21)" }}>
                        <div className="flex flex-col gap-1">
                            <span className="lg:text-lg text-[10px] font-semibold leading-[140%] text-[#F3F3F3]">USDC</span>
                            <span className="lg:text-sm text-[8px] leading-[140%] text-[#CFCECE]">USD coin</span>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                            <div className="flex items-baseline gap-2">
                                <span className="lg:text-sm text-[8px] leading-[140%] text-[#E0E0E0]">Price:</span>
                                <span className="lg:text-lg text-[10px] font-semibold leading-[140%] text-[#F3F3F3]">
                                    {loading ? "—" : `${formatPrice(usdcData.price)} $`}
                                </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="lg:text-sm text-[8px] leading-[140%] text-[#E0E0E0]">24h Change:</span>
                                <span
                                    className={`lg:text-lg text-[10px] font-semibold leading-[140%] ${
                                        usdcData.change24h != null
                                            ? usdcData.change24h >= 0
                                                ? "text-[#4ADE80]"
                                                : "text-[#F87171]"
                                            : "text-[#F3F3F3]"
                                    }`}
                                >
                                    {loading ? "—" : formatChange(usdcData.change24h)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
