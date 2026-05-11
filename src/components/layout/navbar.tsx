export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-[0.25em]">
          SAGAR PATHAK
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-black/50">
          {["Work", "Systems", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="hover:text-black transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
