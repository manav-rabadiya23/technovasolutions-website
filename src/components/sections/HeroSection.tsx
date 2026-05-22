import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Brain,
  Bot,
  TrendingUp,
  Users,
  Globe,
  ChevronRight,
} from "lucide-react";

const visualServices = [
  {
    icon: Code2,
    title: "Web\nDevelopment",
    className: "left-2 top-[7%] sm:left-4 sm:top-[9%] lg:left-4 lg:top-[14%]",
  },
  {
    icon: Smartphone,
    title: "Mobile\nDevelopment",
    className: "left-2 top-[58%] sm:left-4 sm:top-[58%] lg:left-0 lg:top-[49%]",
  },
  {
    icon: Bot,
    title: "Prompt\nEngineering",
    className:
      "right-2 top-[8%] sm:right-4 sm:top-[10%] lg:right-6 lg:top-[11%]",
  },
  {
    icon: Brain,
    title: "AI\nSolutions",
    className:
      "right-2 top-[43%] sm:right-4 sm:top-[44%] lg:right-0 lg:top-[42%]",
  },
  {
    icon: TrendingUp,
    title: "Google\nBusiness\nManagement",
    className:
      "right-2 bottom-[7%] sm:right-4 sm:bottom-[8%] lg:right-8 lg:bottom-[9%]",
  },
];

const services = [
  {
    icon: Code2,
    title: "AI Full Stack Web Development",
    desc: "Building high-performance AI-integrated web applications using modern frameworks and scalable architectures.",
    link: "/services",
  },
  {
    icon: Smartphone,
    title: "AI Mobile Development",
    desc: "Crafting seamless mobile experiences for iOS and Android with AI-powered features and premium interfaces.",
    link: "/services",
  },
  {
    icon: Brain,
    title: "Prompt Engineering",
    desc: "Strategic prompt optimization to maximize creativity, automation, and performance of Large Language Models.",
    link: "/services",
  },
  {
    icon: Globe,
    title: "Google Business Management",
    desc: "Complete GBP management to improve visibility, local search authority, customer engagement, and trust.",
    link: "/services",
  },
];

