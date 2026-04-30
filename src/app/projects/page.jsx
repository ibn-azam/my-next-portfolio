"use client"
import { motion } from "framer-motion";

const ProjectsPage = () => {
    return (
        <div className=" min-h-screen bg-[#060d1a]">
      <main className="container mx-auto w-full text-5xl text-left px-40 py-20 ">
        
         <motion.h2
      className="text-4xl font-bold"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      This is Projects Page
    </motion.h2>
        
      </main>
    </div>
    );
};

export default ProjectsPage;