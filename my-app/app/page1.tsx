export default function Home() {
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

      {/* Área central vazia */}
      <main className="flex-1 flex items-center justify-center">
        {/* Conteúdo futuro aqui */}
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
