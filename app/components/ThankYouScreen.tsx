'use client';

interface ThankYouScreenProps {
  name: string;
  email: string;
  onRestart: () => void;
}

export default function ThankYouScreen({ name, email, onRestart }: ThankYouScreenProps) {
  return (
    <div 
      className="max-w-2xl w-full p-8 rounded-2xl shadow-lg text-center"
      style={{ backgroundColor: '#2F4F4F' }}
    >
      <h1 className="text-4xl font-bold text-white mb-4">
        Obrigado!
      </h1>
      <p className="text-lg text-white opacity-90 mb-2">
        Olá, <span className="font-semibold">{name}</span>!
      </p>
      <p className="text-white opacity-90 mb-6">
        Recebemos seus dados com sucesso. Em breve entraremos em contato através do email <span className="font-semibold">{email}</span>.
      </p>
      <button
        onClick={onRestart}
        className="px-8 py-3 bg-white text-xl font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl"
        style={{ color: '#2F4F4F' }}
      >
        Voltar ao Início
      </button>
    </div>
  );
}