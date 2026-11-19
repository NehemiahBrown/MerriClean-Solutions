import { Smartphone, Mail, Earth, Zap, Clock } from "lucide-react"
export default function Contact() {
  return <section id="contact" className="scroll-mt-18 py-8 px-8 w-full">
    <div className="flex flex-col gap-2 text-center mx-auto">
      <p className="text-xs font-extrabold uppercase tracking-wider mx-auto text-muted-gold">
        get in touch
      </p>
      <h2 className="text-4xl font-extrabold text-primary-color">
        Let's Make Your Space Shine.
      </h2>
      <p className="max-w-2xl mx-auto text-sm">
        Tell us about your property and cleaning needs. We respond promptly with customized, transparent estimates.
      </p>
      <div className="mt-8 flex flex-col-reverse md:flex-row gap-2 justify-center items-center w-full max-w-5xl mx-auto">
        <form action="" className="bg-card-color">d</form>
        <div className="bg-primary-color p-6 rounded-md max-w-[375px] w-full">
          <div className="text-left">
            <p className="text-tertiary-color uppercase tracking-wider font-extrabold text-xs">direct channels</p>
            <p className="text-card-color font-semibold text-xl">Always Reachable</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-2">
              <Smartphone className="bg-teritary-background text-card-color p-1.5 rounded-full" size={30} />
              <div className="text-left">
                <p className="text-surface-color text-[10px] font-bold">Call or Text</p>
                <a className="text-card-color text-sm font-extrabold" href="tel:6182807014">(618)-280-7014</a>
              </div>
            </div>
            <div className="flex gap-2">
              <Mail className="bg-teritary-background text-card-color p-1.5 rounded-full" size={30} />
              <div className="text-left">
                <p className="text-surface-color text-[10px] font-bold">Email Inquiries</p>
                <a className="text-card-color text-sm font-extrabold" href="mailto:tevin533@gmail.com">tevin533@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-2">
              <Earth className="bg-teritary-background text-card-color p-1.5 rounded-full" size={30} />
              <div className="text-left">
                <p className="text-surface-color text-[10px] font-bold">Social Page</p>
                <a className="text-card-color text-sm font-extrabold" href="https://www.facebook.com/profile.php?id=61579963706617">Facebook: Merriclean Solutions</a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex gap-2">
              <Zap className="text-tertiary-color" size={12} />
              <p className="text-surface-color text-[10px] text-left">Average response time under 2 hours during normal business hours.</p>
            </div>
            <div className="flex gap-2">
              <Clock className="text-tertiary-color" size={12} />
              <p className="text-surface-color text-[10px] text-left">Mon–Sat: 8:00 AM – 6:00 PM • Sun: By Appointment</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>;
}
