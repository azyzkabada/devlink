'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ContactAndLocation() {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      email: 'info@devlinksolution.ai',
      phone: '(123) 456-7890',
      role: 'Customer Support',
    },
    // {
    //   id: 2,
    //   name: 'Jane Smith',
    //   email: 'jane.smith@example.com',
    //   phone: '(987) 654-3210',
    //   role: 'Business Consultant',
    // },
    // {
    //   id: 3,
    //   name: 'Michael Lee',
    //   email: 'michael.lee@example.com',
    //   phone: '(555) 123-4567',
    //   role: 'Sales Manager',
    // },
  ];

  return (
    <section id="contact-location" className="container py-24 sm:py-32">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-lg text-primary tracking-wider uppercase mb-2">
          Contact & Location
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mt-4 max-w-xl mx-auto">
          Reach out to our team for inquiries, support, or business
          opportunities. Visit us at our headquarters.
        </p>
      </div>

      {/* Contacts Section */}
      <div className="flex justify-center gap-6 py-12 ">
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            className="text-center p-6 shadow-lg hover:shadow-xl transition-all"
          >
            {/* <CardHeader> */}
            {/* <CardTitle className="text-xl font-semibold">
                {contact.name}
              </CardTitle> */}
            {/* <CardDescription>{contact.role}</CardDescription> */}
            {/* </CardHeader> */}
            <CardContent className="space-y-2 text-2xl mt-3">
              <p className="text-foreground"> Send Us to :</p>
              <p className="text-muted-foreground">{contact.email}</p>
              {/* <p className="text-muted-foreground">{contact.phone}</p> */}
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-10 w-full max-w-3xl mx-auto" />

      {/* Location Section */}
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary uppercase tracking-wider mb-2">
          Our Location
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold">Visit Us</h2>
      </div>

      <Card className="w-full max-w-4xl mx-auto overflow-hidden">
        <CardHeader className="pb-0">
          <CardDescription>We're located in the heart of Dubai</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="w-full h-[400px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.966479916666!2d55.37110237370474!3d25.119348399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651c2438dc53%3A0xe6abcc1ea38a17f5!2sD1%20-%20Dubai%20Digital%20Park!5e0!3m2!1sfr!2stn!4v1741390438831!5m2!1sfr!2stn"
              className="w-full h-full rounded-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
