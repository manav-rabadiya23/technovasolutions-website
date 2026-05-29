import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Mail,
  Globe,
  Send,
  UserRoundCheck,
} from "lucide-react";
type Member = {
  name: string;
  role?: string;
  image: string;
  desc: string;
  icon?: ElementType;
  email?: string;
  portfolio?: string;
};

const leadershipTeam: Member[] = [
  {
    name: "Suryansh Soni",
    role: "Founder",
    image: "founder.jpeg",
    desc: "Leading TechNova Solutions with innovation, strategic vision, and future-ready digital transformation.",
    icon: Crown,
    email: "Suryansh.technovasolutions@gmail.com",
    portfolio: "https://www.suryanshsoni.in",
  },
  {
    name: "Tanis Patel",
    role: "Co-Founder",
    image: "tanis-patel.png",
    desc: "Driving operations, execution, and business growth through smart planning and leadership.",
    icon: UserRoundCheck,
    email: "support.technovasolutions@gmail.com",
  },
];

const coreTeam: Member[] = [
  {
    name: "Sweeny Rajput",
    image: "shreya-rajput.png",
    desc: "Managing Software Requirement Specifications (SRS), workflow planning, and project documentation to streamline operations and support successful project delivery.",
    email: "support.technovasolutions@gmail.com",
  },

  {
    name: "Pallavi Ramoliya",
    image: "pallavi-ramoliya.jpg",
    desc: "Contributing to organizational growth through collaboration, responsibility, and a results-driven mindset.",
    email: "support.technovasolutions@gmail.com",
  },
  {
    name: "Krisha Patel",
    image: "krisha patel.jpg",
    desc: "Committed to helping transform ideas into impactful outcomes through dedication and innovation.",
    email: "support.technovasolutions@gmail.com",
  },
  {
    name: "Manav Rabadiya",
    image: "manav-rabadiya.jpeg",
    desc: "Focused on delivering value through teamwork, consistency, and continuous learning.",
    email: "support.technovasolutions@gmail.com",

    portfolio: "https://rabadiya-manav.vercel.app/",
  },

  {
    name: "Kush Patel",
    image: "kush-patel.jpeg",
    desc: "Supporting the team with fresh perspectives, determination, and a passion for excellence.",
    email: "support.technovasolutions@gmail.com",
  },
];
function LeadershipCard({ member, index }: { member: Member; index: number }) {
  const Icon = member.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827] dark:shadow-black/30"
    >
      <div className="grid md:grid-cols-[42%_58%]">
        <div className="relative h-[300px] overflow-hidden bg-[#e9edf2] md:h-full">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

          {Icon && (
            <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-xl">
              <Icon size={21} />
            </div>
          )}
        </div>

        <div className="flex min-h-[300px] flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#007c89] dark:text-cyan-300">
            {member.role}
          </p>

          <h3 className="mt-2 font-serif text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
            {member.name}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-300">
            {member.desc}
          </p>

          <div className="mt-6 flex items-center gap-4">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Mail ${member.name}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#007c89] text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            )}

            {member.portfolio && (
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${member.name} portfolio`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111827] text-white shadow-lg shadow-slate-500/25 transition-all duration-300 hover:scale-110 dark:bg-white dark:text-[#111827]"
              >
                <Globe size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
function CoreTeamCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827] dark:shadow-black/30"
    >
      <div className="h-[300px] overflow-hidden rounded-b-[2rem] bg-[#e9edf2] sm:h-[340px]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold tracking-wide text-slate-900 dark:text-white">
          {member.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
          {member.desc}
        </p>
        {member.portfolio && (
          <a
            href={member.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} Portfolio`}
            className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#007c89] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#006a75]"
          >
            <Globe size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb] dark:bg-[#050816]">
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pt-32">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#007c89] dark:text-cyan-300 sm:tracking-[0.38em]">
              OUR TEAM
            </p>

            <h1
              className="mt-6 text-[clamp(2rem,9vw,2.5rem)] font-black leading-[1.12] text-[#111827] dark:text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Leadership That Drives
              <span className="block text-[#007c89] dark:text-cyan-300">
                Digital Growth
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-slate-600 dark:text-zinc-400 sm:text-base">
              Meet the professionals behind TechNova Solutions — a team focused
              on strategy, development, innovation, and reliable digital
              execution for modern businesses.
            </p>
          </motion.div>

          <div>
            <div className="mb-10">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#007c89] dark:text-cyan-300">
                Leadership Team
              </p>

              <h2 className="mt-3 text-2xl font-black text-[#111827] dark:text-white sm:text-4xl">
                Founder & Co-Founder
              </h2>
            </div>

            <div className="grid w-full gap-6 md:grid-cols-2">
              {leadershipTeam.map((member, index) => (
                <LeadershipCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="mb-10 flex items-center gap-5">
            <div className="h-px flex-1 bg-slate-300 dark:bg-white/10" />
            <h2 className="text-center text-sm font-black uppercase tracking-[0.45em] text-[#007c89] dark:text-cyan-300 sm:text-base">
              Core Team
            </h2>
            <div className="h-px flex-1 bg-slate-300 dark:bg-white/10" />
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreTeam.map((member, index) => (
              <CoreTeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:bg-[#111827] dark:shadow-black/30 sm:mt-24 sm:flex-row sm:p-10"
        >
          <div className="flex items-center gap-5 text-center sm:text-left">
            <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#007c89] text-white shadow-lg shadow-cyan-400/30 sm:flex">
              <Send size={28} />
            </div>

            <div>
              <h2 className="text-xl font-black text-[#111827] dark:text-white sm:text-3xl">
                Ready to build your next digital product?
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-zinc-400">
                Let’s work together to create modern websites, applications, and
                digital experiences that move your business forward.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ffd213] px-6 py-4 text-sm font-black text-black shadow-lg shadow-yellow-300/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffdd35] active:scale-95 sm:w-auto sm:px-8"
          >
            Contact Us
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
