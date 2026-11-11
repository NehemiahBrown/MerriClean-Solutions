export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-secondary-background scroll-mt-20 py-8 px-8 w-full"
    >
      <div>
        <div class="flex flex-col justify-center items-center gap-2 text-center">
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
      <div className="flex flex-col justify-center items-center md:flex-row gap-2">
        <div className="w-full overflow-hidden rounded-lg">
          <div className="flex gap-2">
            <div className="flex-1 min-w-0 aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="src\assets\dirtyshelf.jpg"
                alt="An unorganized living space."
              />
            </div>
            <div className="flex-1 min-w-0 aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="src\assets\cleanshelf.jpg"
                alt="An organized living space."
              />
            </div>
          </div>
        </div>
        <div>d</div>
        <div>d</div>
      </div>
    </section>
  );
}
