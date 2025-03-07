import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export const ToggleTheme = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch in Next.js

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="lg"
      variant="ghost"
      className={`relative px-4 transition-all duration-300 flex items-center gap-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Show Sun when Dark Mode is Active */}
      {theme === 'dark' ? (
        !isHovered ? (
          <Moon className="size-5  transition-transform duration-300 scale-110" />
        ) : (
          <Sun className="size-5  transition-opacity duration-300" />
        )
      ) : // Show Moon when Light Mode is Active
      !isHovered ? (
        <Sun className="size-5  transition-transform duration-300 scale-110" />
      ) : (
        <Moon className="size-5  transition-opacity duration-300" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
