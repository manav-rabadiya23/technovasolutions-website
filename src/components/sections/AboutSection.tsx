import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Globe2,
  GraduationCap,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const stats = [
  { value: "500+", label: "Projects Completed", icon: Building2 },
  { value: "100+", label: "Happy Clients", icon: UsersRound },
  { value: "3+", label: "Years of Excellence", icon: ShieldCheck },
  { value: "MSME", label: "Registered", icon: Award },
];

const capabilities = [
  {
    title: "Web Development",
    desc: "We build fast, responsive and modern websites that help your business grow online.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Solutions",
    desc: "We integrate AI tools and automation to improve efficiency and drive better results.",
    icon: Bot,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "SEO & Growth",
    desc: "We help your business rank higher, attract the right audience and achieve real growth.",
    icon: TrendingUp,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Branding & Design",
    desc: "We create unique brand identities and stunning designs that make you stand out.",
    icon: Palette,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Internship Program",
    desc: "Learn, grow and build practical skills with our internship opportunities.",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-500",
  },
];

const helpItems = [
  {
    title: "Businesses",
    desc: "Helping businesses automate processes and build strong digital presence.",
    icon: Building2,
  },
  {
    title: "Startups",
    desc: "Supporting startups with MVP development, branding and growth.",
    icon: Rocket,
  },
  {
    title: "Freelancers",
    desc: "Empowering freelancers with personal branding, portfolio and visibility.",
    icon: UsersRound,
  },
  {
    title: "Personal Brands",
    desc: "Building powerful personal brands that create trust and influence.",
    icon: Globe2,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f6f7f8] px-4 py-14 text-[#020617] dark:bg-[#020617] dark:text-white sm:px-6 lg:px-8"
    >
      {/* BACKGROUND */}
      <div className="absolute left-[-150px] top-16 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute right-[-150px] top-72 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="absolute left-6 top-28 h-32 w-32 opacity-20 [background-image:radial-gradient(#0ea5e9_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
      <div className="absolute bottom-20 right-8 h-32 w-32 opacity-20 [background-image:radial-gradient(#0ea5e9_1.5px,transparent_1.5px)] [background-size:14px_14px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#007f8f] to-cyan-500 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-cyan-500/25"
            >
              <UsersRound size={16} />
              About Us
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-black leading-[1.05] tracking-[-0.05em] text-[#020617] dark:text-white"
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#007f8f] via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                TechNova
              </span>{" "}
              Solutions
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-2 text-base font-bold tracking-wide text-slate-700 dark:text-white/70"
            >
              AI Powered ~ Smart Digital Solutions
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#007f8f] to-cyan-500"
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg"
            >
              TechNova Solutions is a forward-thinking digital agency and IT
              company helping businesses, startups, and individuals grow with
              modern technology, smart strategies, and creative digital
              solutions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative mt-7 overflow-hidden rounded-[1.8rem] border border-cyan-100 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cyan-50 to-transparent dark:from-cyan-500/10" />

              <p className="relative text-base font-semibold leading-8 text-slate-700 dark:text-white/70">
                <span className="text-4xl font-black text-[#007f8f]">“</span>{" "}
                Our mission is simple — deliver reliable digital solutions,
                build long-term relationships, and create measurable results.
              </p>
            </motion.div>
          </motion.div>

          {/* UDYAM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white p-8 text-center shadow-[0_30px_90px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="absolute right-0 top-0 h-full w-32 opacity-40 [background-image:radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
            <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-r from-[#00b8c7] via-[#007f8f] to-[#ffd814]" />
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl dark:bg-[#111827]"
              >
                <ShieldCheck size={40} className="text-[#007f8f]" />
              </motion.div>

              <p className="mt-6 text-lg font-medium text-slate-700 dark:text-white/70">
                Proudly Registered
              </p>

              <h3 className="mt-2 text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-none text-[#f2b400]">
                UDYAM
              </h3>

              <div className="mx-auto mt-5 inline-flex rounded-xl bg-[#007f8f] px-6 py-3 text-base font-black text-white shadow-lg">
                UDYAM-GJ-01-0008286
              </div>

              <div className="my-7 h-px bg-slate-200 dark:bg-white/10" />

              <div className="grid grid-cols-3 gap-3 text-sm font-bold text-slate-700 dark:text-white/70">
                {["Trusted", "Verified", "Registered"].map((item) => (
                  <div
                    key={item}
                    className="flex flex-col items-center justify-center gap-2 sm:flex-row"
                  >
                    <CheckCircle2 size={18} className="text-[#007f8f]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-[#007f8f] shadow-sm transition group-hover:scale-110 dark:bg-white/10">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-2xl font-black text-[#007f8f]">
                    {item.value}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-white/65">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CAPABILITIES */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-25`}
                />

                <div className="relative z-10">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl transition group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon size={26} />
                  </div>

                  <h4 className="mt-5 text-xl font-black leading-tight text-[#020617] dark:text-white">
                    {item.title}
                  </h4>

                  <div className="mt-3 h-1 w-10 rounded-full bg-[#007f8f]" />

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/65">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* HELP + CTA */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_300px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="grid gap-5 lg:grid-cols-[230px_1fr_1fr_1fr_1fr]">
              <div>
                <h3 className="text-2xl font-black text-[#020617] dark:text-white">
                  Who We Help
                </h3>
                <div className="mt-3 h-1 w-12 rounded-full bg-[#007f8f]" />
                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-white/65">
                  We work with a wide range of clients and help them grow with
                  digital solutions.
                </p>
              </div>

              {helpItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#007f8f] shadow-sm dark:bg-white/10">
                      <Icon size={22} />
                    </div>

                    <h4 className="mt-4 text-lg font-black text-[#020617] dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#06111f] via-[#09203d] to-[#06111f] p-6 text-white shadow-[0_25px_70px_rgba(15,23,42,0.22)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl"
              >
                <BriefcaseBusiness size={26} />
              </motion.div>

              <h3 className="mt-5 text-2xl font-black leading-tight">
                Let’s Build Something Great
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Have a project in mind? Let’s turn your ideas into reality.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-[#007f8f] px-6 py-4 text-sm font-black text-white shadow-lg transition hover:scale-[1.03]"
              >
                Get In Touch
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
