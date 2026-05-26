import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Mentor Platform",
    category: "AI Product",
    desc: "AI-powered learning platform with mentorship, smart doubt solving, and personalized learning.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Real Estate Platform",
    category: "Web Platform",
    desc: "Modern property platform for listings, scheduling, and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Business Dashboard",
    category: "Analytics",
    desc: "Analytics dashboard for tracking reports, growth metrics, and business insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile App",
    desc: "Fitness application with workout tracking, progress analytics, and nutrition guidance.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f6f9fc] px-4 py-16 text-[#10182f] transition-colors duration-300 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#007185]/10 blur-3xl dark:bg-[#007185]/20" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl dark:bg-[#ffd814]/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="text-xs font-black uppercase tracking-[0.22em] text-[#007185] dark:text-[#ffd814] sm:text-base sm:tracking-[0.36em]">
            Completed Projects
          </div>

          <h2 className="mt-6 font-['Poppins'] text-[clamp(2rem,8vw,2.5rem)] font-black leading-[1.08] text-[#10182f] dark:text-white sm:mt-7 sm:text-6xl lg:text-7xl">
            Projects designed for{" "}
            <span className="text-[#007185] dark:text-[#ffd814]">
              business growth.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
            Explore some of our successfully completed projects built with
            modern technology, clean UI/UX, and scalable architecture.
          </p>
        </motion.div>

        <div className="mt-12 grid w-full gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="group w-full max-w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-md transition-all duration-500 hover:border-[#007185]/30 hover:shadow-2xl dark:border-white/10 dark:bg-[#131921] dark:hover:border-[#ffd814]/40 sm:rounded-[30px]"
            >
              <div className="relative h-[190px] overflow-hidden sm:h-[260px] lg:h-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10182f]/90 via-[#10182f]/20 to-transparent" />

                <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#007185] shadow-md backdrop-blur-md dark:bg-[#0f1111]/80 dark:text-[#ffd814] sm:left-6 sm:top-6 sm:max-w-[calc(100%-3rem)] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                  {project.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="font-['Poppins'] text-2xl font-black leading-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <p className="text-sm leading-7 text-slate-600 dark:text-white/60 sm:text-base">
                  {project.desc}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-3 text-sm font-black text-[#007185] transition-all duration-300 group-hover:gap-4 dark:text-[#ffd814] sm:mt-7"
                >
                  View Project
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="h-[4px] w-0 bg-[#007185] transition-all duration-500 group-hover:w-full dark:bg-[#ffd814]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            className="group inline-flex w-full items-center justify-center gap-4 rounded-xl bg-[#131921] px-6 py-4 text-sm font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#007185] dark:bg-[#ffd814] dark:text-[#111827] dark:hover:bg-[#f7ca00] sm:w-auto sm:px-8"
          >
            View All Projects
            <ArrowRight
              size={20}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
