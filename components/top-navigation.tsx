import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { NavMenu } from "@/components/nav-menu";
import WhatsAppButton from "@/components/whatsapp-button";

export function TopNavigation() {
  return (
    <header className="w-full backdrop-blur-sm fixed top-0 left-0 right-0 z-30">
      <nav className="relative flex items-center justify-between h-16 px-2 sm:px-4 lg:px-6">

        <a href="/" className="flex items-center justify-start shrink-0">
          <Image
            src="/bimmoonlogo.png"
            alt="bimmoon logo"
            width={110}
            height={40}
            priority
            className="shrink-0 "
          />
        </a>

        <div className="flex-1 flex items-center justify-end mr-3">
          <NavMenu/>
          <WhatsAppButton/>
        </div>
      </nav>
    </header>
  );
}
