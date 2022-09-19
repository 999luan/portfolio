import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeinUp, routeAnimation } from "../animations";
const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-1">
        <motion.div variants={fadeinUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Formação</h5>
          <div>
            <h5 className="my-2 font-bold text-x1">Front-end Developer</h5>
            <p className="font-semibold">
              Kenzie Academy Brasil(nov/21-jul/22)
            </p>
            <p className="my-3">
              Curso de 1.000 horas de Desenvolvimento Web que abrange a
              tecnologia Front End, além de soft skills necessárias para o
              mercado de trabalho. Entre as linguagens e tecnologias aprendidas,
              estão HTML5, CSS3, JavaScript (ES6+),e React,
            </p>
          </div>
          <div>
            <h5 className="my-2 font-bold text-x1">Scrum Master/ Agilista</h5>
            <p className="font-semibold">Biohacking Agile(jun/21-jul/21)</p>
            <p>Curso de 60 horas de capacitação em metodologias ágeis.</p>
          </div>
          <div>
            <h5 className="my-2 font-bold text-x1">Filosofo</h5>
            <p className="font-semibold">Unicesumar(2020-2025)</p>
            <p>Formação universitaria em filosofia</p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 font-bold text 2x1">Linguagens & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 font-bold text 2x1">Ferramentas & Softwares</h5>

          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>{" "}
    </motion.div>
  );
};

export default resume;
