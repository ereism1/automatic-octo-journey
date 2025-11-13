'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#7FFFD4' }}>
      {/* Header com botões no canto superior direito */}
      <header className="w-full p-3 flex justify-end">
        <div className="flex gap-1">
          <button 
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#2F4F4F' }}
          >
            
            Botão 1
          </button>
          <button 
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#2F4F4F' }}
            onClick={() => router.push('page2')}
          >
            Botão 2
          </button>
          <button 
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#2F4F4F' }}
          >
            Botão 3
          </button>
        </div>
      </header>
ggiahsgisdj90ga9s0jvisvja09       {/* Área central vazia */}
     
        <main className="flex-1 grid items-center justify-center px-8 h-full">
             <h2 className="text-2xl font-bold text-white text-center mb-6">
            Escolha seu tema:
          </h2>
        <div 
          className="w-full max-w-[2000px] h-100 p-21 rounded-xl shadow-lg flex-1 flex items-center justify-center"
          style={{ backgroundColor: '#2F4F4F' }}
        >
     
          
          <div 
          className="w-full max-w-[300px] h-60 p-20 m-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#fcfcfcff' }}
        ></div>
         <div 
          className="w-full max-w-md h-60 p-20 m-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#fcfcfcff' }}
        ></div>
           <div 
          className="w-full max-w-md h-60 p-20 m-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#fcfcfcff' }}
        ></div>
           <div 
          className="w-full max-w-md h-60 p-20 m-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#fcfcfcff' }}
        ></div>
           <div 
          className="w-full max-w-md h-60 p-20 m-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#fcfcfcff' }}
        ></div>
           <div 
          className="w-full max-w-md h-60 p-20 m-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#fcfcfcff' }}
        ></div>
           <div 
          className="w-full max-w-md h-60 p-20 m-2 rounded-xl shadow-lg"
          style={{ backgroundColor: '#fcfcfcff' }}
        ></div>
        

        </div>

        
      
      </main>

      {/* Rodapé */}
      <footer 
        className="w-full py-4 px-6 text-white"
        style={{ backgroundColor: '#2F4F4F' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-center md:text-left">
              <p className="font-semibold">Seu Nome</p>
              <p className="text-xs opacity-90">Nome da Empresa</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-xs opacity-75">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
