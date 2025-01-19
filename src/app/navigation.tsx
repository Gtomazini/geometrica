'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Sobre', href: '/' },
    { name: 'Regressão Linear Múltipla', href: '/regressao-linear' },
    { name: 'Support Vector Machine', href: '/svm' },
    { name: 'Random Forest', href: '/random-forest' },
    { name: 'Conclusão', href: '/conclusao' },
  ];

  return (
    <>
      {/* Background Statue - Ajustado */}
      <div className="fixed right-0 top-0 h-screen w-1/2 overflow-hidden -z-10">
        <div className="relative h-full w-full">
          <Image
            src="/matema.png"
            alt="Musa da Matemática"
            fill
            className="object-contain object-right opacity-20"
            style={{ filter: 'grayscale(100%)' }}
            priority
          />
          {/* Efeito amarelo */}
          <div className="absolute top-0 right-0 h-full w-1/2 bg-yellow-400 opacity-30 transform -skew-x-12" />
        </div>
      </div>

      {/* Header */}
      <header className="relative w-full bg-transparent py-8">
        <div className="max-w-7xl mx-auto px-8">
          {/* Logo e Título */}
          <div className="mb-12">
            <h1 className="text-6xl font-black text-black mb-2">Geometrica</h1>
            <p className="text-2xl text-gray-600">Predição e Análise</p>
          </div>

          {/* Navegação */}
          <div className="flex gap-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    px-6 py-3 rounded-xl text-sm font-medium transition-all brutal-shadow
                    ${isActive 
                      ? 'bg-yellow-400 text-black border-2 border-black' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4">
        <div className="max-w-7xl mx-auto text-sm flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          Projeto Integrador IV - UNIVESP - Todos os Autores © 2024
        </div>
      </footer>
    </>
  );
};

export default Navigation;