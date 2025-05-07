
export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left side - Company Info */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-slate-400 font-retrophile">Bimmoon</h2>
          <p className="text-sm text-gray-600">
            Crafting quality since 2000.
          </p>
        </div>

        {/* Center - Site Links */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
            <li>
              <a href="/services" className="text-sm text-gray-700 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-700 hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm text-gray-700 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm text-gray-700 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side - Copyright */}
        <div className="mt-4 md:mt-0">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Bimmoon Stickers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
