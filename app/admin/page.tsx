'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = async () => {
      if (!supabase) {
        setReady(false);
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push('/admin/login');
        return;
      }
      setReady(true);
    };

    check();
  }, [router]);

  if (!ready) {
    return <main className="container-shell py-10"><p className="text-brand-800">جارٍ التحقق من الصلاحيات...</p></main>;
  }

  return (
    <main className="container-shell py-10">
      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-brand-800">لوحة إدارة DHL FASHION+</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-brand-50 p-5"><p className="text-sm text-brand-700">إجمالي المنتجات</p><p className="mt-3 text-3xl font-black">12</p></div>
          <div className="rounded-2xl bg-brand-50 p-5"><p className="text-sm text-brand-700">الطلبات</p><p className="mt-3 text-3xl font-black">08</p></div>
          <div className="rounded-2xl bg-brand-50 p-5"><p className="text-sm text-brand-700">المبيعات</p><p className="mt-3 text-3xl font-black">245000 دج</p></div>
          <div className="rounded-2xl bg-brand-50 p-5"><p className="text-sm text-brand-700">التوصيل</p><p className="mt-3 text-3xl font-black">07</p></div>
        </div>
      </div>
    </main>
  );
}
