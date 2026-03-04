import BehaviorSection from '@/components/landing/BehaviorSection';
import FAQSection from '@/components/landing/FAQSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import MainSection from '@/components/landing/MainSection';
import PatternsSection from '@/components/landing/PatternsSection';
import RealUseSection from '@/components/landing/RealUseSection';
import RoadmapSection from '@/components/landing/RoadmapSection';
import TopText from '@/components/landing/TopText';
import TRCASection from '@/components/landing/TRCASection';
import UtilitySection from '@/components/landing/UtilitySection';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { props } = usePage();

    return (
        <>
            <Head title="Tracea" />
            <TopText text={props.settings.text}/>
            <Header/>
            <MainSection/>
            <UtilitySection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <BehaviorSection/>
            <PatternsSection/>
            <TRCASection/>
            <RealUseSection/>
            <RoadmapSection/>
            <FAQSection/>
           <Footer/>
        </>
    );
}