const stats = [
  { value: "150", label: "Global Deployments" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "45+", label: "Neural Frameworks" },
  { value: "10M+", label: "Data Points Processed" },
];

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-white text-white dark:bg-[#050816]">
        <div className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-[#030712] sm:min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-68px)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_78%_55%,rgba(168,85,247,0.18),transparent_35%),linear-gradient(180deg,#030712,#020617)]" />

          <motion.div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"
            animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 pt-8 sm:gap-10 sm:pb-18 sm:pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:pb-16 lg:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-3xl font-['Poppins'] text-[34px] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:mx-0 lg:text-[58px] xl:text-[68px]"
              >
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.55 }}
                  className="block font-['Poppins']"
                >
                  Building Intelligent
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.55 }}
                  className="block"
                >
                  Solutions for the
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    opacity: { delay: 0.51, duration: 0.55 },
                    y: { delay: 0.51, duration: 0.55 },
                    backgroundPosition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="block bg-[linear-gradient(90deg,#3b82f6,#22d3ee,#8b5cf6,#3b82f6)] bg-[length:300%_300%] bg-clip-text text-transparent"
                >
                  Future
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.68, duration: 0.65 }}
                className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg lg:mx-0"
              >
                We build AI-powered digital products, modern web experiences,
                and future-ready software solutions that drive real business
                results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.65 }}
                className="mt-7 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-blue-500/25 transition duration-300 hover:-translate-y-1"
                >
                  Explore Services
                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/internship"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Apply for Internship
                  <Users size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.85, ease: "easeOut" }}
              className="relative mx-auto h-[430px] w-full max-w-[720px] overflow-visible sm:h-[500px] lg:h-[540px]"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[80px] sm:h-[360px] sm:w-[360px]"
              />

              <motion.div
                animate={{ scale: [1.08, 1, 1.08], opacity: [0.55, 0.8, 0.55] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[75px] sm:h-[320px] sm:w-[320px]"
              />

              <div className="absolute left-[16%] top-[22%] h-px w-[38%] rotate-[20deg] bg-gradient-to-r from-blue-400/60 to-transparent" />
              <div className="absolute left-[12%] top-[52%] h-px w-[38%] bg-gradient-to-r from-violet-400/60 to-transparent" />
              <div className="absolute right-[16%] top-[24%] h-px w-[34%] -rotate-[18deg] bg-gradient-to-l from-violet-400/60 to-transparent" />
              <div className="absolute right-[12%] top-[49%] h-px w-[36%] bg-gradient-to-l from-blue-400/60 to-transparent" />
              <div className="absolute right-[16%] bottom-[24%] h-px w-[34%] rotate-[15deg] bg-gradient-to-l from-violet-400/60 to-transparent" />

              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[58px] left-1/2 h-16 w-[240px] -translate-x-1/2 rounded-[50%] border border-blue-400/50 bg-blue-500/5 shadow-[0_0_80px_rgba(59,130,246,0.35)] sm:bottom-[38px] sm:h-24 sm:w-[390px]"
              />

              <motion.div
                animate={{ scale: [1.03, 1, 1.03] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[78px] left-1/2 h-12 w-[195px] -translate-x-1/2 rounded-[50%] border border-violet-400/70 bg-violet-500/10 shadow-[0_0_80px_rgba(168,85,247,0.45)] sm:bottom-[62px] sm:h-16 sm:w-[300px]"
              />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[30%] flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-[32px] border border-blue-300/50 bg-white/[0.04] shadow-[0_0_90px_rgba(99,102,241,0.5)] backdrop-blur-2xl sm:top-[27%] sm:h-56 sm:w-56 sm:rounded-[44px]"
              >
                <div className="absolute inset-3 rounded-[26px] border border-violet-400/50 sm:inset-4 sm:rounded-[36px]" />
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/25 sm:rounded-[44px]" />

                <motion.h2
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative bg-gradient-to-b from-white via-blue-200 to-violet-500 bg-clip-text text-5xl font-black text-transparent drop-shadow-2xl sm:text-8xl"
                >
                  AI
                </motion.h2>
              </motion.div>

              {visualServices.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25, scale: 0.94 }}
                    animate={{
                      opacity: 1,
                      y: [0, index % 2 === 0 ? -10 : 10, 0],
                      scale: 1,
                    }}
                    transition={{
                      opacity: { delay: index * 0.12, duration: 0.5 },
                      scale: { delay: index * 0.12, duration: 0.5 },
                      y: {
                        duration: 4 + index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                    }}
                    className={`absolute z-20 w-[135px] rounded-[26px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-[1px] shadow-[0_10px_50px_rgba(59,130,246,0.15)] backdrop-blur-2xl sm:w-[185px] lg:w-[215px] ${item.className}`}
                  >
                    <div className="rounded-[25px] border border-white/8 bg-[#10172d]/90 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#1d4ed8]/30 to-[#7c3aed]/20 text-blue-200 shadow-[0_0_25px_rgba(59,130,246,0.25)] sm:h-14 sm:w-14">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-violet-400/10" />

                          <Icon
                            size={22}
                            strokeWidth={2.3}
                            className="relative z-10 sm:h-7 sm:w-7"
                          />
                        </div>

                        <h3 className="whitespace-pre-line text-[13px] font-semibold leading-[1.35] tracking-[-0.01em] text-white sm:text-[17px] lg:text-[18px]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="absolute -bottom-px left-0 h-16 w-full rounded-t-[100%] bg-white dark:bg-[#050816] sm:h-24" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="relative z-20 -mt-8 hidden flex-col items-center text-slate-900 dark:text-white sm:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-8 items-center justify-center rounded-full border border-slate-900/30 dark:border-white/30"
          >
            <div className="h-3 w-1 rounded-full bg-slate-900 dark:bg-white" />
          </motion.div>

          <span className="mt-5 text-xs font-bold uppercase tracking-[0.45em] text-slate-700 dark:text-white/60">
            Scroll Down
          </span>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-24 text-slate-900 transition-colors duration-500 dark:bg-[#050816] dark:text-white sm:px-5 sm:py-28">
        {" "}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:70px_70px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mt-7 text-center text-[32px] font-black leading-tight sm:text-5xl">
              <span className="block sm:inline">Specialized</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent sm:ml-3 sm:inline">
                Services
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
              We provide elite digital marketing and high-performance
              development services tailored for modern businesses and
              future-ready digital experiences.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-7 lg:mt-20 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/75 p-6 shadow-xl backdrop-blur-xl transition-colors duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-violet-500/[0.04] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <motion.div
                        whileHover={{ rotate: -6, scale: 1.08 }}
                        transition={{ duration: 0.25 }}
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg dark:from-white dark:to-zinc-200 dark:text-black"
                      >
                        <Icon size={30} strokeWidth={2.2} />
                      </motion.div>

                      <Link
                        to={service.link}
                        className="group/arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:text-blue-400"
                      >
                        <ChevronRight
                          size={20}
                          className="transition duration-300 group-hover/arrow:translate-x-0.5"
                        />
                      </Link>
                    </div>

                    <h3 className="mt-7 text-2xl font-black leading-tight text-slate-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
                      {service.desc}
                    </p>

                    <Link
                      to={service.link}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all duration-300 hover:gap-3 dark:text-blue-400"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-16 flex justify-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-slate-300/30 transition-all duration-300 hover:-translate-y-1 dark:bg-white dark:text-black dark:shadow-white/10"
            >
              Explore All Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 px-7 py-10 text-center shadow-xl backdrop-blur-xl transition-colors duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-cyan-500/[0.03] to-violet-500/[0.05] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />

                <h3 className="relative text-5xl font-black tracking-tight sm:text-6xl">
                  <span className="bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
                    {item.value}
                  </span>
                </h3>

                <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-zinc-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
