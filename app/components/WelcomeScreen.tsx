'use client';

interface WelcomeScreenProps {
  onExplore: () => void;
}

export default function WelcomeScreen({ onExplore }: WelcomeScreenProps) {
  return (
    <div 
      className="max-w-2xl w-full p-8 rounded-2xl shadow-lg text-center"
      style={{ backgroundColor: '#2F4F4F' }}
    >
      <h1 className="text-4xl font-bold text-white mb-4">
        Bem-vindo!
      </h1>
      <p className="text-lg text-white opacity-90 mb-6">
        Estamos felizes em tê-lo aqui. Explore nossas funcionalidades e aproveite ao máximo sua experiência.
      </p>
      <button
        onClick={onExplore}
        className="px-8 py-3 bg-white text-xl font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl"
        style={{ color: '#2F4F4F' }}
      >
        Explorar
      </button>
    </div>
  );
}