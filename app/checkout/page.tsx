import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="container-shell py-10">
      <h1 className="mb-8 text-3xl font-black text-brand-800">نموذج الطلب</h1>
      <form className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="الاسم" />
            <input className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="اللقب" />
          </div>
          <input className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="الهاتف" />
          <div className="grid gap-4 sm:grid-cols-2">
            <select className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right">
              <option>اختر الولاية</option>
              <option>سطيف</option>
              <option>الجزائر العاصمة</option>
            </select>
            <select className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right">
              <option>اختر البلدية</option>
              <option>سطيف</option>
              <option>عين أرنب</option>
            </select>
          </div>
          <textarea className="min-h-[120px] w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="العنوان التفصيلي" />
          <select className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right">
            <option>طريقة التوصيل</option>
            <option value="home">توصيل إلى المنزل</option>
            <option value="pickup">استلام من المتجر</option>
          </select>
        </div>

        <aside className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
          <h2 className="mb-4 text-2xl font-black text-brand-800">ملخص الطلب</h2>
          <div className="space-y-3 text-sm text-stone-600">
            <div className="flex items-center justify-between"><span>المجموع</span><span>0 دج</span></div>
            <div className="flex items-center justify-between"><span>التوصيل</span><span>غير محدد</span></div>
            <div className="flex items-center justify-between border-t border-stone-200 pt-3 text-lg font-black text-brand-800"><span>الإجمالي</span><span>0 دج</span></div>
          </div>
          <button type="submit" className="mt-6 w-full rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white">تأكيد الطلب</button>
          <p className="mt-3 text-xs text-stone-500">يتم التحقق من المخزون والأسعار على الخادم قبل تأكيد الطلب في النسخة الكاملة المتصلة بـ Supabase.</p>
        </aside>
      </form>
    </main>
  );
}
