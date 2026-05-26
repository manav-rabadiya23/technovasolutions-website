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
  "Hands-on practical learning",
  "Mentor guidance",
  "Certificate after completion",
  "Portfolio-ready work",
];

const programDetails = [
  { label: "Duration", value: "4 Weeks" },
  { label: "Mode", value: "Online" },
  { label: "Eligibility", value: "Students & Freshers" },
  { label: "Internship Fee", value: "₹149 Only" },
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      className="overflow-hidden bg-[#f3f3f3] px-4 pt-8 pb-14 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:pt-10 sm:pb-20 lg:px-8 lg:pt-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* HERO */}
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:text-sm sm:tracking-[0.25em]">
              TechNova Internship Program
            </span>

            <h1 className="mt-5 max-w-3xl text-[clamp(2rem,8vw,2.5rem)] font-black leading-tight sm:text-5xl lg:text-6xl">
              Start your career with{" "}
              <span className="text-[#007185] dark:text-[#ffd814]">
                real digital skills
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">
              Learn practical digital skills through guided tasks, mentor
              support, project-based practice, and completion certification
              designed for students, freshers, and beginners.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-[#131921] dark:text-white/75"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#007185] dark:text-[#ffd814]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-6 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00] sm:w-auto sm:px-8"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>

              <a
                href="#internship-domains"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#007185] dark:border-white/10 dark:bg-[#131921] dark:text-white sm:w-auto sm:px-8"
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
            className="w-full max-w-full overflow-hidden rounded-2xl bg-[#131921] p-6 text-white shadow-lg sm:p-10"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd814]">
                  Learn. Build. Grow.
                </span>

                <h3 className="mt-5 text-2xl font-black leading-tight sm:text-4xl">
                  Practical internship for future-ready talent.
                </h3>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#232f3e] text-white">
                <GraduationCap size={34} />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {programDetails.map((item) => (
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
        <div id="internship-domains" className="mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:text-sm sm:tracking-[0.25em]">
              Choose Your Domain
            </span>

            <h2 className="mt-5 text-[clamp(2rem,8vw,2.5rem)] font-black leading-tight sm:text-5xl">
              Internship programs built for practical growth.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65">
              Select your area of interest and complete guided assignments,
              mini-projects, and portfolio-ready tasks that help you explain
              your skills confidently.
            </p>
          </motion.div>

          <div className="mt-10 grid w-full gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-3">
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
                  className="group flex h-full w-full max-w-full flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:border-[#007185] hover:shadow-md dark:border-white/10 dark:bg-[#131921] sm:p-6"
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

                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffd814] px-5 py-3 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00] sm:w-auto"
                  >
                    Apply Now
                    <ArrowRight size={17} />
                  </a>
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
          className="mt-14 grid w-full max-w-full items-center gap-6 overflow-hidden rounded-2xl bg-[#131921] p-6 text-white shadow-lg sm:mt-16 sm:p-10 md:grid-cols-[auto_1fr_auto]"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#232f3e] text-white">
            <BriefcaseBusiness size={32} />
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-[#ffd814]">
              <Star size={17} />
              <span className="text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em]">
                Career Growth
              </span>
            </div>

            <h3 className="text-2xl font-black sm:text-3xl">
              Not sure which internship is right for you?
            </h3>

            <p className="mt-3 max-w-2xl text-slate-300">
              Apply now and our team will help you choose the best domain based
              on your interest, current skill level, and career goal.
            </p>
          </div>

          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-6 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00] md:w-auto md:px-8"
          >
            Apply Now
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
