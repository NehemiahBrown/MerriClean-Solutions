import { ChevronRight, Medal, ShieldCheck, CircleCheckBig } from "lucide-react";
import CleanSink from "../assets/cleansink.jpg";
export default function Hero() {
  return (
    <section id="home" className="py-8 px-8 w-full pt-[70px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto w-full px-6">
        <div className="flex flex-col gap-5 w-full lg:flex-1 min-w-0">
          <div className="flex bg-primary-color/20 px-2 rounded-sm self-start">
            <p class="text-xs font-bold">PRISTINE QUALITY ASSURED</p>
            <ChevronRight className="text-secondary-color" size={16} />
          </div>
          <h1 className="text-4xl font-extrabold">
            Clean Spaces.
            <span className="block text-secondary-color">Fresh Starts.</span>
          </h1>
          <p className="max-w-lg">
            Let Merriclean Solutions take care of the cleaning so you can enjoy
            a cleaner, healthier, and more welcoming environemnt.
          </p>
          <a
            href="#contact"
            className="bg-button-background px-4 py-1 text-light-text rounded-md self-start hover:brightness-90 cursor-pointer"
          >
            Request a Quote
          </a>
          <div className="flex gap-2 text-xs font-bold">
            <div className="flex items-center gap-1">
              <Medal className="text-secondary-color" size={14} />
              <p className="whitespace-nowrap">Proudly Veteran-Owned</p>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="text-secondary-color" size={14} />
              <p className="whitespace-nowrap">5+ Years Trusted</p>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheckBig className="text-secondary-color" size={14} />
              <p className="whitespace-nowrap">100% Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] lg:shrink-0">
          <img
            className="w-full aspect-video lg:aspect-square object-cover rounded-lg"
            src={CleanSink}
            alt="A clean sink."
          />
        </div>
      </div>
    </section>
  );
}
