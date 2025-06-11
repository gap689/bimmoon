import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  label?: string;
}

const WhatsAppButton = ({ label = "¡Pide por Whatsapp!" }: WhatsAppButtonProps) => {
  return ( 
    <a
      href="https://wa.me/526646704470?text=Hola%2C%20quiero%20cotizar%20un%20producto%20personalizado.%20%C2%BFMe%20puedes%20ayudar%3F"
      target="_blank"
      title="Reach us via WhatsApp"
      rel="noopener noreferrer"
      className="flex items-center w-fit gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
    >
      <FaWhatsapp className="w-4 h-4 shrink-0" />
      <span className="hidden sm:inline text-xs text-nowrap font-michroma">
        {label}
      </span>
    </a>
  );
}
 
export default WhatsAppButton;