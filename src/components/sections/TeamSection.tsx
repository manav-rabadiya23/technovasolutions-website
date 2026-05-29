import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Mail,
  MessageCircle,
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
  phone?: string;
};

const leadershipTeam: Member[] = [
  {
    name: "Suryansh Soni",
    role: "Founder",
    image: "founder.jpeg",
    desc: "Leading TechNova Solutions with innovation, strategic vision, and future-ready digital transformation.",
    icon: Crown,
    email: "Suryansh.technovasolutions@gmail.com",
    phone: "9601451370",
  },
  {
    name: "ABC",
    role: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
    desc: "Driving operations, execution, and business growth through smart planning and leadership.",
    icon: UserRoundCheck,
    email: "cofounder@technovasolutions.in",
    phone: "919999999999",
  },
];

const coreTeam: Member[] = [
  {
    name: "Shreya Rajput",
    image: "shreya-rajput.png",
    desc: "Managing Software Requirement Specifications (SRS), workflow planning, and project documentation to streamline operations and support successful project delivery.",
  },
  {
    name: "Tanis Patel",
    image: "tanis-patel.png",
    desc: "Ensuring smooth coordination, structured workflows, and efficient project management across initiatives.",
  },
  {
    name: "Pallavi Ramoliya",
    image: "pallavi-ramoliya.jpg",
    desc: "Contributing to organizational growth through collaboration, responsibility, and a results-driven mindset.",
  },
  {
    name: "Krisha Patel",
    image: "krisha patel.jpg",
    desc: "Committed to helping transform ideas into impactful outcomes through dedication and innovation.",
  },
  {
    name: "Manav Rabadiya",
    image: "manav-rabadiya.jpeg",
    desc: "Focused on delivering value through teamwork, consistency, and continuous learning.",
  },
  {
    name: "Kush Patel",
    image: "kush-patel.jpeg",
    desc: "Supporting the team with fresh perspectives, determination, and a passion for excellence.",
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
      <div className="relative h-[340px] overflow-hidden rounded-b-[2rem] bg-[#e9edf2] sm:h-[400px]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {Icon && (
          <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-xl">
            <Icon size={22} />
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#007c89] dark:text-cyan-300">
          {member.role}
        </p>

        <h3 className="mt-2 text-2xl font-black tracking-tight text-[#111827] dark:text-white">
          {member.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-300">
          {member.desc}
        </p>

        <div className="mt-5 flex items-center gap-4">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Mail ${member.name}`}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007c89] text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
            >
              <Mail size={22} />
            </a>
          )}

          {member.phone && (
            <a
              href={`https://wa.me/${member.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message ${member.name}`}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle size={22} />
            </a>
          )}
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
        <h3 className="text-2xl font-black tracking-tight text-[#111827] dark:text-white">
          {member.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
          {member.desc}
        </p>
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

          <div className="mt-16 grid w-full gap-8 sm:mt-20 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-[#111827] p-6 text-white shadow-2xl shadow-slate-300/60 dark:shadow-black/30 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
                    <img
                      src="/logo.jpeg"
                      alt="TechNova Solutions"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                    COMPANY VISION
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
                  Building trusted digital experiences through innovation.
                </h2>

                <p className="mt-6 text-sm leading-7 text-slate-300">
                  We combine creativity, technology, and business strategy to
                  create solutions that help brands grow in the modern digital
                  world.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Professional Execution",
                    "Modern Technology Stack",
                    "Client-Focused Development",
                    "Scalable Digital Solutions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm font-semibold backdrop-blur-xl"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffd213]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
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
                  Let’s work together to create modern websites, applications,
                  and digital experiences that move your business forward.
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
        </div>
      </section>
    </main>
  );
}
