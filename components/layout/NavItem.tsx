import { cn } from '@/lib/utils'; // Assurez-vous d'avoir une fonction cn pour gérer les classes dynamiquement.
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative px-3 py-2 transition-all duration-200 group inline-flex items-center',
      )}
    >
      {/* Texte du menu */}
      <span className="relative z-10">{children}</span>

      {/* Effet de soulignement individuel */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
};

export default NavItem;
