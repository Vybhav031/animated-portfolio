import { motion } from "framer-motion";
import { Sidebar } from "../layout/sidebar";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/assets";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-24">
      <Sidebar />
      <article className="max-w-7xl ml-16 flex items-center justify-between h-full p-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="none md:inline font-bold text-white uppercase"
        >
          VAIBHAV VAGHELA
        </motion.span>

        <div className="flex gap-5 items-center">
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://github.com/Vybhav031"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://www.linkedin.com/in/vaibhav-vaghela-415b341a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://www.instagram.com/whybhav31/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </motion.a>
        </div>
      </article>
    </nav>
  );
};

