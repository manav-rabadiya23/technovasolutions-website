import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Brush,
  CheckCircle2,
  Code2,
  GraduationCap,
  Search,
  Smartphone,
  Star,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const applyLink =
  "https://docs.google.com/forms/d/e/1FAIpQLScLi9woOfxYBvRM5APpuhthe-ahHqDP6p-iIdjJM6dM4H1vmg/viewform";

const internships = [
  {
    title: "Prompt Engineering",
    desc: "Learn AI prompts, workflow building, and practical automation for real business use.",
    icon: WandSparkles,
  },
  {
    title: "AI-Powered Web Development",
    desc: "Build responsive websites using React, AI tools, and modern frontend practices.",
    icon: Code2,
  },
  {
    title: "AI-Powered App Development",
    desc: "Create clean mobile app concepts with useful features and smooth user experience.",
    icon: Smartphone,
  },
  {
    title: "SEO",
    desc: "Learn keyword research, content optimization, Google visibility, and ranking basics.",
    icon: Search,
  },
  {
    title: "Web Design",
    desc: "Design clean website layouts using UI/UX principles and modern visual structure.",
    icon: Brush,
  },
];

const benefits = [
  "Live project exposure",
  "Mentor guidance",
  "Certificate after completion",
  "Portfolio-ready work",
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      className="bg-[#f3f3f3] px-4 py-20 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#007185] dark:text-[#ffd814]">
              TechNova Internship Program
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Start your career with{" "}
              <span className="text-[#007185] dark:text-[#ffd814]">
                real digital skills
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">
              Learn practical skills through guided tasks, real project
              exposure, and professional training designed for students,
              freshers, and beginners.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-[#131921] dark:text-white/75"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#007185] dark:text-[#ffd814]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to={applyLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-8 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00]"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>

              <a
                href="#internship-domains"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#007185] dark:border-white/10 dark:bg-[#131921] dark:text-white"
              >
                View Domains
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl bg-[#131921] p-8 text-white shadow-lg sm:p-10"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd814]">
                  Learn. Build. Grow.
                </span>

                <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  Practical internship for future-ready talent.
                </h3>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#232f3e] text-white">
                <GraduationCap size={34} />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Training Type", value: "Practical" },
                { label: "Internship Fee", value: "₹149 Only" },
                { label: "Guidance", value: "Mentor Led" },
                { label: "Outcome", value: "Certificate" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-[#232f3e] p-5"
                >
                  <p className="text-sm text-slate-300">{item.label}</p>
                  <p className="mt-2 text-xl font-black">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DOMAINS */}
        <div id="internship-domains" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#007185] dark:text-[#ffd814]">
              Choose Your Domain
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Internship programs built for practical growth.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65">
              Select your area of interest and start building useful skills for
              real digital projects.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {internships.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group flex h-full flex-col rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:border-[#007185] hover:shadow-md dark:border-white/10 dark:bg-[#131921]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#232f3e] text-white transition group-hover:scale-105">
                    <Icon size={27} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-white/60">
                    {item.desc}
                  </p>

                  <Link
                    to={applyLink}
                    target="_blank"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffd814] px-5 py-3 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00]"
                  >
                    Apply Now
                    <ArrowRight size={17} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-16 grid items-center gap-6 rounded-2xl bg-[#131921] p-8 text-white shadow-lg md:grid-cols-[auto_1fr_auto] sm:p-10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#232f3e] text-white">
            <BriefcaseBusiness size={32} />
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-[#ffd814]">
              <Star size={17} />
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                Career Growth
              </span>
            </div>

            <h3 className="text-3xl font-black">
              Not sure which internship is right for you?
            </h3>

            <p className="mt-3 max-w-2xl text-slate-300">
              Apply now and our team will help you choose the best domain based
              on your interest and career goal.
            </p>
          </div>

          <Link
            to={applyLink}
            target="_blank"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-8 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00]"
          >
            Apply Now
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
