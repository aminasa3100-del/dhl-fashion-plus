'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('جارٍ تسجيل الدخول...');
    if (!supabase) {
      setStatus('يرجى إعداد متغيرات Supabase في المشروع قبل تسجيل الدخول.');
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setStatus(error.message || 'فشل تسجيل الدخول');
      return;
    }

    router.push('/admin');
  };

  return (
    <main className="container-shell py-10">
      <div className="mx-auto max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-brand-800">تسجيل دخول المدير</h1>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="البريد الإلكتروني" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="كلمة المرور" />
          <button type="submit" className="w-full rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white">دخول</button>
        </form>
        <p className="mt-4 text-sm text-stone-600">{status}</p>
      </div>
    </main>
  );
}
