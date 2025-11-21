'use client';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="w-full py-4 px-6 shadow-md bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold" style={{ color: '#2F4F4F' }}>
          Meu Site
        </h1>
        <div className="flex gap-2">
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#2F4F4F' }}
            onClick={() => onNavigate('Página 1')}
          >
            Botão 1
          </button>
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#2F4F4F' }}
            onClick={() => onNavigate('Página 2')}
          >
            Botão 2
          </button>
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#2F4F4F' }}
            onClick={() => onNavigate('Página 3')}
          >
            Botão 3
          </button>
        </div>
      </div>
    </header>
  );
}