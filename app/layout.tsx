import type { Metadata } from 'next';

import './globals.css';
import { SettingsProvider } from '@/contexts/SettingsContext';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  Fira_Code,
  IBM_Plex_Mono,
  Inconsolata,
  Inter,
  JetBrains_Mono,
  Source_Code_Pro,
} from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});
export const metadata: Metadata = {
  title: 'Code Share',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main
          id='main'
          className={clsx(
            'h-screen flex items-center justify-center flex-col',
            inter.variable,
            firaCode.variable,
            jetBrainsMono.variable,
            inconsolata.variable,
            // sourceCodePro.variable,
            // ibmPlexMono.variable,
            'font-sans'
          )}
        >
          <SettingsProvider>{children}</SettingsProvider>
        </main>
      </body>
    </html>
  );
}
