import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ['About', 'Services', 'Experience', 'Gallery', 'Contact'];

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-[#DDD6CB] bg-[#F8F6F2]/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">

                <a
                    href="/"
                    className="font-serif text-xl font-semibold tracking-tight text-[#1F1F1F] transition-opacity hover:opacity-80"
                >
                    Yoga Portfolio
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-[#1F1F1F] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#8C6A43]"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <button className="rounded-full bg-[#8C6A43] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#755632]">
                        Book Session
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="text-[#1F1F1F] transition-colors hover:text-[#8C6A43] md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen ? 'max-h-96 border-t border-[#DDD6CB] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col items-center gap-5 bg-[#F8F6F2] py-6 shadow-lg">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-[#1F1F1F] transition-colors duration-200 hover:text-[#8C6A43]"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="mt-2 rounded-full bg-[#8C6A43] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#755632]">
                        Book Session
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;