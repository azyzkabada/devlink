import { BenefitsSection } from '@/components/layout/sections/benefits';
import { FAQSection } from '@/components/layout/sections/faq';
import { ServicesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import AnimatedLogosHero from '@/components/layout/sections/hero';
// import { HeroSection } from '@/components/layout/sections/hero';
import GoogleMapStatic from '@/components/layout/sections/location';
// import { ServicesSection } from '@/components/layout/sections/services';
import { TestimonialSection } from '@/components/layout/sections/testimonial';

export const metadata = {
  title: 'Devlink - Empowering Brands & Clients',
  description:
    'Devlink provides top-tier branding and client management solutions.',
  openGraph: {
    type: 'website',
    url: 'https://devlinksolutions.ai',
    title: 'Devlink - Empowering Brands & Clients',
    description:
      'Enhancing brand identity and optimizing customer relationships with tailored strategies.',
    images: [
      {
        url: 'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/devlink.jpg', // Remplacez par l'image officielle
        width: 1200,
        height: 630,
        alt: 'Devlink - Branding & Client Management Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://devlinksolutions.ai', // Remplacez par l'URL officielle
    title: 'Devlink - Empowering Brands & Clients',
    description:
      'Enhancing brand identity and optimizing customer relationships with tailored strategies.',
    images: [
      'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/devlink.jpg', // Remplacez par l'image officielle
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
