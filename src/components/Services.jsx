import { House, Building, BroomSparkles, CalendarDays, CircleCheck } from "lucide-react";
export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-8 px-8 w-full bg-surface-color">
      <div className="flex flex-col gap-2 text-center mx-auto">
        <p className="text-xs font-semibold uppercase tracking-wider mx-auto text-muted-gold">What we offer</p>
        <h2 className="text-4xl font-extrabold text-primary-color">Cleaning Services for Every Space</h2>
        <p className="max-w-2xl mx-auto">Tailored residential and commerical cleaning packages designed to maintain pristine, healthy environments.</p>
      </div>
      <div className="mt-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto">
        <div className="flex flex-col gap-1 bg-card-color p-4 rounded-md">
          <House size={40} className="bg-surface-color p-2 rounded-md" />
          <p className="text-lg font-semibold">Residential Cleaning</p>
          <p className="text-xs">Starting at &nbsp; <span className="font-extrabold text-lg">$80</span> &nbsp;/visit</p>
          <p className="text-xs">Comprehensive home cleaning covering kitchens, bathrooms, living areas, and bedrooms tailored to your household schedule.</p>
          <div className="mt-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Dusting & wiping surfaces</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-secondary-color" size={12} />
              <p className="text-xs">Vaccuming & Mopping</p>
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
          <div className="mt-auto pt-6 w-full">
            <a
              href="#contact"
              className="block bg-button-background text-center text-sm py-1 text-light-text py-2 font-medium max-w-[360px] mx-auto rounded-md hover:brightness-90 cursor-pointer"
            >
              Book Residential
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-card-color p-4">
          <Building size={40} className="bg-surface-color p-2 rounded-md" />
          <p className="text-lg font-semibold">Commercial Cleaning</p>
          <p className="text-xs">Starting at &nbsp; <span className="font-extrabold text-lg">$150</span> &nbsp;/visit</p>
          <p className="text-xs">Professional janitorial and workspace sanitation for corporate offices, retail storefronts, and medical practices.</p>
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
          <div className="mt-auto pt-6 w-full">
            <a
              href="#contact"
              className="block bg-button-background text-center text-sm py-1 text-light-text py-2 font-medium max-w-[360px] mx-auto rounded-md hover:brightness-90 cursor-pointer"
            >
              Book Commercial
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-card-color p-4">
          <BroomSparkles size={40} className="bg-surface-color p-2 rounded-md" />
          <p className="text-lg font-semibold">Deep Cleaning</p>
          <p className="text-xs">Starting at &nbsp; <span className="font-extrabold text-lg">$175</span> &nbsp;/visit</p>
          <p className="text-xs">Intensive top-to-bottom scrub addressing built-up grime, inside appliances, baseboards, and neglected corners.</p>
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
          <div className="mt-auto pt-6 w-full">
            <a
              href="#contact"
              className="block bg-button-background text-center text-sm py-1 text-light-text py-2 font-medium max-w-[360px] mx-auto rounded-md hover:brightness-90 cursor-pointer"
            >
              Book Deep Clean
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-card-color p-4">
          <CalendarDays size={40} className="bg-surface-color p-2 rounded-md" />
          <p className="text-lg font-semibold">Regular Cleaning</p>
          <p className="text-xs">Starting at &nbsp; <span className="font-extrabold text-lg">$75</span> &nbsp;/visit</p>
          <p className="text-xs">Dependable recurring maintenance cleaning scheduled weekly, bi-weekly, or monthly to keep spaces continuously fresh.</p>
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
          <div className="mt-auto pt-6 w-full">
            <a
              href="#contact"
              className="block bg-button-background text-center text-sm text-light-text py-2 font-medium max-w-[360px] mx-auto rounded-md hover:brightness-90 cursor-pointer"
            >
              Book Recurring
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center mx-auto">
        <p className="max-w-2xl mx-auto text-sm text-muted-text">*Starting prices reflect standard square footage. Final estimates may vary based on property size, initial condition, and customized client requests. Free on-site quotes available.</p>
      </div>

    </section>
  );
}
