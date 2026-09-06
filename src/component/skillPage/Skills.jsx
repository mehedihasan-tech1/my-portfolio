import HTML5 from "../../assets/HTML5.svg";
import CSS3 from "../../assets/CSS3.svg";
import Tailwind from "../../assets/Tailwind CSS.svg";
import React from "../../assets/React.svg";
import JavaScript from "../../assets/JavaScript.svg";
import Python from "../../assets/Python.svg";
import Node from "../../assets/Node.js.svg";
import Express from "../../assets/Express.svg";
import MongoDB from "../../assets/MongoDB.svg";
import Pandas from "../../assets/Pandas.svg";
import Numpy from "../../assets/Numpy.svg";

const Skills = () => {
  return (
    <>
      <section id="skills" className="relative px-6 mt-12 mb-16">
        <h1 className="px-6 text-2xl font-semibold">
          Tech I work with (Skills)
        </h1>
        <div className="px-6 mb-5 w-full mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none lg:flex justify-center flex-wrap gap-6">
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={HTML5} alt="" className="w-10 h-10" />
            <h1 className="text-sm">HTML5</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={CSS3} alt="" className="w-10 h-10" />
            <h1 className="text-sm">CSS3</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={Tailwind} alt="" className="w-10 h-10" />
            <h1 className="text-sm">Tailwind</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={React} alt="" className="w-10 h-10" />
            <h1 className="text-sm">React</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={Python} alt="" className="w-10 h-10" />
            <h1 className="text-sm">Python</h1>
          </div>
          <div className="hidden w-24 h-32 bg-white/5 rounded-2xl sm:flex flex-col items-center justify-around">
            <img src={JavaScript} alt="" className="w-10 h-10" />
            <h1 className="text-sm">JavaScript</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={Node} alt="" className="w-10 h-10" />
            <h1 className="text-sm">Node.js</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={Express} alt="" className="w-10 h-10" />
            <h1 className="text-sm">Express.js</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={MongoDB} alt="" className="w-10 h-10" />
            <h1 className="text-sm">MongoDB</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={Pandas} alt="" className="w-10 h-10" />
            <h1 className="text-sm">Pandas</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src={Numpy} alt="" className="w-10 h-10" />
            <h1 className="text-sm">Numpy</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
