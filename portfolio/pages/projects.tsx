import { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectData } from "../data";
import { Category } from "../type";
import { deployed_url } from "../type";
import { motion } from "framer-motion";
import { fadeinUp, routeAnimation, stagger } from "../animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState("Todos");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "Todos") => {
    if (category === "Todos") {
      setProjects(projectData);
      setActive(category);
      return;
    }
    const newArray = projectData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeinUp}
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
