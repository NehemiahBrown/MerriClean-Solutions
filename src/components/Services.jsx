import {
  House,
  Building,
  BroomSparkles,
  CalendarDays,
  CircleCheck,
} from "lucide-react"
export default function Services() {
  return (
    <section
      id="services"
      className="w-full scroll-mt-18 bg-surface-color px-8 py-8"
    >
      <div className="mx-auto flex flex-col gap-2 text-center">
        <p className="mx-auto text-xs font-extrabold tracking-wider text-muted-gold uppercase">
          What we offer
        </p>
        <h2 className="text-4xl font-extrabold text-primary-color">
          Cleaning Services for Every Space
        </h2>
        <p className="mx-auto max-w-2xl text-sm">
          Tailored residential and commercial cleaning packages designed to
          maintain pristine, healthy environments.
        </p>
      </div>
      <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-1 rounded-md bg-card-color p-4">
          <House size={40} className="rounded-md bg-surface-color p-2" />
          <p className="text-lg font-semibold">Residential Cleaning</p>
          <p className="text-xs">
            Starting at &nbsp;
            <span className="text-lg font-extrabold">$80</span> &nbsp;/visit
          </p>
          <p className="text-xs">
            Comprehensive home cleaning covering kitchens, bathrooms, living
            areas, and bedrooms tailored to your household schedule.
          </p>
          <div className="mt-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Dusting & wiping surfaces</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Vacuuming & Mopping</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Sanitizing Bathrooms</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Eco-friendly Supplies</p>
            </div>
          </div>
          <div className="mt-auto w-full pt-6">
            <a
              href="#contact"
              className="mx-auto block max-w-90 cursor-pointer rounded-md bg-button-background py-2 text-center text-sm font-medium text-light-text hover:brightness-90"
            >
              Book Residential
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-md bg-card-color p-4">
          <Building size={40} className="rounded-md bg-surface-color p-2" />
          <p className="text-lg font-semibold">Commercial Cleaning</p>
          <p className="text-xs">
            Starting at &nbsp;{" "}
            <span className="text-lg font-extrabold">$150</span> &nbsp;/visit
          </p>
          <p className="text-xs">
            Professional janitorial and workspace sanitation for corporate
            offices, retail storefronts, and medical practices.
          </p>
          <div className="mt-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Conference room detailing</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Restroom sterilization</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Trash & recycling removal</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Breakroom & common area sanitation</p>
            </div>
          </div>
          <div className="mt-auto w-full pt-6">
            <a
              href="#contact"
              className="mx-auto block max-w-90 cursor-pointer rounded-md bg-button-background py-2 text-center text-sm font-medium text-light-text hover:brightness-90"
            >
              Book Commercial
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-md bg-card-color p-4">
          <BroomSparkles
            size={40}
            className="rounded-md bg-surface-color p-2"
          />
          <p className="text-lg font-semibold">Deep Cleaning</p>
          <p className="text-xs">
            Starting at &nbsp;{" "}
            <span className="text-lg font-extrabold">$175</span> &nbsp;/visit
          </p>
          <p className="text-xs">
            Intensive top-to-bottom scrub addressing built-up grime, inside
            appliances, baseboards, and neglected corners.
          </p>
          <div className="mt-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Inside oven & refrigerator</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Baseboards & door frames</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Detailed grout cleaning</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Interior window polishing</p>
            </div>
          </div>
          <div className="mt-auto w-full pt-6">
            <a
              href="#contact"
              className="mx-auto block max-w-90 cursor-pointer rounded-md bg-button-background py-2 text-center text-sm font-medium text-light-text hover:brightness-90"
            >
              Book Deep Clean
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-md bg-card-color p-4">
          <CalendarDays size={40} className="rounded-md bg-surface-color p-2" />
          <p className="text-lg font-semibold">Regular Cleaning</p>
          <p className="text-xs">
            Starting at &nbsp;{" "}
            <span className="text-lg font-extrabold">$75</span> &nbsp;/visit
          </p>
          <p className="text-xs">
            Dependable recurring maintenance cleaning scheduled weekly,
            bi-weekly, or monthly to keep spaces continuously fresh.
          </p>
          <div className="mt-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Scheduled recurring visits</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Same dedicated cleaner</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Priority scheduling slot</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Straightforward pay-per-visit</p>
            </div>
          </div>
          <div className="mt-auto w-full pt-6">
            <a
              href="#contact"
              className="mx-auto block max-w-90 cursor-pointer rounded-md bg-button-background py-2 text-center text-sm font-medium text-light-text hover:brightness-90"
            >
              Book Recurring
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 text-center">
        <p className="mx-auto max-w-2xl text-sm text-muted-text">
          *Starting prices reflect standard square footage. Final estimates may
          vary based on property size, initial condition, and customized client
          requests. Free on-site quotes available.
        </p>
      </div>
    </section>
  )
}
