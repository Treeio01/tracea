import { lazy, Suspense } from 'react';
import MainSection from '@/components/landing/sections/MainSection';
import Footer from '@/components/landing/layout/Footer';
import Header from '@/components/landing/layout/Header';
import TopText from '@/components/landing/layout/TopText';
import { Head, usePage } from '@inertiajs/react';

const UtilitySection = lazy(() => import('@/components/landing/sections/UtilitySection'));
const FeaturesSection = lazy(() => import('@/components/landing/sections/FeaturesSection'));
const HowItWorksSection = lazy(() => import('@/components/landing/sections/HowItWorksSection'));
const BehaviorSection = lazy(() => import('@/components/landing/sections/BehaviorSection'));
const PatternsSection = lazy(() => import('@/components/landing/sections/PatternsSection'));
const TRCASection = lazy(() => import('@/components/landing/sections/TRCASection'));
const RealUseSection = lazy(() => import('@/components/landing/sections/RealUseSection'));
const RoadmapSection = lazy(() => import('@/components/landing/sections/RoadmapSection'));
const FAQSection = lazy(() => import('@/components/landing/sections/FAQSection'));

export default function Home() {
    const { props } = usePage();

    return (
        <>
            <Head title="Tracea" />
            <TopText text={props.settings.text} />
            <Header twitterUrl={props.settings?.twitter} />
            <div className="h-[122px] 1395:block hidden" aria-hidden />
            <MainSection />
            <div className="flex flex-col w-full 1395:px-0 px-5 items-center">
                <Suspense fallback={<div className="min-h-screen" />}>
                    <UtilitySection />
                    <FeaturesSection />
                    <HowItWorksSection />
                    <BehaviorSection />
                    <PatternsSection />
                    <TRCASection />
                    <RealUseSection />
                    <RoadmapSection />
                    <FAQSection />
                </Suspense>
            </div>
            <Footer twitter={props.settings?.twitter} />
        </>
    );
}
