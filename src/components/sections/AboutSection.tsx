import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Modern website development",
  "AI-powered digital solutions",
  "Google visibility strategy",
  "Business-focused UI/UX",
];

const pillars = [
  {
    title: "Smart Planning",
    desc: "We understand your business goal first, then create a practical digital strategy that fits your brand.",
    icon: Lightbulb,
  },
  {
    title: "Clean Development",
    desc: "We build fast, responsive, and easy-to-use digital products with modern development practices.",
    icon: Code2,
  },
  {
    title: "AI Integration",
    desc: "We use AI tools and workflows to improve automation, productivity, and customer experience.",
    icon: Brain,
  },
  {
    title: "Growth Strategy",
    desc: "We help improve online visibility through local SEO, Google Business Profile, and smart content planning.",
    icon: TrendingUp,
  },
];

const growthCards = [
  {
    title: "For Businesses",
    desc: "Websites, Google presence, and digital strategy that help customers trust and contact your brand.",
    icon: Target,
  },
  {
    title: "For Startups",
    desc: "Launch-ready websites, MVP ideas, and scalable digital structure for early-stage growth.",
    icon: Rocket,
  },
  {
    title: "For Freelancers",
    desc: "Portfolio websites, service pages, and personal branding that look professional and credible.",
    icon: Users,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f3f3f3] px-4 pb-16 pt-16 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* TOP ABOUT */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#007185] dark:text-[#ffd814]">
              About TechNova Solutions
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Digital intelligence made for{" "}
              <span className="text-[#007185] dark:text-[#ffd814]">
                real business growth
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">
              TechNova Solutions helps businesses, startups, freelancers, and
              freshers grow through professional websites, AI-powered solutions,
              Google visibility, and practical digital strategy.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-[#131921] dark:text-white/75"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#007185] dark:text-[#ffd814]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-8"
          >
            <div className="rounded-2xl bg-[#f7fafa] p-6 dark:bg-[#232f3e] sm:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007185] to-[#0099a8] text-white shadow-lg">
                <Brain size={30} strokeWidth={2.2} />
              </div>

              <h3 className="mt-7 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
                Practical technology with a clear business purpose.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-white/65">
                We do not only design pages. We create digital systems that look
                professional, work smoothly, and help customers trust your
                brand.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Professional look for your business",
                  "Clear structure for better user experience",
                  "Conversion-focused website sections",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:bg-[#131921] dark:text-white/75"
                  >
                    <ShieldCheck className="h-5 w-5 text-[#007185] dark:text-[#ffd814]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* PILLARS */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#007185] dark:text-[#ffd814]">
              Our Pillars
            </span>

            <h3 className="mt-5 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Strong foundation for modern digital success.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65">
              Every project is planned with design, performance, trust, and
              growth in mind.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:border-[#007185] hover:shadow-md dark:border-white/10 dark:bg-[#131921]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#232f3e] text-white">
                    <Icon size={26} />
                  </div>

                  <h4 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/60">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* GROWTH BLOCK */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl bg-gradient-to-br from-[#131921] to-[#1f2d3d] p-8 text-white shadow-lg sm:p-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd814]">
              Scale Fast
            </span>

            <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              Support for businesses, startups, and freelancers.
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Whether you are building a new brand, improving your current
              website, or growing your local presence, TechNova gives you the
              right digital support to move forward.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {growthCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#131921]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#232f3e] text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h4 className="font-black text-slate-950 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TALENT HUB */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-16 rounded-2xl border border-slate-300 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-10"
        >
          <Search className="mx-auto h-10 w-10 text-[#007185] dark:text-[#ffd814]" />

          <span className="mt-5 block text-xs font-bold uppercase tracking-[0.25em] text-[#007185] dark:text-[#ffd814]">
            Talent Hub
          </span>

          <h3 className="mt-4 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Grow with TechNova
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/65">
            Freshers, students, and freelancers can grow with practical
            exposure, guided learning, and modern digital work experience.
          </p>

          <Link
            to="/internship"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#ffd814] px-8 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00]"
          >
            Explore Opportunities
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
