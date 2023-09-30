import { ReactNode } from 'react';

import { Header, Footer, AcknowledgementOfCountry } from '@/components';

import './globals.css';

export const metadata = {
  title: 'Best Choice Care',
  description: 'Aged &amp; Disability Support Services',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <AcknowledgementOfCountry />
        <Footer />
      </body>
    </html>
  )
};
