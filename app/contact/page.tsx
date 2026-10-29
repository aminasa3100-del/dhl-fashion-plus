export default function ContactPage() {
  return (
    <main className="container-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
          <h1 className="text-3xl font-black text-brand-800">اتصل بنا</h1>
          <ul className="mt-6 space-y-4 text-stone-600">
            <li>الهاتف: 0542291709</li>
            <li>واتساب: 0783899313</li>
            <li>إنستغرام: @dhl_fashion_md</li>
            <li>الموقع: سطيف، الجزائر</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-brand-800">إرسال رسالة</h2>
          <form className="mt-5 space-y-4">
            <input className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="الاسم" />
            <input className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="البريد الإلكتروني" />
            <textarea className="min-h-[150px] w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-right" placeholder="رسالتك" />
            <button className="rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white">إرسال</button>
          </form>
        </div>
      </div>
    </main>
  );
}
