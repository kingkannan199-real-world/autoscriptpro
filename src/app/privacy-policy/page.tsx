import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AutoScriptPro",
  description: "Privacy Policy for AutoScriptPro — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar-style header */}
      <div className="border-b border-slate-100 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white text-sm">A</div>
            <span className="text-base font-extrabold text-slate-900 tracking-tight">AutoScriptPro<span className="text-blue-600">.</span></span>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">← Back to Home</Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600">

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">1. Who We Are</h2>
            <p className="leading-relaxed">AutoScriptPro is a freelance technology and automation studio based in Chennai, Tamil Nadu, India. We provide AI automation, custom web development, and data solutions to businesses globally. For any privacy-related queries, contact us at <a href="mailto:reachout@autoscriptpro.in" className="text-blue-600 font-semibold hover:underline">reachout@autoscriptpro.in</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">2. What Data We Collect</h2>
            <p className="leading-relaxed mb-3">When you interact with our website or contact form, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Full name and email address</li>
              <li>Phone number (optional)</li>
              <li>Company name (optional)</li>
              <li>Your message or project description</li>
              <li>Browser type, IP address, and pages visited (via cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>To respond to your enquiry or service request</li>
              <li>To send you a custom project blueprint or quote</li>
              <li>To improve our website and services</li>
              <li>We do <strong className="text-slate-900">not</strong> sell, rent, or share your data with third parties for marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">4. Data Storage</h2>
            <p className="leading-relaxed">Contact form submissions are stored in a Google Sheets document accessible only to AutoScriptPro. We use Google's infrastructure which is GDPR-compliant. Your data is retained for a maximum of 2 years or until you request deletion.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">5. Cookies</h2>
            <p className="leading-relaxed">Our website uses minimal cookies for functionality (no advertising or tracking cookies). You can disable cookies in your browser settings at any time without affecting core functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">6. Your Rights</h2>
            <p className="leading-relaxed mb-3">Under India's DPDP Act 2023 and applicable laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3 text-sm">To exercise these rights, email us at <a href="mailto:reachout@autoscriptpro.in" className="text-blue-600 font-semibold hover:underline">reachout@autoscriptpro.in</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">7. Third-Party Links</h2>
            <p className="leading-relaxed">Our website may contain links to external sites (WhatsApp, LinkedIn etc.). We are not responsible for the privacy practices of those sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">8. Changes to This Policy</h2>
            <p className="leading-relaxed">We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of our site constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">9. Contact</h2>
            <p className="leading-relaxed">For any privacy concerns: <a href="mailto:reachout@autoscriptpro.in" className="text-blue-600 font-semibold hover:underline">reachout@autoscriptpro.in</a> · +91 72006 96059 · Chennai, Tamil Nadu, India.</p>
          </section>

        </div>
      </div>

      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} AutoScriptPro · <Link href="/terms" className="hover:text-blue-600">Terms & Conditions</Link>
      </div>
    </main>
  );
}
