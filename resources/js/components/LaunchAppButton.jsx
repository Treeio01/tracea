import { router } from "@inertiajs/react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useCallback, useRef, useState } from "react";

export default function LaunchAppButton({ className = "", children, disabled }) {
    const { ready, authenticated, login, user } = usePrivy();
    const { wallets } = useWallets();
    const [connecting, setConnecting] = useState(false);
    const loginInitiatedRef = useRef(false);
    const syncedRef = useRef(false);

    const syncWallet = useCallback(
        async (opts) => {
            if (!ready || !authenticated || !user) return;
            if (syncedRef.current) return;
            syncedRef.current = true;
            setConnecting(true);

            const primaryWallet = wallets?.[0];
            const linkedAccounts = user.linkedAccounts ?? user.linked_accounts ?? [];
            const linkedSolWallet = linkedAccounts.find((a) => {
                if (a?.type !== "wallet") return false;
                const chain = (a.chainType ?? a.chain_type ?? "").toLowerCase();
                return chain === "" || chain === "solana";
            });

            const walletAddress = primaryWallet?.address ?? linkedSolWallet?.address;
            if (!walletAddress) {
                syncedRef.current = false;
                setConnecting(false);
                loginInitiatedRef.current = false;
                return;
            }

            router.post("/user/register", { address: walletAddress }, {
                onSuccess: () => {
                    if (opts?.redirect) router.visit("/dashboard");
                },
                onError: (err) => console.error("Registration failed", err),
                onFinish: () => {
                    setConnecting(false);
                    loginInitiatedRef.current = false;
                    syncedRef.current = false;
                },
            });
        },
        [authenticated, ready, user, wallets]
    );

    const handleLaunch = useCallback(() => {
        if (!ready) return;
        if (authenticated) {
            loginInitiatedRef.current = true;
            void syncWallet({ redirect: true });
            return;
        }
        loginInitiatedRef.current = true;
        setConnecting(true);
        try {
            login();
        } catch {
            loginInitiatedRef.current = false;
            setConnecting(false);
        }
    }, [authenticated, login, ready, syncWallet]);

    const isDisabled = disabled || !ready || connecting;

    return (
        <button
            type="button"
            className={`${className} hover:opacity-90 transition-opacity active:scale-[0.98] transition-transform disabled:pointer-events-none`.trim()}
            onClick={handleLaunch}
            disabled={isDisabled}
        >
            {connecting ? (
                <span className="opacity-80">Connecting...</span>
            ) : (
                children
            )}
        </button>
    );
}
