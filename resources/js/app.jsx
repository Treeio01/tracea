import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PRIVY_APP_ID = "cmlrwk5zs00gs0cl7rjpln4sw";

const PRIVY_CONFIG = {
    appearance: {
        accentColor: '#56e6b9',
        theme: '#222224',
        showWalletLoginFirst: true,
        logo: 'https://image2url.com/r2/default/images/1771411558848-80005f0d-3ab5-4865-a641-bce6c3dea212.png',
        walletChainType: 'solana-only',
        walletList: [
            "detected_ethereum_wallets",
      "detected_solana_wallets",
      "metamask",
      "phantom",
      "coinbase_wallet",
      "base_account",
      "rainbow",
      "solflare",
      "backpack",
      "okx_wallet",
      "wallet_connect"
        ],
    },
    loginMethods: ['wallet'],
    fundingMethodConfig: {
        moonpay: { useSandbox: true },
    },
    embeddedWallets: {
        showWalletUIs: true,
        solana: { createOnLogin: 'users-without-wallets' },
    },
    mfa: { noPromptOnMfaRequired: false },
    externalWallets: {
        solana: { connectors: toSolanaWalletConnectors() },
    },
};

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx', { eager: false })
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <PrivyProvider appId={PRIVY_APP_ID} config={PRIVY_CONFIG}>
                <App {...props} />
            </PrivyProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
