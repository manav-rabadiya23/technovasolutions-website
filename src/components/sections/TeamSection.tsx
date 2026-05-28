import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Crown,
  Mail,
  MessageCircle,
  Send,
  Smartphone,
  UserRoundCheck,
  Users,
} from "lucide-react";

type Member = {
  name: string;
  role: string;
  image: string;
  desc: string;
  icon: React.ElementType;
};

const leadershipTeam: Member[] = [
  {
    name: "Suryansh Soni",
    role: "Founder",
    image: "founder.jpeg",
    desc: "Leading TechNova Solutions with innovation, strategic vision, and future-ready digital transformation.",
    icon: Crown,
  },
  {
    name: "Neha Sharma",
    role: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
    desc: "Driving operations, execution, and business growth through smart planning and leadership.",
    icon: UserRoundCheck,
  },
];

const teamLead: Member[] = [
  {
    name: "Rohit Mehta",
    role: "Team Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
    desc: "Managing workflows, guiding developers, and ensuring high-quality project delivery.",
    icon: Users,
  },
];

const webDevelopers: Member[] = [
  {
    name: "Karan Joshi",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
    desc: "Building premium websites with responsive layouts, performance optimization, and modern UI systems.",
    icon: Code2,
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",
    desc: "Transforming concepts into interactive digital experiences with clean frontend architecture.",
    icon: Code2,
  },
];

const appDevelopers: Member[] = [
  {
    name: "Sagar Vora",
    role: "App Developer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop",
    desc: "Creating scalable mobile applications focused on usability, speed, and business performance.",
    icon: Smartphone,
  },
  {
    name: "Riya Shah",
    role: "Mobile Developer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=900&auto=format&fit=crop",
    desc: "Designing mobile experiences that feel smooth, reliable, and modern across all devices.",
    icon: Smartphone,
  },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#007c89] dark:text-cyan-300 sm:tracking-[0.32em]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-black text-[#111827] dark:text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function MemberCard({ member, index }: { member: Member; index: number }) {
  const Icon = member.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group w-full max-w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827] dark:shadow-black/30 sm:rounded-[26px]"
    >
      <div className="relative h-[420px] overflow-hidden rounded-[32px] bg-[#e9edf2]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-xl">
          <Icon size={22} />
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#007c89] dark:text-cyan-300">
          {member.role}
        </p>

        <h3 className="mt-2 text-2xl font-black tracking-tight text-[#111827] dark:text-white">
          {member.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-300">
          {member.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb] dark:bg-[#050816]">
      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 lg:px-8 lg:pt-16">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          {/* HERO */}
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
              <span className="block leading-[1.12] text-[#007c89] dark:text-cyan-300">
                {" "}
                Digital Growth
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-slate-600 dark:text-zinc-400 sm:text-base">
              Meet the professionals behind TechNova Solutions — a team focused
              on strategy, development, innovation, and reliable digital
              execution for modern businesses.
            </p>
          </motion.div>

          {/* LEADERSHIP */}
          <div className="mt-16 grid w-full gap-8 sm:mt-20 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left Creative Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="relative w-full max-w-full overflow-hidden rounded-[24px] bg-[#111827] p-6 text-white shadow-2xl shadow-slate-300/60 dark:shadow-black/30 sm:rounded-[30px] sm:p-8"
            >
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 backdrop-blur-xl">
                  <MessageCircle size={26} />
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-cyan-300 sm:tracking-[0.3em]">
                  Company Vision
                </p>

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
                      className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-semibold backdrop-blur-xl"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffd213]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Leadership Cards */}
            <div>
              <SectionTitle
                eyebrow="Leadership Team"
                title="Founder & Co-Founder"
              />

              <div className="grid w-full gap-6 md:grid-cols-2">
                {leadershipTeam.map((member, index) => (
                  <MemberCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* TEAM LEAD */}
          <div className="mt-16 sm:mt-24">
            <SectionTitle eyebrow="Core Team" title="Team Lead" />

            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamLead.map((member, index) => (
                <MemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* WEB TEAM */}
          <div className="mt-16 sm:mt-24">
            <SectionTitle eyebrow="Development Team" title="Web Developers" />

            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
              {webDevelopers.map((member, index) => (
                <MemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* APP TEAM */}
          <div className="mt-16 sm:mt-24">
            <SectionTitle eyebrow="Mobile Team" title="App Developers" />

            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
              {appDevelopers.map((member, index) => (
                <MemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mt-16 flex w-full max-w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:bg-[#111827] dark:shadow-black/30 sm:mt-24 sm:flex-row sm:rounded-[30px] sm:p-10"
          >
            <div className="flex min-w-0 items-center gap-5 text-center sm:text-left">
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
