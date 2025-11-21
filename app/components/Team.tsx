'use client';

interface ContentScreenProps {
  selectedOption: string;
  onBack: () => void;
}

export default function ContentScreen({ 
  selectedOption, 
  onBack 
}: ContentScreenProps) {
  return (
    <div className="max-w-6xl w-full">
      {/* Header do container */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold" style={{ color: '#2F4F4F' }}>
          {selectedOption}
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90"
          style={{ backgroundColor: '#2F4F4F' }}
        >
          Voltar
        </button>
      </div>

      {/* Container principal grande PRETO */}
      <div 
        className="w-full p-12 rounded-2xl shadow-lg min-h-[600px] bg-black"
      >
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-6">
            Conteúdo de {selectedOption}
          </h3>
          
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Este é um grande container para exibir o conteúdo relacionado à opção selecionada.
            </p>
            
            <p className="opacity-90">
              Você pode adicionar aqui qualquer tipo de conteúdo:
            </p>
            
            <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
              <li>Textos e informações detalhadas</li>
              <li>Imagens e gráficos</li>
              <li>Tabelas de dados</li>
              <li>Formulários personalizados</li>
              <li>Componentes interativos</li>
            </ul>

            <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
              <h4 className="font-semibold mb-2">Área de Destaque</h4>
              <p className="opacity-90">
                Esta é uma área destacada dentro do container principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}