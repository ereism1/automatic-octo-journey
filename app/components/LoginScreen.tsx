'use client';
import { FormEvent, ChangeEvent } from 'react';

interface LoginScreenProps {
  selectedOption: string;
  formData: { name: string; email: string };
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}

export default function LoginScreen({ 
  selectedOption, 
  formData, 
  onInputChange, 
  onSubmit, 
  onBack 
}: LoginScreenProps) {
  return (
    <div 
      className="max-w-md w-full p-8 rounded-2xl shadow-lg"
      style={{ backgroundColor: '#2F4F4F' }}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Login
      </h2>
      <p className="text-white opacity-90 text-center mb-6">
        Você escolheu: <span className="font-semibold">{selectedOption}</span>
      </p>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Digite seu nome"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            required
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Digite seu email"
          />
        </div>
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl mt-6"
          style={{ color: '#2F4F4F' }}
        >
          Entrar
        </button>
      </form>
      
      <button
        onClick={onBack}
        className="w-full mt-4 px-6 py-2 border-2 border-white text-white font-medium rounded-lg transition-all hover:bg-white hover:bg-opacity-10"
      >
        Voltar
      </button>
    </div>
  );
}
