import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const servicesList: ServiceProps[] = [
  {
    icon: 'Briefcase',
    title: 'Brand Strategy',
    description:
      'We help you define and refine your brand identity to make a lasting impact in your industry.',
  },
  {
    icon: 'Globe',
    title: 'Digital Marketing',
    description:
      'From SEO to social media campaigns, we craft marketing strategies that drive engagement and growth.',
  },
  // {
  //   icon: 'ShoppingCart',
  //   title: 'E-commerce Solutions',
  //   description:
  //     'We design and optimize online stores that convert visitors into loyal customers.',
  // },
  {
    icon: 'MonitorSmartphone',
    title: 'Web & Mobile Development',
    description:
      'We build high-performance websites and mobile apps tailored to your business needs.',
  },
  // {
  //   icon: 'Palette',
  //   title: 'Creative Design',
  //   description:
  //     'Our design team crafts visually stunning assets to enhance your brand identity and customer experience.',
  // },
  {
    icon: 'Megaphone',
    title: 'Advertising & Promotion',
    description:
      'We create data-driven ad campaigns to maximize reach and ROI across different platforms.',
  },
  {
    icon: 'Users',
    title: 'Client Management',
    description:
      'We provide efficient CRM solutions to streamline communication, enhance customer relationships, and increase retention.',
  },
  {
    icon: 'Headphones',
    title: 'Live Support',
    description:
      'Our 24/7 live support ensures your customers receive immediate assistance, improving satisfaction and loyalty.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider uppercase">
        Our Services
      </h2>

      <h2 className="text-3xl md:text-5xl text-center font-bold mb-6">
        Tailored Solutions for Your Business Growth
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10">
        We provide innovative and data-driven services to help your business
        thrive in a competitive market.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-primary/20 p-3 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={28}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl font-semibold">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
