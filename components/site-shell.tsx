import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Truck, Warehouse, MessageCircle, UserCheck } from 'lucide-react';

export function PromoStrip() {
  return (
    <section className="bg-gradient-to-r from-brand-50 to-brand-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-brand-800 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-bold">توصيل سريع في الجزائر</p>
          <p className="text-xs text-brand-700">الدفع عند الاستلام - الأسعار واضحة دون رسوم خفية</p>
        </div>
        <Link href="/recherche" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-2 text-sm font-bold text-white">
          تسوق الآن <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-4">
        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
          <Truck className="mb-3 h-8 w-8 text-brand-700" />
          <h3 className="mb-2 text-lg font-bold text-brand-800">توصيل للولايات الجزائرية</h3>
          <p className="text-sm text-stone-600">أسعار توصيل واضحة حسب الولاية والبلدية.</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
          <ShieldCheck className="mb-3 h-8 w-8 text-brand-700" />
          <h3 className="mb-2 text-lg font-bold text-brand-800">دفع آمن</h3>
          <p className="text-sm text-stone-600">الدفع عند الاستلام مع حماية الطلبات.</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
          <Warehouse className="mb-3 h-8 w-8 text-brand-700" />
          <h3 className="mb-2 text-lg font-bold text-brand-800">مخزون فعلي</h3>
          <p className="text-sm text-stone-600">لا يطلب منتج غير متوفر في المخزون.</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
          <UserCheck className="mb-3 h-8 w-8 text-brand-700" />
          <h3 className="mb-2 text-lg font-bold text-brand-800">خدمة عملاء</h3>
          <p className="text-sm text-stone-600">تواصل عبر الهاتف ، واتساب، وإنستغرام.</p>
        </div>
      </div>
    </section>
  );
}
