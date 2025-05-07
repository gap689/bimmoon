import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { NavMenu } from "@/components/nav-menu";

export function TopNavigation() {
  return (
    <header className="w-full backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <nav className="relative flex items-center justify-between h-16 mx-4">
        {/* Left: Placeholder for future nav */}
        <div className="shrink-0">
          <a href="/" className="flex-1 flex items-center justify-start shrink-0">
            {/* Optional: Nav buttons or hamburger */}
            <Image
              src="/bimmoonlogo.png"
              alt="bimmoon logo"
              width={120}
              height={40}
              priority
              className="shrink-0"
            />
          </a>
        </div>

        {/* Center: Logo */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="text-xl font-retrophile">Bimmoon</div> */}
          {/* <Image
            src="/bimmoonlogo.png"
            alt="bimmoon logo"
            width={120}
            height={40}
            priority
          />
        </div> */}

        {/* Right: Placeholder for actions */}
        <div className="flex-1 flex items-center sm:justify-between justify-end mr-3">
          <NavMenu/>

          {/* Optional: Account, cart, etc */}
          <a
            href="https://wa.me/525569728426"
            target="_blank"
            title="Reach us via WhatsApp"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline text-xs text-nowrap">Cotiza</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
