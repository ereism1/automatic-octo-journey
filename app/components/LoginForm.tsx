'use client';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login:', { email, password });
    // Aqui você adiciona a lógica de autenticação
  };

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

      {/* Área central com formulário de login */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div 
          className="w-full max-w-md p-8 rounded-xl shadow-lg"
          style={{ backgroundColor: '#2F4F4F' }}
        >
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Login
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-transparent focus:border-white focus:outline-none transition-all"
                style={{ backgroundColor: '#7FFFD4' }}
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-transparent focus:border-white focus:outline-none transition-all"
                style={{ backgroundColor: '#7FFFD4' }}
                placeholder="••••••••"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-2.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 mt-6"
              style={{ backgroundColor: '#1a3333' }}
            >
              Entrar
            </button>
          </div>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-white hover:underline opacity-90">
              Esqueceu sua senha?
            </a>
          </div>
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
