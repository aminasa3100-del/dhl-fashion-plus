import './globals.css';
import type { Metadata } from 'next';
import { ContactBar, Footer, Header } from '@/components/site-shell';
import { PromoStrip } from '@/components/site-shell';
import { CartProvider } from '@/components/cart-provider';

export const metadata: Metadata = {
  title: 'DHL FASHION+ | متجر الملابس النسائية',
  description: 'متجر DHL FASHION+ لبيع الملابس النسائية في الجزائر، مع الدفع عند الاستلام والنظام التفاعلي للتسوق عبر الإنترنت.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-cream text-brand-900 antialiased">
        <CartProvider>
          <ContactBar />
          <Header />
          <PromoStrip />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
