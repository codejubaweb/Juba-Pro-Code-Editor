import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-[#0d0f14] text-[#cdd6e0]">
      <h1 className="text-4xl font-bold mb-4 text-[#00e5ff]">404 - الصفحة غير موجودة</h1>
      <p className="opacity-70 mb-8 font-mono">عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
      <Link
        href="/" 
        className="px-6 py-2 bg-[#00e5ff] text-black font-bold rounded hover:brightness-110 transition active:scale-95"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
