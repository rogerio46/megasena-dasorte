import { useState } from 'react';
import { NotificationBar } from './components/NotificationBar';
import { HeroSection } from './components/HeroSection';
import { InteractivePwaDemo } from './components/InteractivePwaDemo';
import { TwoPillarsSection } from './components/TwoPillarsSection';
import { ComparisonTable } from './components/ComparisonTable';
import { TikTokStrategySection } from './components/TikTokStrategySection';
import { RoiCalculator } from './components/RoiCalculator';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingCheckoutSection } from './components/PricingCheckoutSection';
import { WarrantySection } from './components/WarrantySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { CheckoutModal } from './components/CheckoutModal';
import { ProducerSettingsModal } from './components/ProducerSettingsModal';
import { DEFAULT_PRODUCER_SETTINGS } from './data/productData';
import { ProducerSettings } from './types';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [producerSettings, setProducerSettings] = useState<ProducerSettings>(() => {
    const saved = localStorage.getItem('mega_analise_producer_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.pricePix === 49.9) {
          parsed.pricePix = 89.9;
        }
        return { ...DEFAULT_PRODUCER_SETTINGS, ...parsed };
      } catch {
        return DEFAULT_PRODUCER_SETTINGS;
      }
    }
    return DEFAULT_PRODUCER_SETTINGS;
  });

  const handleSaveSettings = (newSettings: ProducerSettings) => {
    setProducerSettings(newSettings);
    localStorage.setItem('mega_analise_producer_settings', JSON.stringify(newSettings));
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080c16] text-[#e2e8f0] flex flex-col font-sans selection:bg-emerald-500 selection:text-zinc-950">
      {/* Top Urgent Countdown Bar */}
      <NotificationBar onCtaClick={handleOpenCheckout} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onCtaClick={handleOpenCheckout} />
        <InteractivePwaDemo onBuyClick={handleOpenCheckout} />
        <TwoPillarsSection onBuyClick={handleOpenCheckout} />
        <ComparisonTable onBuyClick={handleOpenCheckout} />
        <TikTokStrategySection />
        <RoiCalculator onBuyClick={handleOpenCheckout} />
        <BonusesSection onBuyClick={handleOpenCheckout} />
        <TestimonialsSection />
        <PricingCheckoutSection onBuyClick={handleOpenCheckout} />
        <WarrantySection onBuyClick={handleOpenCheckout} />
        <FaqSection />
      </main>

      {/* Institutional & Legal Footer */}
      <Footer 
        onOpenSettings={() => setIsSettingsOpen(true)} 
        supportWhatsapp={producerSettings.supportWhatsapp} 
      />

      {/* Mobile Persistent Floating CTA */}
      <StickyMobileCta 
        onBuyClick={handleOpenCheckout} 
        pricePix={producerSettings.pricePix} 
      />

      {/* Kiwify Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        producerSettings={producerSettings}
      />

      {/* Producer Configuration & TikTok Toolkit Modal */}
      <ProducerSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={producerSettings}
        onSaveSettings={handleSaveSettings}
      />
    </div>
  );
}
