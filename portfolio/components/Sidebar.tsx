import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="">
      <Image
        src="https://avatars.githubusercontent.com/u/99901538?v=4"
        alt="userAvatar"
        className="mx-auto rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Luan </span>Silva
      </h3>
      <p className="px-2 py-1 my-3 font-bold bg-gray-200 rounded-full dark:bg-dark-200">
        Front End Developer
      </p>
      <a
        href="/assets/cv.pdf"
        download="Curriculo Luan.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        Download CV <GiTie className="w-6 h-6" />
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.linkedin.com/in/luancmsilva/">
          <FiLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/999luan">
          <FiGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2 className='my-2'">
          <GoLocation />
          <span>SC, Brasil</span>
        </div>
        <p className="my-2">luancsilva@protonmail.com</p>
        <p className="my-2">+55 43 988504240</p>
      </div>
      {/* emailme */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-800 focus:outline-none"
        onClick={() => window.open("mailto:luancsilva@protonmail.com")}
      >
        Enviar Email
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-800"
      >
        Modo Noturno
      </button>
    </div>
  );
};

export default Sidebar;
