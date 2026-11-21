import { CircleCheck, Plus } from "lucide-react"
import DirtyShelf from "../assets/dirtyshelf.jpg"
import CleanShelf from "../assets/cleanshelf.jpg"
import DirtyFan from "../assets/dirtyfan.jpg"
import CleanFan from "../assets/cleanfan.jpg"
import DirtySink from "../assets/dirtysink.jpg"
import CleanSink from "../assets/cleansink.jpg"

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="w-full scroll-mt-18 bg-secondary-background px-8 py-8"
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="rounded-md bg-tertiary-background px-2 text-xs font-extrabold tracking-wider text-tertiary-color uppercase">
            portfolio & results
          </p>
          <h2 className="text-4xl font-bold text-card-color">
            Real Spaces. Real Results.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-surface-text">
            Explore real residential and commercial transformations delivered
            across Southern Illinois.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-lg">
          <div className="flex gap-2 bg-tertiary-background/60 p-2">
            <div className="relative aspect-square min-w-0 flex-1 overflow-hidden lg:aspect-3/4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={DirtyShelf}
                alt="An unorganized living space."
              />
              <p className="absolute top-2 left-2 rounded-lg bg-secondary-color px-2 py-1 text-xs font-bold tracking-wide text-card-color uppercase">
                Before
              </p>
            </div>
            <div className="relative aspect-square min-w-0 flex-1 overflow-hidden lg:aspect-3/4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={CleanShelf}
                alt="An organized living space."
              />
              <p className="absolute top-2 left-2 rounded-lg bg-tertiary-color px-2 py-1 text-xs font-bold tracking-wide uppercase">
                After
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-tertiary-background px-4 py-6">
            <h3 className="text-xs font-semibold tracking-wider text-tertiary-color uppercase">
              living space renewal
            </h3>
            <h4 className="text-xl font-bold text-card-color"></h4>
            <p className="text-surface-text">
              Living Room & Common Area Detailing Transforming cluttered spaces
              into cleaner, more organized environments.
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={20}
                  className="shrink-0 text-tertiary-color"
                />
                <p className="text-card-color">
                  Detailed cleaning of shelves and surfaces
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={20}
                  className="shrink-0 text-tertiary-color"
                />
                <p className="text-card-color">
                  Clutter removal and space organization
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col overflow-hidden rounded-lg">
          <div className="flex gap-2 bg-tertiary-background/60 p-2">
            <div className="relative aspect-square min-w-0 flex-1 overflow-hidden lg:aspect-3/4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={DirtyFan}
                alt="An unorganized living space."
              />
              <p className="absolute top-2 left-2 rounded-lg bg-secondary-color px-2 py-1 text-xs font-bold tracking-wide text-card-color uppercase">
                Before
              </p>
            </div>
            <div className="relative aspect-square min-w-0 flex-1 overflow-hidden lg:aspect-3/4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={CleanFan}
                alt="An organized living space."
              />
              <p className="absolute top-2 left-2 rounded-lg bg-tertiary-color px-2 py-1 text-xs font-bold tracking-wide uppercase">
                After
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-tertiary-background px-4 py-6">
            <h3 className="text-xs font-semibold tracking-wider text-tertiary-color uppercase">
              dust & dirt removal
            </h3>
            <h4 className="text-xl font-bold text-card-color">
              Intensive Dust & Grime Removal
            </h4>
            <p className="text-surface-text">
              Tackling hard-to-reach areas and stubborn buildup for a noticeably
              cleaner home.
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={20}
                  className="shrink-0 text-tertiary-color"
                />
                <p className="text-card-color">
                  Thorough cleaning of ceiling fans and vents
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={20}
                  className="shrink-0 text-tertiary-color"
                />
                <p className="text-card-color">
                  Removal of accumulated dust and grime
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col overflow-hidden rounded-lg">
          <div className="flex gap-2 bg-tertiary-background/60 p-2">
            <div className="relative aspect-square min-w-0 flex-1 overflow-hidden lg:aspect-3/4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={DirtySink}
                alt="An unorganized living space."
              />
              <p className="absolute top-2 left-2 rounded-lg bg-secondary-color px-2 py-1 text-xs font-bold tracking-wide text-card-color uppercase">
                Before
              </p>
            </div>
            <div className="relative aspect-square min-w-0 flex-1 overflow-hidden lg:aspect-3/4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={CleanSink}
                alt="An organized living space."
              />
              <p className="absolute top-2 left-2 rounded-lg bg-tertiary-color px-2 py-1 text-xs font-bold tracking-wide uppercase">
                After
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-tertiary-background px-4 py-6">
            <h3 className="text-xs font-semibold tracking-wider text-tertiary-color uppercase">
              Deep Clean & Restoration
            </h3>
            <h4 className="text-xl font-bold text-card-color">
              Surface & Stain Restoration
            </h4>
            <p className="text-surface-text">
              Removing stubborn stains, grime, and buildup to restore neglected
              surfaces to a cleaner, refreshed condition.
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={20}
                  className="shrink-0 text-tertiary-color"
                />
                <p className="text-card-color">
                  Tough stain and buildup removal
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={20}
                  className="shrink-0 text-tertiary-color"
                />
                <p className="text-card-color">
                  Restoring shine to worn and neglected surfaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl rounded-lg bg-tertiary-background py-6">
        <div className="flex flex-col items-center justify-around gap-4 px-2 sm:flex-row sm:gap-0">
          <div className="flex flex-col items-center">
            <p className="flex items-center text-5xl font-bold text-tertiary-color">
              10 <Plus size={28} />
            </p>
            <p className="text-center text-sm font-bold text-card-color">
              Years of Experience
            </p>
            <p className="px-2 text-center text-sm text-surface-text">
              Professional Cleaning Expertise
            </p>
          </div>
          <div className="w-px self-stretch bg-card-color/60"></div>
          <div className="flex flex-col items-center">
            <p className="flex items-center text-5xl font-bold text-card-color">
              {" "}
              100%{" "}
            </p>
            <p className="text-center text-sm font-bold text-card-color">
              Commitment to Quality
            </p>
            <p className="px-2 text-center text-sm text-surface-text">
              Attention to Detail in{" "}
              <span className="font-bold underline underline-offset-3">
                Every
              </span>{" "}
              Clean
            </p>
          </div>
          <div className="w-px self-stretch bg-card-color/60"></div>
          <div className="flex flex-col items-center">
            <p className="flex items-center text-5xl font-bold text-tertiary-color">
              150 <Plus size={28} />
            </p>
            <p className="text-center text-sm font-bold text-card-color">
              Homes & Offices Cleaned
            </p>
            <p className="px-2 text-center text-sm text-surface-text">
              Across Jackson, Williamson, & Franklin
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
