
export function TopNavigation() {
  return (
    <header className="w-full border-b backdrop-blur-md fixed top-0 left-0 right-0 z-10">
      <nav className="relative flex items-center justify-between h-16">
        {/* Left: Placeholder for future nav */}
        <div className="flex-1 flex items-center justify-start">
          {/* Optional: Nav buttons or hamburger */}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="text-xl font-retrophile">Bimmoon</div>
        </div>

        {/* Right: Placeholder for actions */}
        <div className="flex-1 flex items-center justify-end">
          {/* Optional: Account, cart, etc */}
        </div>
      </nav>
    </header>
  );
}
