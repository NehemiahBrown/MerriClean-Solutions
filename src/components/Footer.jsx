import { BadgeCheck, Phone, Mail, Earth, Clock, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-primary-color w-full">
            <div className="max-w-5xl w-full mx-auto py-6 px-6">
                <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
                    <div className="flex flex-col gap-3 max-w-[250px]">
                        <p className="text-card-color font-semibold text-sm">Merriclean Solutions</p>
                        <p className="text-surface-text text-xs">Pristine cleaning solutions for homes and businesses across Southern Illinois.</p>
                        <div className="flex flex-col gap-1">
                            <p className="font-extrabold text-xs text-surface-text">Local Business</p>
                            <p className="font-extrabold text-xs text-surface-text">Proudly Veteran-Owned</p>
                            <p className="font-extrabold text-xs text-surface-text">Satisfaction Guaranteed</p>

                        </div>
                    </div>
                    <div className="flex flex-col gap-3 max-w-[250px]">
                        <p className="text-card-color font-semibold text-sm">Get In Touch</p>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-1 text-surface-text text-xs">
                                <Phone size={12} />
                                <a href="tel:6182807014">(618)-280-7014</a>
                            </div>
                            <div className="flex items-center gap-1 text-surface-text text-xs">
                                <Mail size={12} />
                                <a href="mailto:tevin533@gmail.com">tevin533@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-1 text-surface-text text-xs">
                                <Earth size={12} />
                                <a href="https://www.facebook.com/profile.php?id=61579963706617">Facebook: Merriclean Solutions</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 max-w-[250px]">
                        <p className="text-card-color font-semibold text-sm">Operations & Area</p>
                        <div className="flex flex-col gap-1">
                            <div>
                                <div className="flex items-center gap-1">
                                    <Clock size={12} className="text-surface-text" />
                                    <p className="text-surface-text text-xs font-bold">Business Hours:</p>
                                </div>
                                <p className="text-surface-text text-xs">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={12} className="text-surface-text" />
                                    <p className="text-surface-text text-xs font-bold">Service Region:</p>
                                </div>
                                <p className="text-surface-text text-xs">Carbondale, IL & surrounding communities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </footer>
    )
}