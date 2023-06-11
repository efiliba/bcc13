import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import { Layout } from '@/components/layout';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Best Choice Care',
  description: 'Aged &amp; Disability Support Services',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
};
