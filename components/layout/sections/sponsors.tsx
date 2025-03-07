'use client';

import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface Sponsor {
  name: string;
  logoLight: string;
  logoDark: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
  {
    name: 'LiveChat',
    logoLight: '/livechat_logo_light.svg',
    logoDark: '/livechat_logo_dark.svg',
  },
];

export const SponsorsSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="sponsors"
      className="max-w-[75%] mx-auto pb-24 sm:pb-32 text-center mt-8"
    >
      <h2 className="text-lg md:text-xl mb-6">Our Partners</h2>
      <Marquee
        className="gap-[3rem]"
        fade
        innerClassName="gap-[3rem]"
        pauseOnHover
      >
        {sponsors.map((sponsor) => {
          const logoSrc =
            theme === 'dark' ? sponsor.logoLight : sponsor.logoDark;
          return (
            <div
              key={sponsor.name}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={'/partners' + logoSrc}
                alt={`${sponsor.name} logo`}
                width={150}
                height={150}
              />
              {/* <span className="mt-2 text-xl font-medium">{sponsor.name}</span> */}
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};
