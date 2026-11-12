
import { Medal, SearchCheck, MapPin, Leaf } from "lucide-react";
export default function About() {
  return (
    <section className="mt-12 scroll-mt-18 py-8 px-8 w-full bg-surface-color" id="about">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto w-full md:px-6">
        <div className="w-full max-w-[400px] md:w-[42%] md:shrink-0">
          <img className="rounded-t-lg" src="src/assets/founderImage.jpg" alt="Tevin Merriweather" />
          <div className="p-4 bg-card-color rounded-b-lg">
            <p className="font-bold">Tevin Merriweather</p>
            <p className="text-xs">Owner & Operator &bull; Carbondale, IL</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full lg:flex-1 min-w-0">
          <p className="uppercase text-muted-gold tracking-wider font-semibold text-xs">meet the founder</p>
          <h2 className="text-4xl font-extrabold text-primary-color">Committed to Cleaner, Healthier Spaces.</h2>
          <p className="text-sm">Founded by Tevin Merriweather in Carbondale, Illinois, Merriclean Solutions was born from a passion for perfection and a deep commitment to our Southern Illinois community. Every service call is approached with the exact standard we would demand for our own families.</p>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2 items-start">
              <Medal size={26} className="text-secondary-color shrink-0 bg-black/5 p-1 rounded-full" />
              <div className="flex flex-col gap-2">
                <p className="font-bold leading-none">Veteran Owned & Operated</p>
                <p className="text-xs">Disciplined excellence, uncompromising integrity, and dedicated service brought to every single cleaning mission.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <SearchCheck size={26} className="text-secondary-color shrink-0 bg-black/5 p-1 rounded-full" />
              <div className="flex flex-col gap-2">
                <p className="font-bold leading-none">Meticulous Attention to Detail</p>
                <p className="text-xs">We inspect every corner, baseboard, and fixture so nothing is overlooked. No rushed jobs.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <MapPin size={26} className="text-secondary-color shrink-0 bg-black/5 p-1 rounded-full" />
              <div className="flex flex-col gap-2">
                <p className="font-bold leading-none">Locally Owned & Community Rooted</p>
                <p className="text-xs">Proudly serving Carbondale, Murphysboro, Marion, and surrounding areas with reliable integrity.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <Leaf size={26} className="text-secondary-color shrink-0 bg-black/5 p-1 rounded-full" />
              <div className="flex flex-col gap-2">
                <p className="font-bold leading-none">Safe, Eco-Friendly Formulations</p>
                <p className="text-xs">Premium grade cleaning solutions that protect children, pets, and workplace respiratory health.</p>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>

    </section>
  );
}
