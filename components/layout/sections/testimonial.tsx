'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Michael Smith',
    userName: 'Entrepreneur',
    comment:
      'The Devlink team helped us optimize our client management and boost customer engagement like never before!',
    rating: 5.0,
  },
  {
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Sophia Collins',
    userName: 'Marketing Director',
    comment:
      "Thanks to Devlink's expertise, our brand identity has never been stronger. We feel truly supported by their community.",
    rating: 4.9,
  },
  {
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Adam Johnson',
    userName: 'CTO, Tech Startup',
    comment:
      'Their digital solutions completely transformed the way we handle customer support. Highly recommend!',
    rating: 5.0,
  },
  {
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    name: 'Ethan Parker',
    userName: 'Small Business Owner',
    comment:
      "The Devlink community is amazing. I've met great professionals and received outstanding support for my business.",
    rating: 5.0,
  },
  {
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    name: 'Ava Mitchell',
    userName: 'Freelance Designer',
    comment:
      'Their branding strategy helped me stand out. Plus, the Devlink network is full of like-minded professionals!',
    rating: 4.8,
  },
  {
    image: 'https://randomuser.me/api/portraits/women/27.jpg',
    name: 'Isabella Reed',
    userName: 'E-commerce Manager',
    comment:
      "I've never worked with a team so dedicated to customer satisfaction. Their service is truly premium!",
    rating: 4.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider uppercase">
          Our Commitment
        </h2>

        <h2 className="text-3xl md:text-5xl text-center font-bold mb-6">
          Excellence in Service & A Thriving Community
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10">
          Devlink is more than just a service provider – we are a network of
          professionals dedicated to delivering excellence and fostering strong
          business relationships.
        </h3>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-[85%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card transition-all hover:shadow-lg">
                <CardContent className="pt-6 pb-4 text-center">
                  <div className="flex justify-center gap-1 pb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.round(review.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{`"${review.comment}"`}</p>
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
