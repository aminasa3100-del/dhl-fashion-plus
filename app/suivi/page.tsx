export default function OrderTrackingPage() {
  return (
    <main className="container-shell py-10">
      <div className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-brand-800">تتبع الطلب</h1>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="أدخل رقم الطلب" />
          <button className="w-full rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white">إظهار الحالة</button>
        </div>
        <div className="mt-8 rounded-2xl bg-brand-50 p-4 text-right text-sm text-brand-800">
          الحالة الحالية: تم استلام الطلب — تم تجهيز الطلب — في الطريق — تم التوصيل.
        </div>
      </div>
    </main>
  );
}
