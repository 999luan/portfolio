import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";
import { BsCircleFill, BsLightbulb } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { SiAudiomack } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

import { IProject, IService, Iskill } from "./type";

export const services: IService[] = [
  {
    Icon: CgWebsite,
    title: "Desenvolvedor Front-End",
    about:
      "Posso criar páginas responsivas e limpas usando <b> HTML</b>, <b>CSS</b>, <b>JavaScript</b> e <b>React.js</b>. ",
  },

  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about: "Crio e planejo interfaces utilizando <b>Figma</b>. ",
  },

  {
    Icon: FaServer,
    title: "Desenvolvedor Back-End",
    about: "Conhecimento básico em banco de dados. Estudos em nível inicial.",
  },
  {
    Icon: BsLightbulb,
    title: "Criador de conteúdo",
    about: "Eu sou uma fonte infinita de ideias.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "Posso criar uma API básica usando <b>Node API</b>.",
  },
  {
    Icon: CgGames,
    title: "Game Developer",
    about: "Um hobby? Por enquanto!",
  },
  {
    Icon: SiAudiomack,
    title: "AudioVisual",
    about:
      "Illustrator, DaVinci e qualquer software de áudio existente no mercado.",
  },
  {
    Icon: RiComputerLine,
    title: "Scrum Master",
    about: "Gestão de squad e adaptabilidade a qualquer situação.",
  },
];

export const languages: Iskill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },

  {
    Icon: BsCircleFill,
    name: "React",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "GDScript",
    level: "80",
  },
];

export const tools: Iskill[] = [
  {
    Icon: BsCircleFill,
    name: "DaVinci",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Audio Softwares",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Unity",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Godot",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Blender",
    level: "35",
  },
];

export const projects: IProject[] = [
  {
    id: 9,
    name: "Loja Virtual completa",
    description:
      "completamente funcional, backend de facil atualização, responsivo e integrado em plataforma de pagamento",
    image_path: "/images/techwear.png",
    deployed_url: "https://nextjsshop-red.vercel.app/",
    github_url: "https://github.com/999luan/shopnextjs",
    category: ["JavaScript", "React", "NextJs"],
    key_techs: ["NextJs", "React", "TypeScript", "Sanity", "Firebase"],
  },
  {
    id: 8,
    name: "Movimentação/Colisão",
    description: "Sistema de movimentação e colisão em C#",
    image_path: "/images/portfoliomov.gif",
    deployed_url: "nao",
    github_url: "nao",
    category: ["Unity"],
    key_techs: ["Unity", "C#"],
  },
  {
    id: 7,
    name: "Ferramenta de Desenho",
    description:
      "Ferramenta de desenho inspirada no Paint, criada utilizando HTML, CSS e JavaScript.",
    image_path: "/images/desenhoimg.png",
    deployed_url: "https://999luan.github.io/paint/",
    github_url: "https://github.com/999luan/paint/",
    category: ["JavaScript"],
    key_techs: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: 6,
    name: "RogueLite Novel",
    description: "RPG 2D roguelike feito em GDScript.",
    image_path: "/images/roguelitenovel.png",
    deployed_url: "nao",
    github_url: "nao",
    category: ["Godot"],
    key_techs: ["GDScript"],
  },
  {
    id: 5,
    name: "Gerador Procedual",
    description:
      "Gera procedualmente configurações de terreno com condições e elementos totalmente customizáveis, feito em C#.",
    image_path: "/images/gerador.png",
    deployed_url: "nao",
    github_url: "nao",
    category: ["Unity"],
    key_techs: ["Unity", "C#"],
  },
  {
    id: 4,
    name: "Sistema de login + Tasklist",
    description:
      "Lista de tarefas com sistema de cadastro, login, formulários e requisições utilizando Axios.",
    image_path: "/images/iddev.png",
    deployed_url: "https://react-entrega-s2-kenzie-hub-999luan.vercel.app/",
    github_url: "https://github.com/999luan/idDevl",
    category: ["React", "JavaScript"],
    key_techs: ["JavaScript", "React", "Axios"],
  },
  {
    id: 3,
    name: "Portfólio responsivo",
    description: "Portfólio responsivo, feito utilizando React.",
    image_path: "/images/port.png",
    deployed_url: "https://portfolio-reiluan.vercel.app/",
    github_url: "https://github.com/999luan/react-portifolio",
    category: ["JavaScript", "React"],
    key_techs: ["JavaScript", "React", "ReactDom"],
  },
  {
    id: 2,
    name: "Citadel Archives",
    description: "Projeto básico que busca dados direto em API pública.",
    image_path: "/images/citadel.png",
    deployed_url: "https://rickmortypage2.vercel.app/",
    github_url: "https://github.com/999luan/idDevl",
    category: ["React", "JavaScript"],
    key_techs: ["Javascript", "React"],
  },
  {
    id: 1,
    name: "Formulário YUP",
    description: "Formulário de cadastro utilizando YUP.",
    image_path: "/images/form.png",
    deployed_url: "nao",
    github_url: "nao",
    category: ["React"],
    key_techs: ["JavaScript", "React", "Form YUP"],
  },
];
