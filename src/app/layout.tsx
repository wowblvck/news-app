import clsx from 'clsx';
import type { Metadata } from 'next';
import React from 'react';
import { roboto, inter, montserrat } from '@/app/fonts';
import { DateAndCurrencyInfo } from '@/widgets/date-and-currency';
import { LayoutFooter } from '@/widgets/layout-footer';
import { LayoutHeader } from '@/widgets/layout-header';
import { BaseLayout } from '@/widgets/layouts';
import './styles/index.scss';

export const metadata: Metadata = {
  title: 'Лента',
  description: 'Новости страны',
  viewport: {
    initialScale: 1,
    width: 'device-width',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={clsx(roboto.variable, inter.variable, montserrat.variable)}>
      <body className={'page'}>
        <BaseLayout
          headerSlot={<LayoutHeader widgetSlot={<DateAndCurrencyInfo />} />}
          footerSlot={<LayoutFooter />}
        >
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
