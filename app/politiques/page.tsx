export default function PoliciesPage() {
  return (
    <main className="container-shell py-10">
      <div className="space-y-8">
        <section id="delivery" className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
          <h1 className="text-3xl font-black text-brand-800">سياسة التوصيل</h1>
          <p className="mt-4 leading-8 text-stone-600">تُحدد أسعار التوصيل حسب الولاية والبلدية، ويُستبعد أي طلب لا يحدد السعر أو المدينة. يتم الدفع عند الاستلام بعد تأكيد الطلب.</p>
        </section>
        <section id="returns" className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-brand-800">سياسة الاستبدال</h2>
          <p className="mt-4 leading-8 text-stone-600">يُفحص المنتج عند الاستلام، وفي حال وجود خلل في المنتج أو خطأ في الطلب، يمكن الاستبدال خلال 24 ساعة حسب الشروط المعلنة.</p>
        </section>
        <section id="privacy" className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-brand-800">سياسة الخصوصية</h2>
          <p className="mt-4 leading-8 text-stone-600">يتم حفظ بيانات العملاء بشكل آمن داخل قاعدة بيانات Supabase، ولا تُستخدم إلا لتجهيز الطلبات وتقديم الخدمة، مع الاحتفاظ بالحق في تحديث هذه السياسات.</p>
        </section>
      </div>
    </main>
  );
}
