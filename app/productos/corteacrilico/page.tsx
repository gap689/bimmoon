'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Link, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BackButton } from "@/components/back-button";
import { SiGooglephotos } from "react-icons/si";
import { Button } from "@/components/ui/button";

const acrilicosImages = [
  { id: 'acrilico-1', src: '1.jpg', alt: 'Acrílico 1' },
  { id: 'acrilico-2', src: '2.jpg', alt: 'Acrílico 2' },
  { id: 'acrilico-3', src: '3.jpg', alt: 'Acrílico 3' },
  { id: 'acrilico-4', src: '4.jpg', alt: 'Acrílico 4' },
  { id: 'acrilico-5', src: '5.jpg', alt: 'Acrílico 5' },
  { id: 'acrilico-6', src: '6.jpg', alt: 'Acrílico 6' },
  { id: 'acrilico-7', src: '7.jpg', alt: 'Acrílico 7' },
  { id: 'acrilico-8', src: '8.jpg', alt: 'Acrílico 8' },
  { id: 'acrilico-9', src: '9.jpg', alt: 'Acrílico 9' },
  { id: 'acrilico-10', src: '10.jpg', alt: 'Acrílico 10' },
  { id: 'acrilico-11', src: '11.jpg', alt: 'Acrílico 11' },
  { id: 'acrilico-12', src: '12.jpg', alt: 'Acrílico 12' }
];

const AcrilicoPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // On load: check if URL contains ?item=...
  useEffect(() => {
    const item = searchParams.get("item");
    if (item) setSelected(item);
  }, [searchParams]);

  const handleImageClick = (id: string) => {
    setSelected(id);
    router.push(`/productos/corteacrilico?item=${id}`);
  };

  const closeOverlay = () => {
    setSelected(null);
    router.push("/productos/corteacrilico");
  };

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/productos/corteacrilico?item=${selected}`
      : "";

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, text:string) => {
    e.stopPropagation(); // prevent closing overlay

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 4000); // Reset after 2s
        })
        .catch((err) => {
          console.error("Clipboard API failed:", err);
          fallbackCopyTextToClipboard(text);
        });
    } else {
      fallbackCopyTextToClipboard(text);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
  
    // Avoid scrolling to bottom
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.warn("Fallback copy failed");
      }
    } catch (err) {
      console.error("Fallback copy error:", err);
    }
    document.body.removeChild(textArea);
  };

  const handleWhatsApp = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    window.open(
      `https://wa.me/?text=${encodeURIComponent("Mira este producto: " + shareUrl)}`,
      "_blank"
    );
  };

  const handleEmail = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    window.open(
      `mailto:?subject=Mira este producto&body=${encodeURIComponent(shareUrl)}`
    );
  };

  return ( 
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="w-full p-2 pb-4 sm:px-5 lg:px-7 flex justify-start">
        <BackButton/>
        <div className="">
          <Button variant="secondary">
            <a href="https://photos.app.goo.gl/RsAGMDwxBeaznDY4A" target="_blank" rel="noopener noreferrer" className="flex gap-2 cursor-pointer text-sm">
              Ver en Google Photos
              <SiGooglephotos className="w-6 h-6 shrink-0"/>
            </a>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {acrilicosImages.map((img) => (
          <div
            key={img.id}
            className="relative w-full overflow-hidden rounded-lg shadow-md aspect-[4/3] hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Image
              src={`/images/acrilicos/${img.src}`}
              onClick={() => handleImageClick(img.src)}
              alt={img.alt}
              width={300}
              height={225}
              className="max-w-full rounded-lg cursor-pointer object-cover aspect-[4/3]"
              // sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOverlay}
          >
            <motion.img
              src={`/images/acrilicos/${selected}`}
              alt={selected}
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
            />
            {/* Floating Action Buttons */}
            <motion.div
              className="fixed bottom-6 right-6 flex flex-col items-center justify-center gap-3 z-50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <button
                onClick={(e) => handleCopy(e, shareUrl)}
                className="bg-gray-200 text-white w-8 h-8 rounded-full p-1 shadow-lg hover:bg-gray-400 transition flex items-center justify-center"
                title="Copiar enlace"
              >
                <Link className="w-4 h-4 shrink-0 text-gray-500"/>
              </button>

              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white w-8 h-8 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
                title="Compartir por WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0"/>
              </button>

              <button
                onClick={handleEmail}
                className="bg-gray-600 text-white w-8 h-8 rounded-full p-1 shadow-lg hover:bg-gray-800 transition flex items-center justify-center"
                title="Compartir por Email"
              >
                <Mail className="h-4 w-4 shrink-0"/>
              </button>

              {/* Feedback */}
              <div className="h-10 w-20">
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-white text-xs text-center"
                  >
                    Copiado ✔️
                  </motion.div>
                )}
              </div>
            </motion.div>

            <button
              onClick={closeOverlay}
              className="absolute top-2 right-2 text-white text-2xl bg-black/30 p-2 w-5 h-5"
            >
              <p>&times;</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
 
export default AcrilicoPage;