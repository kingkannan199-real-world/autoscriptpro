import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AutoScriptPro",
  description: "Terms and Conditions for AutoScriptPro services.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-white cursor-none">

      <div className="border-b border-slate-100 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-none">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white text-sm">A</div>
            <span className="text-base font-extrabold text-slate-900 tracking-tight">AutoScriptPro<span className="text-blue-600">.</span></span>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors cursor-none">← Back to Home</Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-slate-500 font-medium">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600">

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">1. Agreement</h2>
            <p className="leading-relaxed">By engaging AutoScriptPro for any service — through this website, email, WhatsApp, or any other channel — you agree to these Terms & Conditions. AutoScriptPro is a freelance studio operated from Chennai, Tamil Nadu, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">2. Services</h2>
            <p className="leading-relaxed">AutoScriptPro provides custom software development, AI/automation systems, data analysis, and related digital services. The exact scope of each project is defined in a written proposal or agreement shared before work begins.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>All projects are priced and invoiced in <strong className="text-slate-900">Indian Rupees (INR)</strong></li>
              <li>A minimum <strong className="text-slate-900">50% advance</strong> is required before work begins</li>
              <li>Remaining balance is due upon project completion and before final delivery</li>
              <li>Payments are accepted via UPI, bank transfer, or agreed digital methods</li>
              <li>No work will commence until the advance payment is confirmed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">4. Revisions & Scope</h2>
            <p className="leading-relaxed">Each package includes a defined number of revision rounds as stated in the project proposal. Additional revisions or scope changes beyond the agreed specification will be quoted and billed separately. Scope changes requested mid-project may affect delivery timelines.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">5. Delivery & Timelines</h2>
            <p className="leading-relaxed">Estimated delivery timelines are provided at project kickoff. Timelines assume timely feedback and content provision from the client. Delays caused by the client (late responses, missing assets, scope changes) will extend delivery accordingly.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">6. Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>The advance payment is <strong className="text-slate-900">non-refundable</strong> once work has commenced</li>
              <li>If AutoScriptPro is unable to deliver the agreed scope, a full refund of all payments will be issued</li>
              <li>Partial refunds may be considered at AutoScriptPro's discretion for incomplete work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">7. Intellectual Property</h2>
            <p className="leading-relaxed">Upon receipt of full payment, the client owns all custom code and deliverables produced for their project. AutoScriptPro retains the right to showcase the work in its portfolio unless the client requests confidentiality in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">8. Confidentiality</h2>
            <p className="leading-relaxed">AutoScriptPro treats all client business information, data, and systems as confidential and will not disclose them to third parties without written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">9. Limitation of Liability</h2>
            <p className="leading-relaxed">AutoScriptPro's total liability for any claim shall not exceed the total amount paid for the specific project. We are not liable for indirect, incidental, or consequential damages arising from the use of our deliverables.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">10. Governing Law</h2>
            <p className="leading-relaxed">These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Chennai, Tamil Nadu.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">11. Contact</h2>
            <p className="leading-relaxed">Questions about these terms? Reach us at <a href="mailto:autoscriptpro@gmail.com" className="text-blue-600 font-semibold hover:underline">autoscriptpro@gmail.com</a> · +91 72006 96059.</p>
          </section>

        </div>
      </div>

      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} AutoScriptPro · <Link href="/privacy-policy" className="hover:text-blue-600 cursor-none">Privacy Policy</Link>
      </div>
    </main>
  );
}
