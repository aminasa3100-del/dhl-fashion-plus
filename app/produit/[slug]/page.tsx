import Link from 'next/link';
import { products } from '@/lib/data';

export default function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return <main className="container-shell py-10"><h1 className="text-3xl font-black text-brand-800">المنتج غير موجود</h1></main>;
  }

  return (
    <main className="container-shell py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <img src={product.images[0]} alt={product.name} className="h-[600px] w-full rounded-[32px] object-cover shadow-soft" />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-bold text-brand-700">{product.category}</p>
            <h1 className="text-3xl font-black text-brand-800">{product.name}</h1>
          </div>
          <p className="text-lg text-stone-600">{product.description}</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-brand-700">{product.price.toLocaleString()} دج</span>
            {product.compareAtPrice && <span className="text-lg text-stone-400 line-through">{product.compareAtPrice.toLocaleString()} دج</span>}
          </div>
          <div className="space-y-2 text-sm text-stone-600">
            <p>الألوان: {product.colors.join('، ')}</p>
            <p>المقاسات: {product.sizes.join('، ')}</p>
            <p>المخزون: {product.stock} عنصر</p>
            <p>المادة: {product.material}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/panier" className="rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white">إضافة إلى السلة</Link>
            <Link href="/checkout" className="rounded-full border border-brand-700 px-5 py-3 text-sm font-bold text-brand-700">إتمام الطلب</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
