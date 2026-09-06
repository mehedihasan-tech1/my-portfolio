import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandGithub,
} from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer className="px-12 py-12 mb-6">
        <div className="p-4 bg-white/5 sm:flex items-center justify-between rounded-2xl border border-indigo-400/30">
          <p>
            2026 Mehedi.dev.{" "}
            <span className="text-darkGrayishBlue">All right reserved</span>
          </p>
          <p className="hidden md:block text-darkGrayishBlue mt-3">
            {" "}
            Designed by Mehedi
          </p>
          <div className="mt-4 flex items-center gap-8 text-darkGrayishBlue">
            <a href="https://www.facebook.com/profile.php?id=61593565809667&mibextid=rS40aB7S9Ucbxw6v">
              <TbBrandFacebook
                size={26}
                strokeWidth={1.3}
                className="hover:scale-115 cursor-pointer"
              />
            </a>
            <a href="https://instagram.com">
              <TbBrandInstagram
                size={26}
                strokeWidth={1.3}
                className="hover:scale-115 cursor-pointer"
              />
            </a>
            <a href="https://www.linkdin.com/in/mehedi-hasan-918b54430?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <TbBrandLinkedin
                size={26}
                strokeWidth={1.3}
                className="hover:scale-115 cursor-pointer"
              />
            </a>
            <a href="https://github.com/mehedihasan-tech1">
              <TbBrandGithub
                size={26}
                strokeWidth={1.3}
                className="hover:scale-115 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
