// src/app/random-forest/page.tsx
import Navigation from "../navigation";
import { MetricsComparison } from "@/components/metricscomparison";
import { modelResults } from "@/types/metrics";

export default function RandomForest() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="space-y-12">
          {/* Seção de Introdução Teórica */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black mb-6">Random Forest</h2>
              <p className="text-xl text-gray-600">
                Algoritmo ensemble baseado em múltiplas árvores de decisão
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card Principal com Definição */}
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">O que é?</h3>
                <p className="text-gray-600 leading-relaxed">
                  A floresta aleatória (random forest) é um algoritmo de aprendizado de 
                  máquina, marca registrada por Leo Breiman e Adele Cutler, que combina 
                  a saída de várias árvores de decisão para chegar a um único resultado.
                </p>
              </div>

              {/* Card com Características */}
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">Características-chave</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Combinação de múltiplas árvores de decisão</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Versatilidade em problemas de classificação e regressão</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Alta facilidade de uso e flexibilidade</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card de Vantagens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">Vantagens</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Redução do overfitting através do ensemble de árvores</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Robusto a outliers e ruídos nos dados</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Fornece medidas de importância das variáveis</p>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">Aplicações</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Previsão de valores contínuos (regressão)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Classificação de categorias</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Análise de importância de features</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção de Métricas */}
          <MetricsComparison 
            metrics={modelResults.randomForest}
            modelName="Resultados do Modelo"
          />
        </div>
      </div>
    </main>
  );
}