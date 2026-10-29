import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/site-shell';

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main className="bg-cream text-brand-900">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[32px] bg-gradient-to-l from-brand-100 via-white to-brand-50 p-6 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-bold text-brand-700">DHL FASHION+</p>
            <h1 className="text-4xl font-black leading-tight text-brand-900 md:text-5xl">أزياء نسائية عصرية تناسب أسلوبك اليومي</h1>
            <p className="mt-4 max-w-xl text-base text-stone-600">
              اكتشف مجموعة مختارة بعناية من الفساتين، الجاكيتات، البلوزات، والإكسسوارات مع خدمة توصيل داخل الجزائر وتوصيل سريع إلى مدينتك.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/recherche" className="rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-800">تسوق الآن</Link>
              <Link href="/categorie/robes" className="rounded-full border border-brand-700 px-5 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-50">استكشف التصنيفات</Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-white p-3 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
              alt="ملابس نسائية"
              className="h-full min-h-[420px] w-full rounded-[22px] object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-right shadow-lg backdrop-blur-sm">
              <p className="text-xs text-brand-700">خصم خاص</p>
              <p className="text-xl font-black text-brand-900">-25٪</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-brand-800">منتجات مميزة</h2>
          <Link href="/recherche" className="inline-flex items-center gap-2 text-sm font-bold text-brand-700">
            كل المنتجات <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
