import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Logo & Address */}
        <div className="space-y-2">
          <div className="flex gap-3">
            <div className="">
              <Image
                src="/bimmoonlogo.png"
                alt="Bimmoon Media Logo"
                width={120}
                height={40}
              />
            </div>
            <div className="flex flex-col justify-center p-4">
              <p className="text-xl font-bold">Bimmoon Stickers</p>
              <p className="font-sm">Huixquilucan, Edo Mex</p>
              <Link
                href="https://www.google.com/maps?q=1234+Example+Street"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-yellow-300 uppercase text-sm font-semibold font-michroma"
              >
                Google Maps
              </Link>
              <p className="font-sm">rotulos.bimmoon@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="text-center space-y-2">
          <div className="font-bold uppercase text-lg">
            Sociales
          </div>

          <div className="flex justify-center gap-4 mt-2">
            <Link href="https://www.facebook.com/share/16oGd1C3M4/?mibextid=wwXIfr" target="_blank">
              <FaFacebookF className="text-xl w-7 h-7 text-[rgb(255,220,72)]" />
            </Link>
            <Link href="https://www.instagram.com/bimmoon_stickers?igsh=bG4zd2k4YWo3N2xm&utm_source=qr" target="_blank">
              <FaInstagram className="text-xl w-7 h-7 text-[rgb(255,220,72)]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-[rgb(255,220,72)] font-michroma">
        © 2025 Bimmoon Stickers. All rights reserved.
      </div>
    </footer>
  );
}
