import {
  TbExternalLink,
} from "react-icons/tb";
const Project = () => {
  return (
    <>
      <section id="project" className="px-12 mb-24">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold mb-4 text-nowrap">
            Featured Projects
          </h1>
          <a
            href="https://github.com/mehedihasan-tech1/All-web-project-link"
            className="hidden md:flex gap-2 hover:cursor-pointer">
            View all Projects
            <TbExternalLink size={26} strokeWidth={1.3} />
          </a>
        </div>
        <div className="md:flex justify-between items-center gap-4">
          <div className="relative p-5 mb-3 w-70 h-120 bg-white/5 rounded-2xl sm:w-100 md:w-120 overflow-hidden">
            <img
              src="src/assets/image.png"
              alt="image"
              className="w-60 sm:w-90 md:w-120 h-48 rounded-2xl"
            />
            <h1 className="px-4 py-2 mt-3 bg-white/5 inline-block rounded-xl">
              UI/UX Design
            </h1>
            <h1 className="mt-3 mb-3 font-semibold text-xl">DevFlow</h1>
            <p>
              This design is build specially by tailwindcss. its an e-commerce
              website that management lots of data
            </p>
            <a
              href="https://tailwindcss-project-gbmm.vercel.app/"
              className="absolute right-5 bottom-2">
              <TbExternalLink
                size={26}
                strokeWidth={1.3}
                className="hover:scale-115"
              />
            </a>
          </div>
          <div className="relative p-5 mb-3 w-70 h-120 bg-white/5 rounded-2xl sm:w-100 md:w-120">
            <img
              src="src/assets/flower.png"
              alt="image"
              className="w-60 sm:w-90 md:w-110 h-48 rounded-2xl"
            />
            <h1 className="px-4 py-2 mt-3 bg-white/5 inline-block rounded-xl">
              UI/UX Design
            </h1>
            <h1 className="mt-3 mb-3 font-semibold text-xl">DevFlow</h1>
            <p>
              Its an Flower e-commerce website design. By this website,
              customers can buy Flowers
            </p>
            <a
              href="https://mehedihasan-tech1.github.io/-my-html-css-projects/project1/index.html"
              className="absolute right-5 bottom-2">
              <TbExternalLink
                size={26}
                strokeWidth={1.3}
                className="hover:scale-115"
              />
            </a>
          </div>
          <div className="relative p-5 mb-3 w-70 h-120 bg-white/5 rounded-2xl sm:w-100 md:w-120">
            <img
              src="src/assets/image1.png"
              alt="image"
              className="w-60 sm:w-90 md:w-110 h-48 rounded-2xl"
            />
            <h1 className="px-4 py-2 mt-3 bg-white/5 inline-block rounded-xl">
              Microsoft clone
            </h1>
            <h1 className="mt-3 mb-3 font-semibold text-xl">DevFlow</h1>
            <p>Its a microsoft official website clone.</p>
            <a
              href="https://tailwindcss-project-kappa.vercel.app/"
              className="absolute right-5 bottom-2">
              <TbExternalLink
                size={26}
                strokeWidth={1.3}
                className="hover:scale-115"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
