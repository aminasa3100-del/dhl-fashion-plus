import Link from 'next/link';
import { products } from '@/lib/data';

export default function SearchPage() {
  return (
    <main className="container-shell py-10">
      <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
        <h1 className="text-3xl font-black text-brand-800">البحث والفلاتر</h1>
        <div className="mt-4 flex flex-col gap-3 lg:flex-row">
          <input className="flex-1 rounded-full border border-stone-300 bg-stone-50 px-4 py-3 text-right outline-none focus:border-brand-500" placeholder="ابحث عن المنتجات..." />
          <select className="rounded-full border border-stone-300 bg-stone-50 px-4 py-3 text-right outline-none focus:border-brand-500">
            <option value="">كل التصنيفات</option>
            <option value="robes">الفساتين</option>
            <option value="jupes">الجينز</option>
            <option value="tops">الأعلى</option>
            <option value="accessories">الإكسسوارات</option>
          </select>
          <select className="rounded-full border border-stone-300 bg-stone-50 px-4 py-3 text-right outline-none focus:border-brand-500">
            <option value="">ترتيب</option>
            <option value="asc">السعر: الأقل إلى الأعلى</option>
            <option value="desc">السعر: الأعلى إلى الأقل</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="rounded-3xl border border-stone-200 bg-white p-4 shadow-soft">
            <img src={product.images[0]} alt={product.name} className="h-64 w-full rounded-2xl object-cover" />
            <h2 className="mt-4 text-lg font-bold text-brand-800">{product.name}</h2>
            <p className="mt-2 text-sm text-stone-600">{product.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xl font-black text-brand-700">{product.price.toLocaleString()} دج</span>
              <Link href={`/produit/${product.slug}`} className="rounded-full bg-brand-700 px-4 py-2 text-sm font-bold text-white">تفاصيل</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
