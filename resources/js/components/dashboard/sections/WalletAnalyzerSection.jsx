import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import WalletIcon from "../icons/WalletIcon";

export default function WalletAnalyzerSection({ defaultAddress = "", onStatsLoaded }) {
    const loadingBlockRef = useRef(null);
    const [address, setAddress] = useState(defaultAddress);

    useEffect(() => {
        if (defaultAddress) setAddress(defaultAddress);
    }, [defaultAddress]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading && loadingBlockRef.current) {
            gsap.from(loadingBlockRef.current, {
                y: 16,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        }
    }, [loading]);
    const [error, setError] = useState(null);

    const handleAnalyze = useCallback(
        async (e) => {
            e?.preventDefault();
            const trimmed = address?.trim() ?? "";
            if (trimmed.length < 32 || trimmed.length > 44) {
                setError("Enter a valid Solana wallet address (32–44 characters)");
                return;
            }
            setError(null);
            setLoading(true);
            try {
                const { data } = await axios.post("/wallet/analyze", {
                    wallet_address: trimmed,
                });
                if (data?.success && data?.stats) {
                    onStatsLoaded?.(data.stats);
                } else {
                    setError(data?.message ?? "Analysis failed");
                }
            } catch (err) {
                const msg = err?.response?.data?.message ?? err?.message ?? "Analysis failed";
                setError(msg);
            } finally {
                setLoading(false);
            }
        },
        [address, onStatsLoaded]
    );

    return (
        <div className="flex flex-col lg:gap-[24px] gap-[12px] bg-[#FDFDFD] border-8 lg:rounded-[36px] rounded-[22px] border-white w-full lg:px-[40px] px-[22px] lg:pt-[30px] pt-[22px] lg:pb-[69px] pb-[22px]">
            <div className="flex lg:gap-[14px] gap-[6px] items-center">
                <WalletIcon />
                <span className="lg:text-[32px] text-[22px] font-semibold leading-[120%] text-[#262626]">Wallet</span>
            </div>
            <form onSubmit={handleAnalyze} className="flex flex-col gap-3">
                <div className="flex w-full gap-[10px] border border-[#EFEFEF] bg-white lg:pl-[30px] pl-[12px] lg:p-[10px] p-[4px] rounded-full">
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full text-[#262626] leading-[100%] lg:text-[16px] text-[8px] outline-none border-none placeholder:text-[#919191]"
                        placeholder="Enter Solana wallet address"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="lg:py-3.5 py-2 lg:px-7 flex justify-center items-center px-4 rounded-full border border-[#0485E7] bg-gradient-to-b from-[#73C2FF] to-[#3EA0EB] shadow-[inset_0_-1px_7.2px_0_rgba(0,0,0,0.09)_inset_0px_2px_2px_0px_#ADCCFF] disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                            boxShadow:
                                "inset 0px -1px 7.2px 0px rgba(0,0,0,0.09), inset 0px 2px 2px 0px #ADCCFF",
                        }}
                    >
                        <span className="text-white lg:text-[16px] text-[8px] font-semibold">
                            {loading ? "Analyzing..." : "Analyze"}
                        </span>
                    </button>
                </div>
                {error && (
                    <span className="text-sm text-red-600">{error}</span>
                )}
            </form>
            {loading && (
                <div
                    ref={loadingBlockRef}
                    className="flex w-full lg:p-[67px] p-[39px] justify-center relative bg-[#1A1A1A] border border-white rounded-[26px]"
                >
                    <img
                        src="/assets/img/dashboard-loading-light.svg"
                        className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2"
                        alt=""
                    />
                    <span className="text-white leading-[100%] lg:text-[16px] text-[8px] absolute lg:bottom-[22px] bottom-[12px] z-30 left-1/2 -translate-x-1/2">
                        Analyzing transaction history
                    </span>
                    <div className="flex p-[1px] z-50 bg-linear-to-b from-[#A6D8FF] to-[#3EA0EB] rounded-full">
                        <div className="flex items-center justify-center bg-linear-to-b from-[#3EA0EB] to-[#A6D8FF] rounded-full lg:py-[20px] py-[10px] lg:px-[45px] px-[22px]">
                            <span className="text-[#FAFAFA] lg:text-2xl text-sm leading-[100%]">Loading...</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
