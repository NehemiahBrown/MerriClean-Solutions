import { Smartphone, Mail, Earth, Zap, Clock, ChevronRight } from "lucide-react"
export default function Contact() {
  return (
    <section id="contact" className="w-full scroll-mt-18 px-8 py-8">
      <div className="mx-auto flex flex-col gap-2 text-center">
        <p className="mx-auto text-xs font-extrabold tracking-wider text-muted-gold uppercase">
          get in touch
        </p>
        <h2 className="text-[clamp(1.75rem,4.25vw,2.25rem)] font-extrabold text-primary-color">
          Let's Make Your Space Shine.
        </h2>
        <p className="mx-auto max-w-2xl text-sm">
          Tell us about your property and cleaning needs. We respond promptly
          with customized, transparent estimates.
        </p>
        <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col-reverse items-center justify-center gap-6 lg:flex-row">
          <form
            method="POST"
            name="quote-request"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex w-full max-w-140 flex-col items-center gap-3 rounded-md bg-surface-color p-6 shadow-card"
          >
            <div className="hidden">
              <label>
                Don’t fill this out if you're human:{" "}
                <input type="text" name="bot-field" />
              </label>
            </div>
            <input type="hidden" name="form-name" value="quote-request" />
            <div className="flex flex-col sm:flex-row w-full justify-between gap-2">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className="text-left text-sm font-semibold text-primary-color"
                  htmlFor="fullName"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="h-10 rounded-md border border-slate-300 bg-card-color px-3 text-primary-color placeholder:text-sm placeholder:text-slate-400 focus:border-primary-color focus:outline-2 focus:outline-primary-color/20"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className="text-left text-sm font-semibold text-primary-color"
                  htmlFor="email"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-10 rounded-md border border-slate-300 bg-card-color px-3 text-primary-color placeholder:text-sm placeholder:text-slate-400 focus:border-primary-color focus:outline-2 focus:outline-primary-color/20"
                  placeholder="johndoe@email.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-2">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className="text-left text-sm font-semibold text-primary-color"
                  htmlFor="phoneNumber"
                >
                  Phone Number *
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  className="h-10 rounded-md border border-slate-300 bg-card-color px-3 text-primary-color placeholder:text-sm placeholder:text-slate-400 focus:border-primary-color focus:outline-2 focus:outline-primary-color/20"
                  placeholder="(123)-456-7890"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className="text-left text-sm font-semibold text-primary-color"
                  htmlFor="serviceType"
                >
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="h-10 rounded-md border border-slate-300 bg-card-color px-3 text-primary-color focus:border-primary-color focus:outline-2 focus:outline-primary-color/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select A Service
                  </option>
                  <option value="Residential">Residential Cleaning</option>
                  <option value="Commercial">Commercial Cleaning</option>
                  <option value="Deep">Deep Cleaning</option>
                  <option value="Regular">Regular Cleaning</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>
            </div>
            <div className="flex w-full flex-col gap-1">
              <label
                className="text-left text-sm font-semibold text-primary-color"
                htmlFor="propertyType"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                className="h-10 rounded-md border border-slate-300 bg-card-color px-3 text-primary-color focus:border-primary-color focus:outline-2 focus:outline-primary-color/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Property Type
                </option>
                <option value="Single Family">Single-Family Home</option>
                <option value="Apartment">Apartment / Condo</option>
                <option value="Townhouse">Townhouse / Duplex</option>
                <option value="Commercial">Commercial</option>
                <option value="Individual Room">Individual Room</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex w-full flex-col gap-1">
              <label
                className="text-left text-sm font-semibold text-primary-color"
                htmlFor="details"
              >
                Additional Details
              </label>
              <textarea
                name="details"
                id="details"
                cols="30"
                rows="4"
                maxLength="300"
                className="resize-none rounded-md border border-slate-300 bg-card-color px-3 py-2 text-primary-color focus:border-primary-color focus:outline-2 focus:outline-primary-color/20"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center hover:brightness-90 justify-center gap-2 rounded-md bg-secondary-color py-3 font-semibold text-card-color"
            >
              Request A Quote <ChevronRight />{" "}
            </button>
            <p className="text-sm text-muted-text">
              We respect your privacy. No spam, ever.
            </p>
          </form>
          <div className="w-full max-w-93.75 rounded-md bg-primary-color p-6 lg:self-start">
            <div className="text-left">
              <p className="text-xs font-extrabold tracking-wider text-tertiary-color uppercase">
                direct channels
              </p>
              <p className="text-xl font-semibold text-card-color">
                Always Reachable
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-2">
                <Smartphone
                  className="rounded-full bg-tertiary-background p-1.5 text-card-color shrink-0"
                  size={30}
                />
                <div className="text-left">
                  <p className="text-xs font-bold text-surface-color">
                    Call or Text
                  </p>
                  <a
                    className="text-sm font-extrabold text-card-color"
                    href="tel:6182807014"
                  >
                    (618)-280-7014
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail
                  className="rounded-full bg-tertiary-background p-1.5 text-card-color shrink-0"
                  size={30}
                />
                <div className="text-left min-w-0">
                  <p className="text-xs font-bold text-surface-color">
                    Email Inquiries
                  </p>
                  <a
                    className="text-sm font-extrabold text-card-color break-words"
                    href="mailto:tevin533@gmail.com"
                  >
                    tevin533@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <Earth
                  className="rounded-full bg-tertiary-background p-1.5 text-card-color shrink-0"
                  size={30}
                />
                <div className="text-left min-w-0">
                  <p className="text-xs font-bold text-surface-color">
                    Social Page
                  </p>
                  <a
                    className="text-sm font-extrabold text-card-color"
                    href="https://www.facebook.com/profile.php?id=61579963706617"
                  >
                    Facebook: Merriclean Solutions
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex gap-2">
                <Zap className="text-tertiary-color shrink-0" size={16} />
                <p className="text-left text-xs text-surface-color">
                  Average response time under 2 hours during normal business
                  hours.
                </p>
              </div>
              <div className="flex gap-2">
                <Clock className="text-tertiary-color shrink-0" size={16} />
                <p className="text-left text-xs text-surface-color">
                  Mon–Sat: 8:00 AM – 6:00 PM • Sun: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
