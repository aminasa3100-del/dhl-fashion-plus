import Link from 'next/link';
import { products } from '@/lib/data';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryProducts = products.filter((product) => product.category === params.slug);

  return (
    <main className="container-shell py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-black text-brand-800">{params.slug}</h1>
        <Link href="/recherche" className="text-sm font-bold text-brand-700">البحث والتصفية</Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categoryProducts.map((product) => (
          <article key={product.id} className="rounded-3xl border border-stone-200 bg-white p-4 shadow-soft">
            <img src={product.images[0]} alt={product.name} className="h-64 w-full rounded-2xl object-cover" />
            <div className="mt-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-brand-800">{product.name}</h2>
              <span className="text-sm text-stone-500">{product.stock} قطعة</span>
            </div>
            <p className="mt-2 text-sm text-stone-600">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-black text-brand-700">{product.price.toLocaleString()} دج</span>
              <Link href={`/produit/${product.slug}`} className="rounded-full bg-brand-700 px-4 py-2 text-sm font-bold text-white">تفاصيل</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
