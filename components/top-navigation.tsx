import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { NavMenu } from "@/components/nav-menu";

export function TopNavigation() {
  return (
    <header className="w-full backdrop-blur-sm fixed top-0 left-0 right-0 z-30">
      <nav className="relative flex items-center justify-between h-16 px-2 sm:px-4 lg:px-6">

        <a href="/" className="flex items-center justify-start shrink-0">
          {/* Optional: Nav buttons or hamburger */}
          <Image
            src="/bimmoonlogo.png"
            alt="bimmoon logo"
            width={110}
            height={40}
            priority
            className="shrink-0 "
          />
        </a>

        {/* Right: Placeholder for actions */}
        <div className="flex-1 flex items-center justify-end mr-3">
          <NavMenu/>

          {/* Optional: Account, cart, etc */}
          <a
            href="https://wa.me/526646704470?text=Hola%2C%20quiero%20cotizar%20un%20producto%20personalizado.%20%C2%BFMe%20puedes%20ayudar%3F"
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
