'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import OptionsScreen  from './components/OptionsScreen';
import LoginScreen from './components/LoginScreen';
import ThankYouScreen from './components/ThankYouScreen';

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleNavigation = (page: string) => {
    alert(`Navegando para: ${page}`);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowLogin(true);
    setShowOptions(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
      <Header onNavigate={handleNavigation} />

      <main className="flex-1 flex items-center justify-center p-6">
        {showThankYou ? (
          <ThankYouScreen 
            name={formData.name}
            email={formData.email}
            onRestart={handleRestart}
          />
        ) : showLogin ? (
          <LoginScreen
            selectedOption={selectedOption}
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        ) : showOptions ? (
          <OptionsScreen
            onSelectOption={handleOptionSelect}
            onBack={() => setShowOptions(false)}
          />
        ) : (
          <WelcomeScreen onExplore={() => setShowOptions(true)} />
        )}
      </main>

      <Footer />
    </div>
  );
}