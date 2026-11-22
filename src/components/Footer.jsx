import { Phone, Mail, Earth, Clock, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-primary-color">
      <div className="flex flex-col gap-4 mx-auto w-full max-w-5xl px-6 py-6">
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
          <div className="flex max-w-62.5 flex-col gap-3">
            <p className="text-sm font-semibold text-card-color">
              Merriclean Solutions
            </p>
            <p className="text-xs text-surface-text">
              Pristine cleaning solutions for homes and businesses across
              Southern Illinois.
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-extrabold text-surface-text">
                Local Business
              </p>
              <p className="text-xs font-extrabold text-surface-text">
                Proudly Veteran-Owned
              </p>
              <p className="text-xs font-extrabold text-surface-text">
                Committed to Quality
              </p>
            </div>
          </div>
          <div className="flex max-w-62.5 flex-col gap-3">
            <p className="text-sm font-semibold text-card-color">
              Get In Touch
            </p>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1 text-xs text-surface-text hover:underline underline-offset-4 transition-all ">
                <Phone size={12} />
                <a className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-color" href="tel:6182807014">(618)-280-7014</a>
              </div>
              <div className="flex items-center gap-1 text-xs text-surface-text hover:underline underline-offset-4 transition-all ">
                <Mail size={12} />
                <a className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-color" href="mailto:tevin533@gmail.com">tevin533@gmail.com</a>
              </div>
              <div className="flex items-center gap-1 text-xs text-surface-text hover:underline underline-offset-4 transition-all ">
                <Earth size={12} />
                <a className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-color" href="https://www.facebook.com/profile.php?id=61579963706617">
                  Facebook: Merriclean Solutions
                </a>
              </div>
            </div>
          </div>
          <div className="flex max-w-62.5 flex-col gap-3">
            <p className="text-sm font-semibold text-card-color">
              Operations & Area
            </p>
            <div className="flex flex-col gap-1">
              <div>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-surface-text" />
                  <p className="text-xs font-bold text-surface-text">
                    Business Hours:
                  </p>
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  <p className="text-xs text-surface-text">
                    Monday – Saturday: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-surface-text">Sunday: By Appointment</p>
                </div>

              </div>

              <div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-surface-text" />
                  <p className="text-xs font-bold text-surface-text">
                    Service Region:
                  </p>
                </div>
                <p className="mt-1 text-xs text-surface-text">
                  Carbondale, IL & surrounding communities
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-extrabold text-surface-text border-t border-white/10 pt-4">© 2026 Merriclean Solutions. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}
