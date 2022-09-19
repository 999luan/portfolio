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
    title: "Frontend Dev",
    about:
      "Posso criar paginas responsivas, e limpas usando <b> HTML</b><b>CSS</b>,<b>Javascript</b>, e <b>React.js</b>. ",
  },

  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "Crio e planejo interfaces utilizando <b>Figma</b>. ",
  },

  {
    Icon: FaServer,
    title: "Backend  Dev",
    about: "Conhecimento basico de banco de dados, estudos em nivel inicial.",
  },
  {
    Icon: BsLightbulb,
    title: "Criador de conteudo",
    about: "Eu sou uma fonte infinita de idéias",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "Posso criar uma Api basica usando <b>Node API</b>.",
  },
  {
    Icon: CgGames,
    title: "Game Dev",
    about: "Um hobby? por enquanto!",
  },
  {
    Icon: SiAudiomack,
    title: "AudioVisual",
    about:
      "Illustrator, Davinci, e qualquer software de audio existente no mercado!",
  },
  {
    Icon: RiComputerLine,
    title: "Scrum Master",
    about: "Gestão de squad, adaptabilidade a qualquer situação.",
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
    name: "Java Script",
    level: "60",
  },

  {
    Icon: BsCircleFill,
    name: "React",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "GDscript",
    level: "80",
  },
];

export const tools: Iskill[] = [
  {
    Icon: BsCircleFill,
    name: "Davinci",
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
    id: 1,
    name: "RogueLite Novel",
    description: "RPG 2D roguelike feito em GDscript",
    image_path: "/images/roguelitenovel.png",
    deployed_url: "nao",
    github_url: "nao",
    category: ["Godot"],
    key_techs: ["GdScript"],
  },
  {
    id: 2,
    name: "Gerador Procedual",
    description:
      "Gera procedualmente configurações de terreno com condições e elementos totalmente customizaveis.",
    image_path: "/images/gerador.png",
    deployed_url: "nao",
    github_url: "nao",
    category: ["Unity"],
    key_techs: ["Unity", "C#"],
  },
  {
    id: 3,
    name: "sistema de login + tasklist",
    description:
      "Lista de tarefas com sistema de cadastro, Login, formularios e requisições utilizando Axios.",
    image_path: "/images/iddev.png",
    deployed_url: "https://react-entrega-s2-kenzie-hub-999luan.vercel.app/",
    github_url: "https://github.com/999luan/idDevl",
    category: ["React", "Javascript"],
    key_techs: ["Javascript", "React", "Axios"],
  },
  {
    id: 3,
    name: "Portfolio responsivo",
    description: "Portfolio responsivo, feito utilizando react",
    image_path: "/images/port.png",
    deployed_url: "https://portfolio-reiluan.vercel.app/",
    github_url: "https://github.com/999luan/react-portifolio",
    category: ["Javascript", "React"],
    key_techs: ["Javascript", "React", "ReactDom"],
  },
  {
    id: 4,
    name: "Citadel Archives",
    description: "Projeto basico que busca dados direto em API publica",
    image_path: "/images/citadel.png",
    deployed_url: "https://rickmortypage2.vercel.app/",
    github_url: "https://github.com/999luan/idDevl",
    category: ["React", "Javascript"],
    key_techs: ["Javascript", "React"],
  },
  {
    id: 5,
    name: "Formulario YUP",
    description: "Formulario de cadastro utilizando YUP",
    image_path: "/images/form.png",
    deployed_url: "https://form-reiluan.vercel.app/",
    github_url: "https://github.com/999luan/YupForm",
    category: ["React"],
    key_techs: ["Javascript", "React", "YUPform"],
  },
];
