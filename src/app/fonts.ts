import { Roboto, Inter, Montserrat } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const inter = Inter({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const montserrat = Montserrat({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
