// src/app/svm/page.tsx
import Navigation from "../navigation";
import { MetricsComparison } from "@/components/metricscomparison";
import { modelResults } from "@/types/metrics";

export default function SVM() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="space-y-12">
          {/* Seção de Introdução Teórica */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black mb-6">Support Vector Machine</h2>
              <p className="text-xl text-gray-600">
                Algoritmo de aprendizado de máquina baseado em vetores de suporte
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card Principal com Definição */}
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">O que é?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Uma máquina de vetores de suporte (SVM) é um algoritmo de aprendizado 
                  de máquina supervisionado que classifica os dados encontrando uma linha 
                  ou hiperplano ideal que maximiza a distância entre cada classe em um 
                  espaço N-dimensional.
                </p>
              </div>

              {/* Card com Características */}
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">Características-chave</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Maximização de margens entre classes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Eficaz em espaços de alta dimensionalidade</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Versátil através do uso de diferentes kernels</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vantagens e Aplicações como no Random Forest */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">Vantagens</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 round-full" />
                    <p>Alta precisão em espaços de alta dimensão</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 round-full" />
                    <p>Eficiente em memória</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 round-full" />
                    <p>Versatilidade através de diferentes funções kernel</p>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">Aplicações</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 round-full" />
                    <p>Classificação de dados</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 round-full" />
                    <p>Regressão</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 round-full" />
                    <p>Detecção de outliers</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção de Métricas */}
          <MetricsComparison 
            metrics={modelResults.svm}
            modelName="Resultados do Modelo"
          />
        </div>
      </div>
    </main>
  );
}