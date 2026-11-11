import { CircleCheck } from "lucide-react"

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-secondary-background scroll-mt-20 py-8 px-8 w-full"
    >
      <div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <p className="uppercase text-tertiary-color tracking-wider font-extrabold text-xs bg-teritary-background px-2 rounded-md">
            portfolio & results
          </p>
          <h2 className="text-card-color font-bold text-4xl">
            Real Spaces. Real Results.
          </h2>
          <p className="text-[#CBD5E1] max-w-2xl mx-auto">
            Explore real residential and commercial transformations delivered
            across Southern Illinois.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-2">
        <div className="flex flex-col h-full w-full overflow-hidden rounded-lg">
          <div className="flex bg-teritary-background/60 p-2 gap-2">
            <div className="flex-1 min-w-0 aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\dirtyshelf.jpg"
                alt="An unorganized living space."
              />
            </div>
            <div className="flex-1 min-w-0 aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\cleanshelf.jpg"
                alt="An organized living space."
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2 bg-teritary-background px-4 py-6">
            <h3 className="uppercase tracking-wider font-semibold text-xs text-tertiary-color">living space renewal</h3>
            <h4 className="text-card-color font-bold text-xl">Living Room & Common Area Detailing</h4>
            <p className="text-[#CBD5E1]">Transforming cluttered spaces into cleaner, more organized environments.</p>
            <div className="mt-auto mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleCheck size={20} className="shrink-0 text-tertiary-color" />
                <p className="text-card-color">Detailed cleaning of shelves and surfaces</p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck size={20} className="shrink-0 text-tertiary-color" />
                <p className="text-card-color">Clutter removal and space organization</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full overflow-hidden rounded-lg">
          <div className="flex bg-teritary-background/60 p-2 gap-2">
            <div className="flex-1 min-w-0 aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\dirtyfan.jpg"
                alt="An unorganized living space."
              />
            </div>
            <div className="flex-1 min-w-0 aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\cleanfan.jpg"
                alt="An organized living space."
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2 bg-teritary-background px-4 py-6">
            <h3 className="uppercase tracking-wider font-semibold text-xs text-tertiary-color">dust & dirt removal</h3>
            <h4 className="text-card-color font-bold text-xl">Intensive Dust & Grime Removal</h4>
            <p className="text-[#CBD5E1]">Tackling hard-to-reach areas and stubborn buildup for a noticeably cleaner home.</p>
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleCheck size={20} className="shrink-0 text-tertiary-color" />
                <p className="text-card-color">Thorough cleaning of ceiling fans and vents</p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck size={20} className="shrink-0 text-tertiary-color" />
                <p className="text-card-color">Removal of accumulated dust and grime</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full overflow-hidden rounded-lg">
          <div className="flex bg-teritary-background/60 p-2 gap-2">
            <div className="flex-1 min-w-0 aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\dirtysink.jpg"
                alt="An unorganized living space."
              />
            </div>
            <div className="flex-1 min-w-0 aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\cleansink.jpg"
                alt="An organized living space."
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2 bg-teritary-background px-4 py-6">
            <h3 className="uppercase tracking-wider font-semibold text-xs text-tertiary-color">Deep Clean & Restoration</h3>
            <h4 className="text-card-color font-bold text-xl">Surface & Stain Restoration</h4>
            <p className="text-[#CBD5E1]">Removing stubborn stains, grime, and buildup to restore neglected surfaces to a cleaner, refreshed condition.</p>
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleCheck size={20} className="shrink-0 text-tertiary-color" />
                <p className="text-card-color">Tough stain and buildup removal</p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck size={20} className="shrink-0 text-tertiary-color" />
                <p className="text-card-color">Restoring shine to worn and neglected surfaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teritary-background"></div>
    </section>
  );
}
