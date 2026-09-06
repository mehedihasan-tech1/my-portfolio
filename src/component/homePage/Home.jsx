import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandGithub,
  TbArrowRight,
  TbDownload,
  TbMouse,
} from "react-icons/tb";

const Home = () => {
  return (
    <section id="home" className="px-6 w-full mb-32">
      {/* hero section */}
      <div className="relative py-6 w-full sm:flex flex-col  md:flex-row md:justify-between md:items-start">
        {/* hero content bg-glow section */}
        <div className="absolute top-16 left-0 w-90 h-120 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="px-6 py-4 sm:py-8">
          <div className=" px-4 py-1.5 mb-6 mt-6 flex items-center gap-1.5 w-fit border bg-white/10 border-white/10 rounded-full sm:justify-center">
            <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
            <p className="text-gray-300 text-sm">Full Stack Developer</p>
          </div>
          <h1 className="mt-4 text-3xl text-nowrap font-semibold leading-tight sm:text-5xl">
            I build modern <br />
            <span className="text-blue-600 text-nowrap">
              web{" "}
              <span className="bg-linear-to-r from-purple-800 via-purple-500 to-white bg-clip-text text-transparent">
                expriences
              </span>
            </span>
            <br /> that make impact.
          </h1>
          {/* brief introduction of me */}
          <p className="max-w-90 mt-6 text-gray-400">
            I am a MERN stack developer who loves building beautiful,
            interactive and performant websites with modern UI/UX
          </p>
          {/* social link */}
          <div className="z-40 mt-6 flex items-center gap-8">
            <a
              href="https://www.facebook.com/profile.php?id=61593565809667&mibextid=rS40aB7S9Ucbxw6v"
              className="hover:scale-110 cursor-pointer">
              <TbBrandFacebook size={26} strokeWidth={1.3} />
            </a>
            <a
              href="#"
              className="hover:scale-110 cursor-pointer">
              <TbBrandInstagram size={26} strokeWidth={1.3} />
            </a>
            <a
              href="https://www.linkdin.com/in/mehedi-hasan-918b54430?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="hover:scale-110 cursor-pointer">
              <TbBrandLinkedin size={26} strokeWidth={1.3} />
            </a>
            <a
              href="https://github.com/mehedihasan-tech1"
              className="hover:scale-110 cursor-pointer">
              <TbBrandGithub size={26} strokeWidth={1.3} />
            </a>
          </div>
          {/* hero section button */}
          <div className="mt-8 flex gap-3">
            {/* button */}
            <button className="w-40 sm:px-4 sm:py-2 text-sm text-nowrap md:text-md flex items-center justify-around gap-2 rounded-xl bg-linear-to-br from-blue-700 to-purple-500 from-50% hover:scale-102 transition duration-100 shadow-lg cursor-pointer">
              <a href="https://github.com/mehedihasan-tech1/All-web-project-link">
                View My Work
              </a>
              <TbArrowRight
                size={26}
                strokeWidth={1.5}
                className="text-xl mt-1"
              />
            </button>
            {/* button */}
            <button className="w-40 sm:px-4 sm:py-2 text-sm text-nowrap md:text-md flex items-center justify-around gap-2 border rounded-xl border-indigo-400/30 bg-darkviolet/10 backdrop-blur-4xl hover:bg-darkviolet/30 hover:scale-102 transition duration-100 shadow-lg cursor-pointer">
              <a href="#" className="cursor-pointer">
                Download CV
              </a>
              <TbDownload
                size={26}
                strokeWidth={1.5}
                className="text-xl mt-1 cursor-pointer"
              />
            </button>
          </div>
        </div>
        {/* hero image */}
        <div className="p-6 w-80 h-80 border-32 border-purple-800/5 bg-darkviolet/40 md:translate-y-1/3 rounded-full sm:w-100 sm:h-100">
          <img src="src/assets/hero.png" alt="asd" />
        </div>
      </div>
      {/* scroll icon */}
      <div className="mt-22 hidden md:flex justify-center items-center gap-2.5">
        <h1>Scroll Down</h1>
        <TbMouse size={26} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Home;
