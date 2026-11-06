import { useState, useEffect } from "react";

export default function NavBar() {
  const [visibleSection, setVisibleSection] = useState("home");
  console.log("Active section:", visibleSection);
  const options = {
    root: null,
    rootMargin: "-30% 0px -75% 0px",
    threshold: 0,
  };

  useEffect(() => {
    const navSections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          console.log(entry.target.id, entry.isIntersecting);
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
    <nav className="sticky top-0 z-50 bg-card-color flex items-center h-[70px] w-full border-b border-b-surface-color">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6">
        <p className="font-bold">Merriclean Solutions</p>
        <ul className="flex gap-4">
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
          className="bg-button-background px-4 py-1 text-light-text rounded-md hover:brightness-90 cursor-pointer"
        >
          Request a Quote
        </a>
      </div>
    </nav>
  );
}
