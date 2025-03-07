'use client';
import { Menu, MessageSquareHeart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { NavigationMenu } from '../ui/navigation-menu';
import { Separator } from '../ui/separator';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

import NavItem from '@/components/layout/NavItem';
import { ToggleTheme } from './toogle-theme';

const routeList = [
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex items-center justify-between p-2.5 bg-background/80 backdrop-blur-md ">
      <Link
        href="/"
        className="flex items-center justify-center text-lg font-bold gap-1"
      >
        <Image
          src="/LogoDark.svg"
          alt="Logo sombre"
          width={160}
          height={100}
          className="dark:block hidden"
        />
        <Image
          src="/LogoLIGHT.svg"
          alt="Logo clair"
          width={160}
          height={100}
          className="dark:hidden block"
        />
        <span className="sr-only">Devlink Solutions</span>
      </Link>

      {/* Mobile Navigation */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="p-1">
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer size-5 lg:hidden"
              />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-background/80 backdrop-blur-md border-r border-primary/10"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="mb-6 ml-4 pt-2">
                <SheetTitle className="flex items-center">
                  <Image
                    src="/LogoDark.svg"
                    alt="Logo sombre"
                    width={160}
                    height={100}
                    className="dark:block hidden"
                  />
                  <Image
                    src="/LogoLIGHT.svg"
                    alt="Logo clair"
                    width={160}
                    height={100}
                    className="dark:hidden block"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 px-2 mt-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    className="justify-start text-base font-medium py-5"
                  >
                    <NavItem href={href}>{label}</NavItem>
                  </Button>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="flex items-center gap-2 ml-4"
                >
                  <Link
                    href="https://www.linkedin.com/company/devlinksolutions/"
                    target="_blank"
                  >
                    <MessageSquareHeart className="size-4" />
                    <span>Get a Free Consultation</span>
                  </Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start pb-6">
              <Separator className="mb-4 bg-black dark:bg-primary opacity-10 " />
              <div className="flex items-center justify-between w-full px-4 gap-3">
                {/* <ToggleTheme /> */}
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto">
        {/* <NavigationMenuList className="flex items-center space-x-4"> */}
        {routeList.map(({ href, label }) => (
          <Button
            key={href}
            onClick={() => setIsOpen(false)}
            variant="ghost"
            className="justify-start text-base font-medium py-5 hover:bg-transparent"
          >
            <NavItem href={href}>{label}</NavItem>
          </Button>
        ))}
      </NavigationMenu>

      <div className="hidden lg:flex">
        {/* <ToggleTheme /> */}
        <Button asChild size="lg" className="flex items-center gap-2 ml-4">
          <Link
            href="https://www.linkedin.com/company/devlinksolutions/"
            target="_blank"
          >
            <MessageSquareHeart className="size-5" />
            <span>Get a Free Consultation</span>
          </Link>
        </Button>
      </div>
    </header>
  );
};
