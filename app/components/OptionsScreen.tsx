'use client';

interface OptionsScreenProps {
  onSelectOption: (option: string) => void;
  onBack: () => void;
}

export default function OptionsScreen({ onSelectOption, onBack }: OptionsScreenProps) {
  return (
    <div className="max-w-5xl w-full">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#2F4F4F' }}>
        Escolha uma opção
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Opção 1 */}
        <div 
          className="p-6 rounded-2xl shadow-lg text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: '#2F4F4F' }}
          onClick={() => onSelectOption('Opção 1')}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Opção 1
          </h3>
          <p className="text-white opacity-90">
            Descrição da primeira opção disponível para você.
          </p>
        </div>

        {/* Opção 2 */}
        <div 
          className="p-6 rounded-2xl shadow-lg text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: '#2F4F4F' }}
          onClick={() => onSelectOption('Opção 2')}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Opção 2
          </h3>
          <p className="text-white opacity-90">
            Descrição da segunda opção disponível para você.
          </p>
        </div>

        {/* Opção 3 */}
        <div 
          className="p-6 rounded-2xl shadow-lg text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: '#2F4F4F' }}
          onClick={() => onSelectOption('Opção 3')}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Opção 3
          </h3>
          <p className="text-white opacity-90">
            Descrição da terceira opção disponível para você.
          </p>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90"
          style={{ backgroundColor: '#2F4F4F' }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}