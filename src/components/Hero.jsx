import { ChevronRight, Medal, ShieldCheck, CircleCheckBig } from "lucide-react"
import { getHeroContent, urlFor } from "../lib/sanity"
import { useSanityContent } from "../hooks/useSanityContent.js"
export default function Hero() {

const {sanityContent, error, loading} = useSanityContent(getHeroContent)

  if (error) {
    return <div>Error loading hero content</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <section id="home" className="w-full scroll-mt-20 px-8 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-12 md:px-6 lg:flex-row">
        <div className="flex w-full min-w-0 flex-col gap-5 lg:flex-1">
          <div className="flex items-center self-start rounded-md bg-surface-color px-2 py-1">
            <p className="text-xs font-bold tracking-wider uppercase">
              pristine quality assured
            </p>
            <ChevronRight className="text-secondary-color" size={16} />
          </div>
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-extrabold">
            {sanityContent?.headingTextOne}
            <span className="block text-secondary-color">
              {sanityContent?.headingTextTwo}{" "}
            </span>
          </h1>
          <p className="max-w-lg">{sanityContent?.subheading}</p>
          <a
            href="#contact"
            className="cursor-pointer self-start rounded-md bg-button-background px-4 py-2 text-sm text-light-text hover:brightness-90"
          >
            {sanityContent?.buttonText}
          </a>
          <div className="flex flex-col flex-wrap gap-2 text-xs font-bold sm:flex-row">
            <div className="flex items-center gap-1">
              <Medal className="text-secondary-color" size={14} />
              <p>Proudly Veteran-Owned</p>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="text-secondary-color" size={14} />
              <p>5+ Years Trusted</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheckBig className="text-secondary-color" size={14} />
              <p>100% Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="w-full shadow-card lg:w-[42%] lg:shrink-0">
          <img
            className="aspect-video w-full rounded-lg object-cover lg:aspect-square"
            src={urlFor(sanityContent?.heroImage).url()}
            alt="A clean sink."
          />
        </div>
      </div>
    </section>
  )
}
