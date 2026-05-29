import { motion } from "framer-motion";

export default function InternshipApplySection() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-[#050816]">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#101827] sm:p-8"
        >
          <h1 className="text-center text-3xl font-black text-slate-950 dark:text-white">
            Internship Registration Form
          </h1>

          <p className="mt-3 text-center text-sm text-slate-500 dark:text-white/60">
            Apply for TechNova Solutions internship program.
          </p>

          <form
            action="https://formspree.io/f/mdajbvrg"
            method="POST"
            className="mt-8 space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Internship Application - TechNova Solutions"
            />

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#007C89] dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#007C89] dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#007C89] dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                College / University
              </label>
              <input
                type="text"
                name="college"
                placeholder="Enter your college name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#007C89] dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Internship Starting Date
              </label>
              <input
                type="date"
                name="internship_start_date"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#007C89] dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Internship Domain
              </label>
              <select
                name="internship_domain"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#007C89] dark:border-white/10 dark:bg-[#101827] dark:text-white"
              >
                <option value="">Select Domain</option>
                <option value="Prompt Engineering">Prompt Engineering</option>
                <option value="AI-Powered Web Development">
                  AI-Powered Web Development
                </option>
                <option value="AI-Powered App Development">
                  AI-Powered App Development
                </option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Web Design">Web Design</option>
                <option value="WordPress Development">
                  WordPress Development
                </option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold text-slate-700 dark:text-white">
                Payment Paid?
              </label>

              <div className="flex gap-6">
                <label className="flex cursor-pointer items-center gap-2 text-slate-700 dark:text-white/80">
                  <input
                    type="radio"
                    name="payment_paid"
                    value="Yes"
                    required
                  />
                  Yes
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-slate-700 dark:text-white/80">
                  <input type="radio" name="payment_paid" value="No" />
                  No
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#007C89] px-6 py-4 font-bold text-white transition hover:bg-[#006873]"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
