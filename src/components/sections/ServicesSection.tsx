import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Building2,
  Code2,
  Map,
  MapPin,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Google Business Profile Management",
    desc: "Complete management of your Google Business Profile to keep your brand accurate, active, and trusted in local search.",
    icon: MapPin,
  },
  {
    title: "Local SEO Services",
    desc: "Strategic local SEO to improve rankings, increase nearby traffic, and generate quality business leads.",
    icon: Search,
  },
  {
    title: "Google Maps Listing Management",
    desc: "Optimized Google Maps presence so customers can quickly find your location, contact details, and services.",
    icon: Map,
  },
  {
    title: "Local Business Listing Management",
    desc: "Consistent business information across trusted platforms to build authority and improve visibility.",
    icon: Building2,
  },
  {
    title: "GBP Optimization Service",
    desc: "Advanced optimization to improve impressions, direction requests, calls, and customer actions.",
    icon: Zap,
  },
  {
    title: "AI Full Stack Web Development",
    desc: "Modern, high-performance websites and web applications built with AI-powered features and clean architecture.",
    icon: Code2,
  },
  {
    title: "AI Mobile Development",
    desc: "Smart mobile app experiences for Android and iOS with clean UI, smooth performance, and useful AI features.",
    icon: Smartphone,
  },
  {
    title: "Prompt Engineering",
    desc: "Professional prompt systems and AI workflows that improve automation, creativity, accuracy, and productivity.",
    icon: Brain,
  },
];

const strengths = [
  {
    title: "Growth Focused",
    desc: "Every solution is planned to improve trust, visibility, and customer conversion.",
    icon: TrendingUp,
  },
  {
    title: "Reliable Process",
    desc: "Clear communication, clean delivery, and professional execution from start to finish.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Technology",
    desc: "We use current tools, AI workflows, and scalable frontend practices.",
    icon: Sparkles,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-[#f3f3f3] px-4 py-16 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:text-sm sm:tracking-[0.25em]">
            Services We Provide
          </span>

          <h2 className="mt-5 text-[clamp(2rem,8vw,2.5rem)] font-black leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Smart digital services for{" "}
            <span className="text-[#007185] dark:text-[#ffd814]">
              business growth
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">
            From Google visibility to AI-powered development, TechNova helps
            brands build a strong, trusted, and conversion-focused digital
            presence.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-12 grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                className="group flex h-full w-full max-w-full flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:border-[#007185] hover:shadow-md dark:border-white/10 dark:bg-[#131921] sm:p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#232f3e] text-white transition group-hover:scale-105">
                  <Icon size={27} strokeWidth={2.2} />
                </div>

                <h3 className="mt-7 text-xl font-black leading-snug text-slate-950 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-white/60">
                  {service.desc}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#007185] transition hover:gap-3 dark:text-[#ffd814]"
                >
                  Get service
                  <ArrowRight size={17} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose */}
        <div className="mt-14 grid w-full gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-full overflow-hidden rounded-2xl bg-[#131921] p-6 text-white shadow-lg sm:p-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd814]">
              Why TechNova
            </span>

            <h3 className="mt-5 text-2xl font-black leading-tight sm:text-4xl">
              Digital work that looks professional and brings customers closer.
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-300">
              We focus on clean design, practical development, local visibility,
              and modern AI solutions that help your business grow with trust.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-6 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00] sm:w-auto sm:px-7"
            >
              Discuss Your Project
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <div className="grid w-full gap-5 md:grid-cols-3 lg:grid-cols-1">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="w-full max-w-full rounded-2xl border border-slate-300 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-6"
                >
                  <div className="flex items-start gap-4">
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
      </div>
    </section>
  );
}
