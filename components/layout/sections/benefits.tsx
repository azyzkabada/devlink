import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: 'TrendingUp',
    title: 'Boost Your Brand',
    description:
      'Strengthen your brand identity with a strategic approach that builds trust and credibility among your audience.',
  },
  {
    icon: 'Users',
    title: 'Expand Your Reach',
    description:
      'Engage with a wider audience, generate more leads, and establish a strong market presence through targeted strategies.',
  },
  {
    icon: 'DollarSign',
    title: 'Increase Revenue',
    description:
      'Turn leads into loyal customers with optimized conversion tactics and data-driven marketing solutions.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovate & Experiment',
    description:
      'Test new ideas, explore market opportunities, and refine your approach for sustainable growth and success.',
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-16">
        {/* Intro Section */}
        <div>
          <h2 className="text-lg text-primary mb-2 uppercase tracking-wider">
            Why Choose Us?
          </h2>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            The Fast Track to Your Business Success
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Our solutions are designed to elevate your brand, increase customer
            engagement, and drive business growth. Discover how we can help you
            achieve measurable results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          {benefits.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={36}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-semibold transition-all duration-200 group-hover:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="mt-4 text-xl font-semibold">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
