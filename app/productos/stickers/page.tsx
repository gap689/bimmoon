'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  { id: "keychain-1", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", alt: "Llaveros personalizados" },
  { id: "keychain-2", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", alt: "Llaveros personalizados" },
  { id: "sign-3", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "Letrero moderno" },
  { id: "sticker-789", src: "/gallery/sticker.jpg", alt: "Sticker holográfico" },
];

const imageGroups = [
  [
    { id: "img-1", src: "image.jpg", alt: "Producto 1" },
    { id: "img-2", src: "image-1.jpg", alt: "Producto 2" },
    { id: "img-3", src: "image-2.jpg", alt: "Producto 3" }
  ],
  [
    { id: "img-4", src: "image-3.jpg", alt: "Producto 4" },
    { id: "img-5", src: "image-4.jpg", alt: "Producto 5" },
    { id: "img-6", src: "image-5.jpg", alt: "Producto 6" }
  ],
  [
    { id: "img-7", src: "image-6.jpg", alt: "Producto 7" },
    { id: "img-8", src: "image-7.jpg", alt: "Producto 8" },
    { id: "img-9", src: "image-8.jpg", alt: "Producto 9" }
  ],
  [
    { id: "img-10", src: "image-9.jpg", alt: "Producto 10" },
    { id: "img-11", src: "image-10.jpg", alt: "Producto 11" },
    { id: "img-12", src: "image-11.jpg", alt: "Producto 12" }
  ]
];
const StickersPage = () => {
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
    router.push(`/productos/stickers?item=${id}`);
  };

  const closeOverlay = () => {
    setSelected(null);
    router.push("/productos/stickers");
  };

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/productos/stickers?item=${selected}`
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
    <div className="flex items-center justify-center pt-16">
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageGroups.map((group, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {group.map((img) => (
              <img
                key={img.id}
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/${img.src}`}
                alt={img.alt}
                onClick={() => handleImageClick(img.src)}
              />
            ))}
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
            {/* <motion.div
              layoutId={selected}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            > */}
              {/* <Image
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/${selected}`}
                alt="Expanded"
                width={1000}
                height={600}
                className="w-full h-auto rounded-lg"
              /> */}
              <motion.img
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/${selected}`}
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
            {/* </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    );
}
 
export default StickersPage;