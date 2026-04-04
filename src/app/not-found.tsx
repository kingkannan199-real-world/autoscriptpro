import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden cursor-none">

      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#e0e7ff_1.5px,_transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 mb-12 cursor-none">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">A</div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">AutoScriptPro<span className="text-blue-600">.</span></span>
        </Link>

        {/* 404 number */}
        <div className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-500 to-blue-400 leading-none mb-4 select-none">
          404
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          This page doesn't exist.
        </h1>

        <p className="text-base md:text-lg text-slate-500 font-medium max-w-md mb-10 leading-relaxed">
          Looks like you've wandered off the blueprint. The page you're looking for has been moved, deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-xl text-sm cursor-none"
          >
            ← Back to Homepage
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-full border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors text-sm cursor-none"
          >
            Contact Us
          </Link>
        </div>

        {/* IST time */}
        <p className="mt-12 text-xs text-slate-400 font-medium">
          Need help? We're available <span className="text-slate-600 font-bold">Mon–Sat, 9AM–7PM IST</span> · WhatsApp: <span className="text-slate-600 font-bold">+91 72006 96059</span>
        </p>
      </div>
    </main>
  );
}
