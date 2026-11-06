export default function NavBar() {
    return (
        <nav className="flex items-center h-[60px] w-full">
            <div className="flex justify-around items-center w-full">
                <p className="font-bold">Merriclean Solutions</p>
                <ul className="flex gap-4">
                    <li className="hover:border-b border-b-secondary-color"><a href="#home">Home</a></li>
                    <li className="hover:border-b border-b-secondary-color"><a href="#services">Services</a></li>
                    <li className="hover:border-b border-b-secondary-color"><a href="#our-work">Our Work</a></li>
                    <li className="hover:border-b border-b-secondary-color"><a href="#about">About</a></li>
                    <li className="hover:border-b border-b-secondary-color"><a href="#contact">Contact</a></li>
                </ul>
                <button className="bg-button-background px-4 py-1 text-light-text rounded-md hover:brightness-90 cursor-pointer">Request a Quote</button>
            </div>
        </nav>
    )
}