import BehaviorSection from '@/components/landing/sections/BehaviorSection';
import FAQSection from '@/components/landing/sections/FAQSection';
import FeaturesSection from '@/components/landing/sections/FeaturesSection';
import HowItWorksSection from '@/components/landing/sections/HowItWorksSection';
import MainSection from '@/components/landing/sections/MainSection';
import PatternsSection from '@/components/landing/sections/PatternsSection';
import RealUseSection from '@/components/landing/sections/RealUseSection';
import RoadmapSection from '@/components/landing/sections/RoadmapSection';
import TRCASection from '@/components/landing/sections/TRCASection';
import UtilitySection from '@/components/landing/sections/UtilitySection';
import Footer from '@/components/landing/layout/Footer';
import Header from '@/components/landing/layout/Header';
import TopText from '@/components/landing/layout/TopText';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { props } = usePage();

    return (
        <>
            <Head title="Tracea" />
            <TopText text={props.settings.text} />
            <Header twitterUrl={props.settings?.twitter} />
            <div className="h-[122px] 1395:block hidden" aria-hidden />
            <div className="h-[56px] 1395:hidden" aria-hidden />
            <MainSection />
            <div className="flex flex-col w-full 1395:px-0 px-5 items-center">
                
                <UtilitySection />
                <FeaturesSection />
                <HowItWorksSection />
                <BehaviorSection />
                <PatternsSection />
                <TRCASection />
                <RealUseSection />
                <RoadmapSection />
                <FAQSection />
                
            </div>
            <Footer twitter={props.settings?.twitter} />
        </>
    );
}
