import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
const inter = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shadcn - Landing template',
  description: 'Landing template from Shadcn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
