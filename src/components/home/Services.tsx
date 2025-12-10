// src/components/home/Services.tsx
import { motion } from "framer-motion";
import { servicesData } from "@/data/services.data";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const Services = () => {
  return (
    <section id="services" className="pt-10 pb-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.25em] text-sm text-purple-300">
            Skills & Stack
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What I <span className="text-orange-400">Build With</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            A mix of AI, data, and modern web technologies I use across projects
            like Bruce County Smart Beach, IMDB analysis, and this portfolio.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {servicesData.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative h-full rounded-3xl bg-white/5 border border-white/10 
                         px-6 py-8 flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.4)] 
                         backdrop-blur-sm transition-colors hover:border-purple-400/60"
            >
              {/* Glow circle */}
              <div className="absolute -top-6 left-8 w-10 h-10 rounded-full border border-purple-300/60" />

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-purple-200 mb-3">
                {service.highlight}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-purple-600/30 
                               text-purple-100 border border-purple-500/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
