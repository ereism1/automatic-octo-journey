'use client';

export default function Footer() {
  return (
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
  );
}