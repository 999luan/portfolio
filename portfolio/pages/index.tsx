import {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext,
} from "next";
import { fadeinUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";

import Head from "next/head";

const index = ({ endpoint }) => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Portfolio | Luan Silva</title>
      </Head>
      <h5 className="my-3 font-medium">
      Desenvolvedor, artista e filósofo dedicado a reformar, criar e aprimorar estruturas que proporcionem desenvolvimento humano e inovação social através da tecnologia.

        3 anos atuando como engenheiro de áudio e realizando trabalhos sociais ao produzir gratuitamente artistas periféricos.

        Dediquei-me ao entendimento humano como filósofo, apliquei como agilista, e como desenvolvedor finalmente começo a tirar do papel centenas de textos e ideias desenvolvidos ao longo dos anos.

        Busco ser a mudança que espero no mundo, e se depender de meus esforços, eu serei.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          O que eu sei fazer?
        </h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-3 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeinUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};

//exemplo
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   console.log("server", services);
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
