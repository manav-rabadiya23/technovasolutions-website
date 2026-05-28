import { motion } from "framer-motion";
import { type ElementType, type FormEvent, useState } from "react";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Office Location",
    text: "Vadodara, Gujarat, India",
    link: "#",
  },
  {
    icon: Mail,
    title: "Email Address",
    text: "support.technovasolutions@gmail.com",
    link: "mailto:support.technovasolutions@gmail.com",
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    text: "+91 9601451370",
    link: "tel:+919601451370",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon - Fri, 10:00 AM - 8:00 PM",
    link: "#",
  },
];

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const recipientEmail = "support.technovasolutions@gmail.com";

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [error, setError] = useState("");

  const updateField = (field: keyof ContactForm) => (value: string) => {
    setError("");
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    };

    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.message) {
      setError("Please enter your name, email, and message.");
      return;
    }

    const subject = `Project enquiry from ${trimmedForm.name}`;
    const body = [
      `Name: ${trimmedForm.name}`,
      `Email: ${trimmedForm.email}`,
      `Phone: ${trimmedForm.phone || "Not provided"}`,
      "",
      "Message:",
      trimmedForm.message,
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#f3f3f3] px-4 py-16 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:text-sm sm:tracking-[0.25em]">
            Contact TechNova
          </span>

          <h2 className="mt-5 text-[clamp(2rem,8vw,2.5rem)] font-black leading-tight sm:text-5xl lg:text-6xl">
            Let’s build your next{" "}
            <span className="text-[#007185] dark:text-[#ffd814]">
              digital solution
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">
            Have a project idea, business query, or internship question? Reach
            out to TechNova Solutions and our team will guide you.
          </p>
        </motion.div>

        <div className="mt-12 grid w-full gap-8 sm:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full max-w-full space-y-6 overflow-hidden"
          >
            <div className="w-full max-w-full overflow-hidden rounded-2xl bg-[#131921] p-6 text-white shadow-lg sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#232f3e] text-white shadow-sm">
                <MessageCircle size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black leading-tight sm:text-4xl">
                Need help with your business growth?
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                We help businesses with websites, SEO, Google Business Profile,
                AI development, mobile apps, and modern digital strategy.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Fast Reply",
                  "Free Guidance",
                  "Business Focused",
                  "Friendly Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-[#232f3e] px-4 py-3 text-sm font-bold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid w-full gap-5 sm:grid-cols-2">
              {contactCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#007185] dark:border-white/10 dark:bg-[#131921] sm:p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#232f3e] text-white shadow-sm">
                      <Icon size={25} />
                    </div>

                    <h4 className="mt-5 font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 break-words text-[12px] leading-6 text-slate-600 dark:text-white/60">
                      {" "}
                      {item.text}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-8"
          >
            <h3 className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
              Send us a message
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/60">
              Fill out the form and our team will contact you as soon as
              possible.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Input
                icon={User}
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={updateField("name")}
                autoComplete="name"
                required
              />
              <Input
                icon={Mail}
                name="email"
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={updateField("email")}
                autoComplete="email"
                required
              />
            </div>

            <div className="mt-5">
              <Input
                icon={Phone}
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={updateField("phone")}
                autoComplete="tel"
              />
            </div>

            <div className="mt-5 flex min-h-40 w-full max-w-full gap-3 rounded-xl border border-slate-300 bg-white px-4 py-4 shadow-sm focus-within:border-[#007185] dark:border-white/10 dark:bg-[#0f1111] sm:gap-4 sm:px-5">
              <MessageCircle
                className="mt-1 text-slate-500 dark:text-white/50"
                size={20}
              />

              <textarea
                name="message"
                placeholder="Tell us about your project or query..."
                value={form.message}
                onChange={(event) => updateField("message")(event.target.value)}
                maxLength={1200}
                required
                className="h-32 w-full resize-none bg-transparent text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-white/50
[&:-webkit-autofill]:shadow-[0_0_0_1000px_#ffffff_inset]
dark:[&:-webkit-autofill]:shadow-[0_0_0_1000px_#0f1111_inset]
[&:-webkit-autofill]:[-webkit-text-fill-color:#0f172a]
dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#ffffff]"
              />
            </div>

            {error && (
              <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 dark:border-red-400/30 dark:bg-red-950/30 dark:text-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-6 py-4 text-base font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00]"
            >
              Send Message
              <Send size={19} />
            </button>

            <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-slate-500 dark:text-white/60">
              <ShieldCheck size={18} className="text-[#007185]" />
              Your information is safe with us.
            </p>
          </motion.form>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-14 w-full max-w-full overflow-hidden rounded-2xl bg-[#131921] p-6 text-center text-white shadow-lg sm:mt-16 sm:p-10"
        >
          <h3 className="text-2xl font-black sm:text-4xl">
            Ready to grow with TechNova?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Let’s create a website, digital strategy, or AI-powered solution
            that helps your business look professional and attract customers.
          </p>

          <a
            href="mailto:support.technovasolutions@gmail.com"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-6 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00] sm:w-auto sm:px-8"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Input({
  icon: Icon,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  autoComplete,
  required = false,
}: {
  icon: ElementType;
  name: keyof ContactForm;
  placeholder: string;
  type?: "email" | "tel" | "text";
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="flex w-full max-w-full items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-4 shadow-sm focus-within:border-[#007185] dark:border-white/10 dark:bg-[#0f1111] sm:gap-4 sm:px-5">
      <Icon size={20} className="text-slate-500 dark:text-white/50" />

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        maxLength={name === "phone" ? 20 : 120}
        required={required}
        className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-white/50
[&:-webkit-autofill]:shadow-[0_0_0_1000px_#ffffff_inset]
dark:[&:-webkit-autofill]:shadow-[0_0_0_1000px_#0f1111_inset]
[&:-webkit-autofill]:[-webkit-text-fill-color:#0f172a]
dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#ffffff]"
      />
    </div>
  );
}
