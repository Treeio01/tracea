import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';
import { initScrollAnimationsSystem, runMountAnimations } from './utils/scrollAnimations';

const PRIVY_APP_ID = "cmmaqdl0e021v0cl4uxkeeko5";

const solanaConnectors = toSolanaWalletConnectors();

const PRIVY_CONFIG = {
    appearance: {
        "accentColor": "#3ea0eb",
        "theme": "#FFFFFF",
        "showWalletLoginFirst": false,
        "logo": "https://i.imgur.com/KJ32KsP.png",
        "walletChainType": "solana-only",
        "walletList": [
            "detected_solana_wallets",
            "phantom",
            "solflare",
            "backpack",
            "okx_wallet"
        ]
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
        solana: { connectors: solanaConnectors },
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
        initScrollAnimationsSystem();
        setTimeout(() => runMountAnimations(), 50);
    },
    progress: {
        color: '#4B5563',
    },
});
