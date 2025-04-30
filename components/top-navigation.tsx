
export function TopNavigation() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex md:h-14 h-12 items-center justify-between px-4">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-lg font-semibold hover:underline">
            Printing Co.
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-sm font-medium hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Open Menu"
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
