import { motion } from "framer-motion";

const projects = [
    {
      title: "Smart Beach - Bruce County",
      description:
        "Built an AI-powered system using YOLOv8, Faster R-CNN, and Detectron2 for real-time beach crowd monitoring. Improved detection using live sensor inputs and edge processing.",
      tags: ["Python", "YOLOv8", "Faster R-CNN", "Detectron2", "Edge AI"],
    },
  ];  

export const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen snap-center bg-hero-gradient px-4 py-20 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">My Projects</h2>
      <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
