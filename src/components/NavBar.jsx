import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export default function NavBar() {
  const [visibleSection, setVisibleSection] = useState("home");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburgerMenu() {
    setHamburgerOpen((current) => !current);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleMenuScreenChange(event) {
      if (event.matches) {
        setHamburgerOpen(false);
      }
    }

    mediaQuery.addEventListener("change", handleMenuScreenChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMenuScreenChange);
    };
  }, []);
  //Navigation observer for active links
  const options = {
    root: null,
    rootMargin: "-30% 0px -69% 0px",
    threshold: 0,
  };

  useEffect(() => {
    const navSections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        }),
      options,
    );

    navSections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-card-color flex items-center h-[70px] w-full border-b border-b-surface-color/20">
      <div className=" flex justify-between items-center w-full max-w-7xl mx-auto px-6">
        <p className="font-bold whitespace-nowrap">Merriclean Solutions</p>
        <ul className="hidden md:flex gap-4">
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "home" ? "border-b-secondary-color" : "border-transparent"}`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "services" ? "border-b-secondary-color" : "border-transparent"}`}
          >
            <a href="#services">Services</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "our-work" ? "border-b-secondary-color" : "border-transparent"}`}
          >
            <a href="#our-work">Our Work</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "about" ? "border-b-secondary-color" : "border-transparent"}`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "contact" ? "border-b-secondary-color" : "border-transparent"}`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="#contact"
          className="hidden md:flex bg-button-background px-4 py-1 text-light-text rounded-md hover:brightness-90 cursor-pointer"
        >
          Request a Quote
        </a>
        <button
          type="button"
          onClick={toggleHamburgerMenu}
          aria-label={hamburgerOpen ? "Close menu" : "Open menu"}
          aria-expanded={hamburgerOpen}
          aria-controls="mobile-navigation"
          className="md:hidden cursor-pointer"
        >
          {hamburgerOpen ? <X /> : <Menu />}
        </button>
        <div
          id="mobile-navigation"
          className={`absolute md:hidden flex flex-col top-full z-100 bg-card-color right-0 w-full px-6 py-8 border-b border-b-primary-color/20 ${hamburgerOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-8 pointer-events-none"} transition-all duration-300 ease-out`}
          inert={!hamburgerOpen}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full px-4 py-3 hover:bg-surface-color hover:text-card-color rounded-md transition-colors duration-200"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full px-4 py-3 hover:bg-surface-color hover:text-card-color rounded-md transition-colors duration-200"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full px-4 py-3 hover:bg-surface-color hover:text-card-color rounded-md transition-colors duration-200"
                href="#our-work"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full px-4 py-3 hover:bg-surface-color hover:text-card-color rounded-md transition-colors duration-200"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full px-4 py-3 hover:bg-surface-color hover:text-card-color rounded-md transition-colors duration-200"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            onClick={() => setHamburgerOpen(false)}
            href="#contact"
            className="mt-4 bg-button-background px-4 py-1 text-light-text rounded-md hover:brightness-90 self-start cursor-pointer"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
