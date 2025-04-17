import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Education & Certifications", path: "#education" },
];

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveLink(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    if (hash) {
      setActiveLink(hash);
    } else {
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hash]);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md theme-transition text-white mx-auto">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              href={link.path}
              key={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`text-800 hover:text-primary transition-colors nav-link ${
                location.pathname === link.path || activeLink === link.path
                  ? "active text-primary font-bold text-mint-green"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
