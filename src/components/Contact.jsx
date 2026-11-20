import { Smartphone, Mail, Earth, Zap, Clock, ChevronRight } from "lucide-react"
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
      <div className="mt-8 flex flex-col-reverse lg:flex-row gap-6 justify-center items-center w-full max-w-5xl mx-auto">
        <form action="" className="flex flex-col gap-3 items-center bg-surface-color p-6 rounded-md max-w-[560px] w-full">
          <div className="flex justify-between w-full gap-2">
            <div className="flex flex-1 flex-col gap-1">
              <label className="text-left text-sm font-semibold text-primary-color" htmlFor="fullName">Full Name *</label>
              <input id="fullName" type="text" className="border border-slate-300 bg-card-color rounded-md h-10 px-3 text-primary-color placeholder:text-slate-400 placeholder:text-sm focus:border-primary-color focus:outline-2 focus:outline-primary-color/20" placeholder="John Doe" required />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="text-left text-sm font-semibold text-primary-color" htmlFor="email">Email Address *</label>
              <input id="email" type="email" className="border border-slate-300 bg-card-color rounded-md h-10 px-3 text-primary-color placeholder:text-slate-400 placeholder:text-sm focus:border-primary-color focus:outline-2 focus:outline-primary-color/20" placeholder="johndoe@email.com" required />
            </div>
          </div>
          <div className="flex justify-between w-full gap-2">
            <div className="flex flex-1 flex-col gap-1">
              <label className="text-left text-sm font-semibold text-primary-color" htmlFor="PhoneNumber">Phone Number *</label>
              <input id="phoneNmber" type="text" className="border border-slate-300 bg-card-color rounded-md h-10 px-3 text-primary-color placeholder:text-slate-400 placeholder:text-sm focus:border-primary-color focus:outline-2 focus:outline-primary-color/20" placeholder="(123)-456-7890" required />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="text-left text-sm font-semibold text-primary-color" htmlFor="serviceType">Service Type</label>
              <select id="serviceType" className="border border-slate-300 bg-card-color rounded-md h-10 px-3 text-primary-color focus:border-primary-color focus:outline-2 focus:outline-primary-color/20" defaultValue="">
                <option value="" disabled>Select A Service</option>
                <option value="residential">Residential Cleaning</option>
                <option value="commercial">Commercial Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="regular">Regular Cleaning</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-left text-sm font-semibold text-primary-color" htmlFor="propertyType">Property Type</label>
            <select id="propertyType" className="border border-slate-300 bg-card-color rounded-md h-10 px-3 text-primary-color focus:border-primary-color focus:outline-2 focus:outline-primary-color/20" defaultValue="">
              <option value="" disabled>Select Property Type</option>
              <option value="single-family">Single-Family Home</option>
              <option value="apartment">Apartment / Condo</option>
              <option value="townhouse">Townhouse / Duplex</option>
              <option value="commercial">Commercial</option>
              <option value="individual-room">Individual Room</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-left text-sm font-semibold text-primary-color" htmlFor="details">Additional Details</label>
            <textarea name="details" id="details" cols="30" rows="4" className="border border-slate-300 bg-card-color rounded-md py-2 px-3 text-primary-color focus:border-primary-color focus:outline-2 focus:outline-primary-color/20 resize-none"></textarea>
          </div>
          <button type="submit" className="flex items-center gap-2 justify-center bg-secondary-color w-full text-card-color font-semibold py-3 rounded-md cursor-pointer">Request A Quote <ChevronRight /> </button>
          <p className="text-sm text-muted-text">We respect your privacy. No spam, ever.</p>
        </form>
        <div className="lg:self-start bg-primary-color p-6 rounded-md max-w-[375px] w-full">
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
