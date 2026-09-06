import {
  TbArrowRight,
  TbBrandPython,
  TbFolderCheck,
  TbTerminal2,
} from "react-icons/tb";
const About = () => {
  return (
    <>
      <section id="about" className="px-6 mb-12">
        <div className="px-6 mb-5 w-full items-center justify-between md:flex">
          {/* left side about content */}
          <div className="md:max-w-1/2">
            <div className="flex items-center gap-2">
              <div
                className="w-16 h-16 border border-indigo-400/40 text-2xl bg-darkviolet rounded-full flex items-center justify-center
              ">
                M
              </div>
              <h1 className="text-2xl font-semibold">About Me</h1>
            </div>
            <p className="mt-6 md:max-w-137.5">
              Hi, I'm Mehedi Hasan. I'm a MERN Stack web and Python developer. I
              build several types of MERN project. On the otherhand I build
              several project on specific topic like tailwindcss project,
              express.js project etc. I already completed 10+ web and python
              project.
            </p>
            <button className="mt-6 mb-6 px-4 py-2 flex items-center justify-around gap-2 border rounded-xl border-indigo-400/30 bg-darkviolet/10 hover:bg-darkviolet/30 transition duration-100">
              <a href="#">More About Me</a>
              <TbArrowRight
                size={26}
                strokeWidth={1.5}
                className="text-xl mt-1"
              />
            </button>
          </div>
          {/* right side about content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-10">
            <div className="w-70 sm:w-46 h-24 bg-white/5 rounded-2xl flex items-center justify-around">
              <TbTerminal2 size={26} />
              <h1 className="text-md text-left">
                fresher <br />
                web developer
              </h1>
            </div>
            <div className="w-70 sm:w-46 h-24 bg-white/5 rounded-2xl flex items-center justify-around">
              <TbFolderCheck size={26} />
              <h1 className="text-md text-left">
                20+ web
                <br />
                Project Completed
              </h1>
            </div>
            <div className="w-70 sm:w-46 h-24 bg-white/5  rounded-2xl flex items-center justify-around">
              <TbBrandPython size={26} />

              <h1 className="text-md text-left">
                Python Developer
                <br />
                Aspiring ML/AI
              </h1>
            </div>
            <div className="w-70 sm:w-46 h-24 bg-white/5  rounded-2xl flex items-center justify-around">
              <TbFolderCheck size={26} />
              <h1 className="text-md text-left">
                20+ python
                <br />
                Project Completed
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
