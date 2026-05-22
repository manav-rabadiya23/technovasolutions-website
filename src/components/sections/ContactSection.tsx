import { motion } from "framer-motion";
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
    text: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon - Fri, 10:00 AM - 8:00 PM",
    link: "#",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#f3f3f3] px-4 py-20 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#007185] dark:text-[#ffd814]">
            Contact TechNova
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
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

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-[#131921] p-8 text-white shadow-lg sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#232f3e] text-white shadow-sm">
                <MessageCircle size={32} />
              </div>

              <h3 className="mt-7 text-3xl font-black leading-tight sm:text-4xl">
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
            <div className="grid gap-5 sm:grid-cols-2">
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
                    className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#007185] dark:border-white/10 dark:bg-[#131921]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#232f3e] text-white shadow-sm">
                      <Icon size={25} />
                    </div>

                    <h4 className="mt-5 font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 whitespace-nowrap text-[12px] leading-6 text-slate-600 dark:text-white/60">
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
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-8"
          >
            <h3 className="text-3xl font-black text-slate-950 dark:text-white">
              Send us a message
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/60">
              Fill out the form and our team will contact you as soon as
              possible.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Input icon={User} placeholder="Your Name" />
              <Input icon={Mail} placeholder="Email Address" />
            </div>

            <div className="mt-5">
              <Input icon={Phone} placeholder="Phone Number" />
            </div>

            <div className="mt-5 flex min-h-40 gap-4 rounded-xl border border-slate-300 bg-white px-5 py-4 shadow-sm focus-within:border-[#007185] dark:border-white/10 dark:bg-[#0f1111]">
              <MessageCircle
                className="mt-1 text-slate-500 dark:text-white/50"
                size={20}
              />

              <textarea
                placeholder="Tell us about your project or query..."
                className="h-32 w-full resize-none bg-transparent text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-white/50"
              />
            </div>

            <button
              type="button"
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
          className="mt-16 rounded-2xl bg-[#131921] p-8 text-center text-white shadow-lg sm:p-10"
        >
          <h3 className="text-3xl font-black sm:text-4xl">
            Ready to grow with TechNova?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Let’s create a website, digital strategy, or AI-powered solution
            that helps your business look professional and attract customers.
          </p>

          <a
            href="mailto:support.technovasolutions@gmail.com"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#ffd814] px-8 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00]"
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
  placeholder,
}: {
  icon: any;
  placeholder: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-300 bg-white px-5 py-4 shadow-sm focus-within:border-[#007185] dark:border-white/10 dark:bg-[#0f1111]">
      <Icon size={20} className="text-slate-500 dark:text-white/50" />

      <input
        placeholder={placeholder}
        className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-white/50"
      />
    </div>
  );
}
