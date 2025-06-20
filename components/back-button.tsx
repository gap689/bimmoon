import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const BackButton = () => {
  return (
    <Link scroll={true}
      href="/productos"
      className="hover:text-yellow-300 flex items-center gap-2 cursor-pointer text-sm mx-3"
    >
      <ChevronLeft className='w-5 h-5 shrink-0'/> Volver
    </Link>
  );
};