const Skills = () => {
  return (
    <>
      <section id="skills" className="relative px-6 mt-12 mb-16">
        <h1 className="px-6 text-2xl font-semibold">
          Tech I work with (Skills)
        </h1>
        <div className="px-6 mb-5 w-full mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none lg:flex justify-center flex-wrap gap-6">
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/HTML5.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">HTML5</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/CSS3.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">CSS3</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img
              src="src/assets/Tailwind CSS.svg"
              alt=""
              className="w-10 h-10"
            />
            <h1 className="text-sm">Tailwind</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/React.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">React</h1>
          </div>
          <div className="hidden w-24 h-32 bg-white/5 rounded-2xl sm:flex flex-col items-center justify-around">
            <img src="src/assets/JavaScript.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">JavaScript</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/Python.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">Python</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/Node.js.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">Node.js</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/Express.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">Express.js</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/MongoDB.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">MongoDB</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/Pandas.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">Pandas</h1>
          </div>
          <div className="w-24 h-32 bg-white/5 rounded-2xl flex flex-col items-center justify-around">
            <img src="src/assets/Numpy.svg" alt="" className="w-10 h-10" />
            <h1 className="text-sm">Numpy</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
