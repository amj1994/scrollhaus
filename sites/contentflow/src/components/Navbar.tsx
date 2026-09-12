import Logo from './Logo';

const LINKS = ['Features', 'Workflows', 'Resources', 'Pricing'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6">
      <div className="flex items-center gap-4 md:gap-8 bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-full pl-4 pr-2.5 md:pl-5 md:pr-2.5 py-2.5 shadow-sm">
        <Logo size={28} />

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="gradient-border-btn text-sm font-semibold text-gray-900 rounded-full px-5 py-2 hover:bg-gray-50 shadow-sm"
        >
          Get started
        </button>
      </div>
    </nav>
  );
}
