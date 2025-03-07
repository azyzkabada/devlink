import { BenefitsSection } from '@/components/layout/sections/benefits';
import { FAQSection } from '@/components/layout/sections/faq';
import { ServicesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import AnimatedLogosHero from '@/components/layout/sections/hero';
// import { HeroSection } from '@/components/layout/sections/hero';
import GoogleMapStatic from '@/components/layout/sections/location';
// import { ServicesSection } from '@/components/layout/sections/services';
import { SponsorsSection } from '@/components/layout/sections/sponsors';
import { TestimonialSection } from '@/components/layout/sections/testimonial';

export const metadata = {
  title: 'Shadcn - Landing template',
  description: 'Free Shadcn landing page for developers',
  openGraph: {
    type: 'website',
    url: 'https://github.com/nobruf/shadcn-landing-page.git',
    title: 'Shadcn - Landing template',
    description: 'Free Shadcn landing page for developers',
    images: [
      {
        url: 'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg',
        width: 1200,
        height: 630,
        alt: 'Shadcn - Landing template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://github.com/nobruf/shadcn-landing-page.git',
    title: 'Shadcn - Landing template',
    description: 'Free Shadcn landing page for developers',
    images: [
      'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg',
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <AnimatedLogosHero />
      {/* <SponsorsSection /> */}
      <ServicesSection />
      {/* <FeaturesSection /> */}
      <BenefitsSection />
      <ServicesSection />
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      {/* <ContactSection /> */}
      <GoogleMapStatic />
      <FAQSection />
      <FooterSection />
    </>
  );
}
