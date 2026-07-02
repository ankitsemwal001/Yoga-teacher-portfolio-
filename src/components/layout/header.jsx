const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-[#DDD6CB] bg-[#F8F6F2]/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">

                <a
                    href="/"
                    className="font-serif text-xl font-semibold tracking-tight text-[#1F1F1F]"
                >
                    Yoga Portfolio
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {['About', 'Services', 'Experience', 'Gallery', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-[#1F1F1F] transition-all duration-300 hover:text-[#8C6A43] hover:-translate-y-0.5"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <button className="rounded-full bg-[#8C6A43] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#755632]">
                    Book Session
                </button>

            </div>
        </header>
    );
};

export default Header;