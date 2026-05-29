import { useState } from "react";
import { motion } from "framer-motion";

type FormDataType = {
  full_name: string;
  email: string;
  phone: string;
  college: string;
  internship_start_date: string;
  internship_domain: string;
  payment_paid: string;
};

type ErrorsType = Partial<Record<keyof FormDataType, string>>;

const initialForm: FormDataType = {
  full_name: "",
  email: "",
  phone: "",
  college: "",
  internship_start_date: "",
  internship_domain: "",
  payment_paid: "",
};

export default function InternshipApplySection() {
  const [form, setForm] = useState<FormDataType>(initialForm);
  const [errors, setErrors] = useState<ErrorsType>({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: ErrorsType = {};

    if (!form.full_name.trim()) {
      newErrors.full_name = "Full name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(form.full_name)) {
      newErrors.full_name = "Name should contain only letters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!form.college.trim()) {
      newErrors.college = "College / University name is required.";
    }

    if (!form.internship_start_date) {
      newErrors.internship_start_date = "Internship starting date is required.";
    }

    if (!form.internship_domain) {
      newErrors.internship_domain = "Please select internship domain.";
    }

    if (!form.payment_paid) {
      newErrors.payment_paid = "Please select payment status.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateField =
    (field: keyof FormDataType) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm({ ...form, [field]: e.target.value });
      setErrors({ ...errors, [field]: "" });
      setStatus("");
    };

  const inputClass = (field: keyof FormDataType) =>
    `w-full rounded-xl border px-4 py-3 outline-none transition dark:bg-white/5 dark:text-white ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-slate-300 focus:border-[#007C89] dark:border-white/10"
    }`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("❌ Please fix the highlighted fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    const submitData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      submitData.append(key, value);
    });
    submitData.append(
      "_subject",
      "New Internship Application - TechNova Solutions",
    );

    try {
      const response = await fetch("https://formspree.io/f/mdajbvrg", {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Application submitted successfully!");
        setForm(initialForm);
        setErrors({});
      } else {
        const data = await response.json();
        console.log("Formspree error:", data);
        setStatus("❌ Failed to submit application. Please try again.");
      }
    } catch {
      setStatus("❌ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={updateField("full_name")}
                placeholder="Enter your full name"
                className={inputClass("full_name")}
              />
              {errors.full_name && (
                <p className="mt-1 text-sm font-medium text-red-500">
                  {errors.full_name}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="Enter your email"
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateField("phone")}
                placeholder="Enter your phone number"
                className={inputClass("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm font-medium text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                College / University
              </label>
              <input
                type="text"
                name="college"
                value={form.college}
                onChange={updateField("college")}
                placeholder="Enter your college name"
                className={inputClass("college")}
              />
              {errors.college && (
                <p className="mt-1 text-sm font-medium text-red-500">
                  {errors.college}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Internship Starting Date
              </label>
              <input
                type="date"
                name="internship_start_date"
                value={form.internship_start_date}
                onChange={updateField("internship_start_date")}
                className={inputClass("internship_start_date")}
              />
              {errors.internship_start_date && (
                <p className="mt-1 text-sm font-medium text-red-500">
                  {errors.internship_start_date}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
                Internship Domain
              </label>
              <select
                name="internship_domain"
                value={form.internship_domain}
                onChange={updateField("internship_domain")}
                className={inputClass("internship_domain")}
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
              {errors.internship_domain && (
                <p className="mt-1 text-sm font-medium text-red-500">
                  {errors.internship_domain}
                </p>
              )}
            </div>

            <div>
              <label className="mb-3 block font-semibold text-slate-700 dark:text-white">
                Payment Paid?
              </label>

              <div
                className={`rounded-xl border p-4 ${
                  errors.payment_paid
                    ? "border-red-500"
                    : "border-slate-300 dark:border-white/10"
                }`}
              >
                <div className="flex gap-6">
                  <label className="flex cursor-pointer items-center gap-2 text-slate-700 dark:text-white/80">
                    <input
                      type="radio"
                      name="payment_paid"
                      value="Yes"
                      checked={form.payment_paid === "Yes"}
                      onChange={updateField("payment_paid")}
                    />
                    Yes
                  </label>

                  <label className="flex cursor-pointer items-center gap-2 text-slate-700 dark:text-white/80">
                    <input
                      type="radio"
                      name="payment_paid"
                      value="No"
                      checked={form.payment_paid === "No"}
                      onChange={updateField("payment_paid")}
                    />
                    No
                  </label>
                </div>
              </div>

              {errors.payment_paid && (
                <p className="mt-1 text-sm font-medium text-red-500">
                  {errors.payment_paid}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#007C89] px-6 py-4 font-bold text-white transition hover:bg-[#006873] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>

            {status && (
              <p
                className={`text-center text-sm font-bold ${
                  status.includes("✅")
                    ? "text-[#007C89] dark:text-cyan-300"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
