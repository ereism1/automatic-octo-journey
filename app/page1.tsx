"use client"
import { useState } from 'react';

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleNavigation = (page) => {
    alert(`Navegando para: ${page}`);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowLogin(true);
    setShowOptions(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    setShowLogin(false);
    setShowThankYou(true);
  };

  const handleBack = () => {
    setShowLogin(false);
    setShowOptions(true);
    setFormData({ name: '', email: '' });
  };

  const handleRestart = () => {
    setShowThankYou(false);
    setShowOptions(false);
    setShowLogin(false);
    setFormData({ name: '', email: '' });
    setSelectedOption('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header com barra e botões */}
      <header className="w-full py-4 px-6 shadow-md bg-white/90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold" style={{ color: '#2F4F4F' }}>Meu Site</h1>
          <div className="flex gap-2">
            <button 
              className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#2F4F4F' }}
              onClick={() => handleNavigation('Página 1')}
            >
              Botão 1
            </button>
            <button 
              className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#2F4F4F' }}
              onClick={() => handleNavigation('Página 2')}
            >
              Botão 2
            </button>
            <button 
              className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#2F4F4F' }}
              onClick={() => handleNavigation('Página 3')}
            >
              Botão 3
            </button>
          </div>
        </div>
      </header>

      {/* Área central com mensagem de boas-vindas, opções, login ou agradecimento */}
      <main className="flex-1 flex items-center justify-center p-6">
        {!showOptions && !showLogin && !showThankYou ? (
          <div 
            className="max-w-2xl w-full p-8 rounded-2xl shadow-lg text-center"
            style={{ backgroundColor: '#2F4F4F' }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Bem-vindo!
            </h1>
            <p className="text-lg text-white opacity-90 mb-6">
              Receba todos os dias novidades do mundo futebolístico! Explore nossas funcionalidades e aproveite ao máximo sua experiência.
            </p>
            <button
              onClick={() => setShowOptions(true)}
              className="px-8 py-3 bg-white text-xl font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: '#2F4F4F' }}
            >
              Explorar
            </button>
          </div>
        ) : showThankYou ? (
          <div 
            className="max-w-2xl w-full p-8 rounded-2xl shadow-lg text-center"
            style={{ backgroundColor: '#2F4F4F' }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Obrigado!
            </h1>
            <p className="text-lg text-white opacity-90 mb-2">
              Olá, <span className="font-semibold">{formData.name}</span>!
            </p>
            <p className="text-white opacity-90 mb-6">
              Recebemos seus dados com sucesso. Em breve entraremos em contato através do email <span className="font-semibold">{formData.email}</span>.
            </p>
            <button
              onClick={handleRestart}
              className="px-8 py-3 bg-white text-xl font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: '#2F4F4F' }}
            >
              Voltar ao Início
            </button>
          </div>
        ) : showLogin ? (
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
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
              onClick={handleBack}
              className="w-full mt-4 px-6 py-2 border-2 border-white text-white font-medium rounded-lg transition-all hover:bg-white hover:bg-opacity-10"
            >
              Voltar
            </button>
          </div>
        ) : (
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#2F4F4F' }}>
              Qual seu time do coração?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Opção 1 */}
              <div 
                className="p-6 rounded-2xl shadow-lg text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#2F4F4F' }}
                onClick={() => handleOptionSelect('Opção 1')}
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  Escolher time
                </h3>
                <p className="text-white opacity-90">
                  Descrição da primeira opção disponível para você.
                </p>
              </div>

              {/* Opção 2 */}
              <div 
                className="p-6 rounded-2xl shadow-lg text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#2F4F4F' }}
                onClick={() => handleOptionSelect('Opção 2')}
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  Escolher técnico
                </h3>
                <p className="text-white opacity-90">
                  Descrição da segunda opção disponível para você.
                </p>
              </div>

              {/* Opção 3 */}
              <div 
                className="p-6 rounded-2xl shadow-lg text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#2F4F4F' }}
                onClick={() => handleOptionSelect('Opção 3')}
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  Escolher jogador
                </h3>
                <p className="text-white opacity-90">
                  Descrição da terceira opção disponível para você.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={() => setShowOptions(false)}
                className="px-6 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: '#2F4F4F' }}
              >
                Voltar
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Rodapé */}
      <footer 
        className="w-full py-4 px-6 text-white"
        style={{ backgroundColor: '#2F4F4F' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-center md:text-left">
              <p className="font-semibold">mail</p>
              <p className="text-xs opacity-90">contato@exemplo.com</p>
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