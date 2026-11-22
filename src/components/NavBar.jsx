import { useState, useEffect } from "react"
import { X, Menu } from "lucide-react"

export default function NavBar() {
  const [visibleSection, setVisibleSection] = useState("home")
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  function toggleHamburgerMenu() {
    setHamburgerOpen((current) => !current)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    function handleMenuScreenChange(event) {
      if (event.matches) {
        setHamburgerOpen(false)
      }
    }

    mediaQuery.addEventListener("change", handleMenuScreenChange)
    return () => {
      mediaQuery.removeEventListener("change", handleMenuScreenChange)
    }
  }, [])

  useEffect(() => {
    const navSections = document.querySelectorAll("section[id]")

    function updateActiveSection() {
      const detectionPoint = window.innerHeight * 0.25

      navSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (detectionPoint >= rect.top && detectionPoint < rect.bottom) {
          setVisibleSection(section.id)
        }
      })
    }
    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection)
    return () => {
      window.removeEventListener("scroll", updateActiveSection)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 flex h-17.5 w-full items-center border-b border-b-surface-color/20 bg-card-color">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <p className="font-bold whitespace-nowrap">Merriclean Solutions</p>
        <ul className="hidden gap-4 md:flex">
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "home" ? "border-b-secondary-color" : "border-transparent"} transition-colors duration-200`}
          >
            <a className="focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-secondary-color" href="#home">Home</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "services" ? "border-b-secondary-color" : "border-transparent"} transition-colors duration-200`}
          >
            <a className="focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-secondary-color" href="#services">Services</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "our-work" ? "border-b-secondary-color" : "border-transparent"} transition-colors duration-200`}
          >
            <a className="focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-secondary-color" href="#our-work">Our Work</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "about" ? "border-b-secondary-color" : "border-transparent"} transition-colors duration-200`}
          >
            <a className="focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-secondary-color" href="#about">About</a>
          </li>
          <li
            className={`border-b hover:border-b-secondary-color ${visibleSection === "contact" ? "border-b-secondary-color" : "border-transparent"} transition-colors duration-200`}
          >
            <a className="focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-secondary-color" href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="#contact"
          className="hidden cursor-pointer rounded-md bg-button-background px-4 py-1 text-sm text-light-text hover:brightness-90 md:flex "
        >
          Request a Quote
        </a>
        <button
          type="button"
          onClick={toggleHamburgerMenu}
          aria-label={hamburgerOpen ? "Close menu" : "Open menu"}
          aria-expanded={hamburgerOpen}
          aria-controls="mobile-navigation"
          className="cursor-pointer md:hidden"
        >
          {hamburgerOpen ? <X /> : <Menu />}
        </button>
        <div
          id="mobile-navigation"
          className={`absolute top-full right-0 z-100 flex w-full flex-col border-b border-b-primary-color/20 bg-card-color px-6 py-8 md:hidden ${hamburgerOpen ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-8 opacity-0"} transition-all duration-300 ease-out`}
          inert={!hamburgerOpen}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full rounded-md px-4 py-3 transition-colors duration-200 hover:bg-primary-color hover:text-card-color"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full rounded-md px-4 py-3 transition-colors duration-200 hover:bg-primary-color hover:text-card-color"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full rounded-md px-4 py-3 transition-colors duration-200 hover:bg-primary-color hover:text-card-color"
                href="#our-work"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full rounded-md px-4 py-3 transition-colors duration-200 hover:bg-primary-color hover:text-card-color"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setHamburgerOpen(false)}
                className="block w-full rounded-md px-4 py-3 transition-colors duration-200 hover:bg-primary-color hover:text-card-color"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            onClick={() => setHamburgerOpen(false)}
            href="#contact"
            className="mt-4 cursor-pointer self-start rounded-md bg-button-background px-4 py-1 text-light-text hover:brightness-90"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
