'use client';
import { ChevronsDown, Github, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Separator } from '../ui/separator';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { ToggleTheme } from './toogle-theme';

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: '#testimonials',
    label: 'Testimonials',
  },
  {
    href: '#team',
    label: 'Team',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
];

const featureList: FeatureProps[] = [
  {
    title: 'Showcase Your Value ',
    description: 'Highlight how your product solves user problems.',
  },
  {
    title: 'Build Trust',
    description:
      'Leverages social proof elements to establish trust and credibility.',
  },
  {
    title: 'Capture Leads',
    description:
      'Make your lead capture form visually appealing and strategically.',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-2 bg-background/60 backdrop-blur-md">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ChevronsDown className="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 text-white" />
        Shadcn
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-background/80 backdrop-blur-md border-r border-primary/10"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="mb-6 ml-4 pt-2">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 text-white shadow-sm" />
                    <span className="text-xl font-bold">Shadcn</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* <div className="px-4 mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/40 rounded-full"></div>
              </div> */}

              <div className="flex flex-col gap-1 px-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base font-medium py-6 transition-all hover:pl-4 hover:bg-primary/5"
                  >
                    <Link href={href} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3 opacity-70"></div>
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>

              {/* <div className="mt-8 px-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <h3 className="font-medium mb-2 text-sm">Pro Tip</h3>
                  <p className="text-xs text-muted-foreground">
                    Customize this sidebar with your own branding and navigation
                    structure for a truly professional look.
                  </p>
                </div>
              </div> */}
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start pb-6">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between w-full px-4 gap-2">
                <ToggleTheme />
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link
                    href="https://github.com/nobruf/shadcn-landing-page.git"
                    target="_blank"
                  >
                    <Github className="size-4" />
                    <span className="text-xs">Linkedin</span>
                  </Link>
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
