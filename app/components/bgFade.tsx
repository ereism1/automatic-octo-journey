
"use client"
import { useEffect, useState, ReactNode } from "react";

interface BgFadeProps {
  children: ReactNode;
}

export default function BgFade({ children }: BgFadeProps) {
  const images = [
   "blog3/automatic-octo-journey/public/63zvREfT_400x400.png",
   "blog3/automatic-octo-journey/public/0955f10d30e12c074e152fc5c94e6082.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <img
        src={images[currentIndex]}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: fade ? 0 : 1 }}
      />

      {/* Conteúdo que fica por cima */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
