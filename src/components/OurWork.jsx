import { CircleCheck, Plus } from "lucide-react"

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-secondary-background scroll-mt-18 py-8 px-8 w-full"
    >
      <div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <p className="uppercase text-tertiary-color tracking-wider font-extrabold text-xs bg-teritary-background px-2 rounded-md">
            portfolio & results
          </p>
          <h2 className="text-card-color font-bold text-4xl">
            Real Spaces. Real Results.
          </h2>
          <p className="text-[#CBD5E1] text-sm max-w-2xl mx-auto">
            Explore real residential and commercial transformations delivered
            across Southern Illinois.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-2">
        <div className="flex flex-col h-full w-full overflow-hidden rounded-lg">
          <div className="flex bg-teritary-background/60 p-2 gap-2">
            <div className="relative flex-1 min-w-0 aspect-square lg:aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\dirtyshelf.jpg"
                alt="An unorganized living space."
              />
              <p className="absolute top-2 left-2 uppercase text-xs tracking-wide text-card-color font-bold bg-secondary-color px-2 py-1 rounded-lg">Before</p>
            </div>
            <div className="relative flex-1 min-w-0 aspect-square lg:aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\cleanshelf.jpg"
                alt="An organized living space."
              />
              <p className="absolute top-2 left-2 uppercase text-xs tracking-wide font-bold bg-tertiary-color px-2 py-1 rounded-lg">After</p>

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
            <div className="relative flex-1 min-w-0 aspect-square lg:aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\dirtyfan.jpg"
                alt="An unorganized living space."
              />
              <p className="absolute top-2 left-2 uppercase text-xs tracking-wide text-card-color font-bold bg-secondary-color px-2 py-1 rounded-lg">Before</p>
            </div>
            <div className="relative flex-1 min-w-0 aspect-square lg:aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\cleanfan.jpg"
                alt="An organized living space."
              />
              <p className="absolute top-2 left-2 uppercase text-xs tracking-wide font-bold bg-tertiary-color px-2 py-1 rounded-lg">After</p>
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
            <div className="relative flex-1 min-w-0 aspect-square lg:aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\dirtysink.jpg"
                alt="An unorganized living space."
              />
              <p className="absolute top-2 left-2 uppercase text-xs tracking-wide text-card-color font-bold bg-secondary-color px-2 py-1 rounded-lg">Before</p>

            </div>
            <div className="relative flex-1 min-w-0 aspect-square lg:aspect-[3/4] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="src\assets\cleansink.jpg"
                alt="An organized living space."
              />
              <p className="absolute top-2 left-2 uppercase text-xs tracking-wide font-bold bg-tertiary-color px-2 py-1 rounded-lg">After</p>
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
      <div className="mt-8 py-6 max-w-6xl mx-auto bg-teritary-background rounded-lg">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around items-center px-2">
          <div className="flex flex-col items-center">
            <p className="flex items-center text-tertiary-color font-bold text-5xl">10 <Plus size={28} /></p>
            <p className="text-card-color text-sm font-bold text-center">Years of Experience</p>
            <p className="text-[#CBD5E1] text-sm text-center px-2">Professional Cleaning Expertise</p>
          </div>
          <div className="w-[1px] self-stretch bg-card-color/60"></div>
          <div className="flex flex-col items-center">
            <p className="flex items-center text-card-color font-bold text-5xl"> 100% </p>
            <p className="text-card-color text-sm font-bold text-center">Commitment to Quality</p>
            <p className="text-[#CBD5E1] text-sm text-center px-2">Attention to Detail in <span className="underline underline-offset-3 font-bold">Every</span> Clean</p>
          </div>
          <div className="w-[1px] self-stretch bg-card-color/60"></div>
          <div className="flex flex-col items-center">
            <p className="flex items-center text-tertiary-color font-bold text-5xl">150 <Plus size={28} /></p>
            <p className="text-card-color text-sm font-bold text-center">Homes & Offices Cleaned</p>
            <p className="text-[#CBD5E1] text-sm text-center px-2">Across Jackson, Williamson, & Franklin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
