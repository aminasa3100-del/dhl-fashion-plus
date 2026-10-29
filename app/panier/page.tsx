'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart-provider';
import { products } from '@/lib/data';

export default function CartPage() {
  const { items, subtotal, total, updateQty, removeItem } = useCart();

  return (
    <main className="container-shell py-10">
      <h1 className="mb-8 text-3xl font-black text-brand-800">سلة المشتريات</h1>
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-600 shadow-soft">
              السلة فارغة حالياً، يمكنك إضافة منتجات من قائمة المتجر.
            </div>
          ) : items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) return null;
            return (
              <div key={`${item.productId}-${item.size}-${item.color}`} className="flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white p-4 shadow-soft sm:flex-row">
                <img src={product.images[0]} alt={product.name} className="h-28 w-28 rounded-2xl object-cover" />
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg font-bold text-brand-800">{product.name}</h2>
                    <button onClick={() => removeItem(product.id)} className="text-sm text-red-600">حذف</button>
                  </div>
                  <p className="text-sm text-stone-600">اللون: {item.color} • المقاس: {item.size}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-2 py-1">
                      <button onClick={() => updateQty(product.id, item.quantity - 1)} className="h-6 w-6 text-lg">−</button>
                      <span className="min-w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQty(product.id, item.quantity + 1)} className="h-6 w-6 text-lg">＋</button>
                    </div>
                    <span className="text-xl font-black text-brand-700">{(product.price * item.quantity).toLocaleString()} دج</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
          <h2 className="mb-4 text-2xl font-black text-brand-800">ملخص الطلب</h2>
          <div className="space-y-3 text-sm text-stone-600">
            <div className="flex items-center justify-between"><span>المجموع</span><span>{subtotal.toLocaleString()} دج</span></div>
            <div className="flex items-center justify-between"><span>التوصيل</span><span>{subtotal >= 15000 ? 'مجاني' : '700 دج'}</span></div>
            <div className="flex items-center justify-between border-t border-stone-200 pt-3 text-lg font-black text-brand-800"><span>الإجمالي</span><span>{total.toLocaleString()} دج</span></div>
          </div>
          <Link href="/checkout" className="mt-6 block rounded-full bg-brand-700 px-5 py-3 text-center text-sm font-bold text-white">إتمام الطلب</Link>
        </aside>
      </div>
    </main>
  );
}
