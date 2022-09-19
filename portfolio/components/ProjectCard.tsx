// import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IProject } from "../type";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { projects } from "../data";
import { motion } from "framer-motion";
import { fadeinUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    description,
    category,
    deployed_url,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  const [disponivel, setDisponivel] = useState(true);

  const handlerDisponivel: Function = (deployed_url: string, id: number) => {
    if (deployed_url == "nao") {
      setDisponivel(false);
      setShowDetail(id);
      console.log(deployed_url);
      return;
    }
    setShowDetail(id);
  };

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => handlerDisponivel(github_url, id)}
        layout="responsive"
        height="150"
        width="300"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeinUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="300"
                width="600"
              />
            </motion.div>
            {disponivel ? (
              <motion.div
                variants={fadeinUp}
                className="flex justify-center my-4 space-x-3"
              >
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Projeto</span>
                </a>
              </motion.div>
            ) : (
              <div className="flex justify-center my-4 space-x-3">
                <h3 className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                  <AiFillGithub /> <span>Indisponivel</span>
                </h3>
                <h3 className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                  <AiFillProject /> <span>Indisponivel</span>
                </h3>
              </div>
            )}
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={stagger}
              initial="initial"
              animate="animate"
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3
              variants={stagger}
              initial="initial"
              animate="animate"
              className="mb-3 font-medium"
            >
              {description}
            </motion.h3>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
