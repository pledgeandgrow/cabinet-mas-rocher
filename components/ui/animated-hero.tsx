import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Home, MoveRight, PhoneCall, UserCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./badge";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Gestions locatives 🏠", "Transactions 💳", "Copropriétés 🏢"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000); // Increased time for better readability
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div 
      className="relative w-full h-[500px] md:h-[650px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://cabinet-michou.com/images/bandeau.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex gap-6 py-16 px-4 lg:py-28 justify-center flex-col items-center">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-black dark:text-white font-medium drop-shadow-md block mb-4 md:mb-6">Nous gérons vos</span>
              <div className="relative h-24 md:h-28 lg:h-32 w-full flex justify-center items-center overflow-visible">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-black dark:text-white drop-shadow-lg text-3xl md:text-4xl lg:text-6xl xl:text-7xl whitespace-nowrap px-2"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100,
                      damping: 15,
                      duration: 0.7
                    }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -80 : 80,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </div>
            </h1>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center drop-shadow-xl shadow-black mt-6 md:mt-8 px-4" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 0 0 3px rgba(0, 0, 0, 0.5)' }}>
              Le Cabinet Mas Rocher vous accompagne dans les différents domaines <br className="hidden sm:block" /> de la gestion immobilière.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 md:mt-8 w-full px-4 sm:w-auto sm:px-0">
            <Button 
              size="default" 
              className="gap-2 bg-[#8e2024] hover:bg-[#8e2024]/90 text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              <Link href="/annonces" className="flex items-center gap-2 justify-center w-full">
                <Home className="w-4 h-4" />
                Nos annonces
              </Link>
            </Button>
            <Button 
              size="default" 
              className="gap-2 bg-[#b69260] hover:bg-[#b69260]/90 text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              <Link href="https://michou.neotimm.com/extranet/#/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center w-full">
                <UserCheck2 className="w-4 h-4" />
                Espace client
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
