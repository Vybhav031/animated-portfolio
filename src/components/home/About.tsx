import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f1b] to-[#14141f] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">About Me</h2>

        <motion.p
          className="text-base md:text-lg text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm <strong>Vaibhav Vaghela</strong>, an AI/ML developer with 2+ years of experience
          in neural networks, reinforcement learning, and real-world projects like the Bruce County Smart
          Beach initiative. I love solving real problems through intelligent systems and turning data into
          meaningful impact.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-400 mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          While my strength lies in Python and back-end development, I'm continuously growing in front-end 
          technologies to craft complete, beautiful user experiences.
        </motion.p>
      </div>
    </section>
  );
};
