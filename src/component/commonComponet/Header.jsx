import { Link, scrollSpy } from "react-scroll";
import { TbMenu2, TbX } from "react-icons/tb";
import { useEffect, useState } from "react";

const Header = () => {
  const [isopen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    window.history.scrollRestoration = "maanual";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    scrollSpy.update();
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isopen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  }, [isopen]);


  return (
    <header className="z-50 py-1.5 mb-1 px-6 w-full sticky top-0 bg-[#010920]">
      <nav className="px-6 py-3 z-10 mb-5 rounded-2xl">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">Mehedi.tech</h1>
          {/* navbar link section */}
          <div className="hidden md:block">
            <div className="flex gap-6 text-lg ">
              <Link
                to="home"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("home")}
                className={`nav-link ${activeSection === "home" ? "active-link active-link2" : ""}`}>
                Home
              </Link>
              <Link
                to="about"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("about")}
                className={`nav-link ${activeSection === "about" ? "active-link active-link2" : ""}`}>
                About Me
              </Link>
              <Link
                to="skills"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("skills")}
                className={`nav-link ${activeSection === "skills" ? "active-link active-link2" : ""}`}>
                Skills
              </Link>
              <Link
                to="project"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("project")}
                className={`nav-link ${activeSection === "project" ? "active-link active-link2" : ""}`}>
                Projects
              </Link>
              <Link
                to="contact"
                offset={-190}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("contact")}
                className={`nav-link ${activeSection === "contact" ? "active-link active-link2" : ""}`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="px-6 py-1 text-xl border rounded-xl cursor-pointer border-indigo-400/40 bg-darkviolet/5 hover:bg-darkviolet/50">
              <Link
                to="contact"
                offset={-120}
                smooth={true}
                duration={350}
                className="cursor-pointer">
                Let's talk
              </Link>
            </button>
          </div>
          {/* hambarger icon */}
          <div className="md:hidden" onClick={() => setIsOpen(!isopen)}>
            {isopen === true ? (
              <TbX size={24} strokeWidth={1.5} className="cursor-pointer" />
            ) : (
              <TbMenu2 size={24} strokeWidth={1.5} className="cursor-pointer" />
            )}
          </div>
        </div>
        {/* Mobile view navbar */}
        {isopen && (
          // mobilecontent
          <div
            id="navbar"
            className="md:hidden absolute top-16 right-0 mr-8 px-3 flex justify-end">
            <div className="py-4 px-2 flex flex-col gap-6 text-lg bg-[#090227] w-48 text-center rounded-2xl">
              <Link
                to="home"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("home")}
                className={`nav-link ${activeSection === "home" ? "active-link" : ""}`}>
                Home
              </Link>
              <Link
                to="about"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("about")}
                className={`nav-link ${activeSection === "about" ? "active-link" : ""}`}>
                About Me
              </Link>
              <Link
                to="skills"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("skills")}
                className={`nav-link ${activeSection === "skills" ? "active-link" : ""}`}>
                Skills
              </Link>
              <Link
                to="project"
                offset={-120}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("project")}
                className={`nav-link ${activeSection === "project" ? "active-link" : ""}`}>
                Projects
              </Link>
              <Link
                to="contact"
                offset={-190}
                smooth={true}
                duration={350}
                spy={true}
                onSetActive={() => setActiveSection("contact")}
                className={`nav-link ${activeSection === "contact" ? "active-link" : ""}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
