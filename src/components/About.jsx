import { Medal, SearchCheck, MapPin, Leaf } from "lucide-react"
export default function About() {
  return (
    <section
      className="mt-12 w-full scroll-mt-18 bg-surface-color px-8 py-8"
      id="about"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center justify-center gap-12 md:flex-row md:px-6">
        <div className="w-full max-w-100 md:w-[42%] md:shrink-0">
          <img
            className="rounded-t-lg"
            src="src/assets/founderImage.jpg"
            alt="Tevin Merriweather"
          />
          <div className="rounded-b-lg bg-card-color p-4">
            <p className="font-bold">Tevin Merriweather</p>
            <p className="text-xs">Owner & Operator &bull; Carbondale, IL</p>
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-2 lg:flex-1">
          <p className="text-xs font-semibold tracking-wider text-muted-gold uppercase">
            meet the founder
          </p>
          <h2 className="text-4xl font-extrabold text-primary-color">
            Committed to Cleaner, Healthier Spaces.
          </h2>
          <p className="text-sm">
            Founded by Tevin Merriweather in Carbondale, Illinois, Merriclean
            Solutions was born from a passion for perfection and a deep
            commitment to our Southern Illinois community. Every service call is
            approached with the exact standard we would demand for our own
            families.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <Medal
                size={26}
                className="shrink-0 rounded-full bg-black/5 p-1 text-secondary-color"
              />
              <div className="flex flex-col gap-2">
                <p className="leading-none font-bold">
                  Veteran Owned & Operated
                </p>
                <p className="text-xs">
                  Disciplined excellence, uncompromising integrity, and
                  dedicated service brought to every single cleaning mission.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <SearchCheck
                size={26}
                className="shrink-0 rounded-full bg-black/5 p-1 text-secondary-color"
              />
              <div className="flex flex-col gap-2">
                <p className="leading-none font-bold">
                  Meticulous Attention to Detail
                </p>
                <p className="text-xs">
                  We inspect every corner, baseboard, and fixture so nothing is
                  overlooked. No rushed jobs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin
                size={26}
                className="shrink-0 rounded-full bg-black/5 p-1 text-secondary-color"
              />
              <div className="flex flex-col gap-2">
                <p className="leading-none font-bold">
                  Locally Owned & Community Rooted
                </p>
                <p className="text-xs">
                  Proudly serving Carbondale, Murphysboro, Marion, and
                  surrounding areas with reliable integrity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Leaf
                size={26}
                className="shrink-0 rounded-full bg-black/5 p-1 text-secondary-color"
              />
              <div className="flex flex-col gap-2">
                <p className="leading-none font-bold">
                  Safe, Eco-Friendly Formulations
                </p>
                <p className="text-xs">
                  Premium grade cleaning solutions that protect children, pets,
                  and workplace respiratory health.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}
