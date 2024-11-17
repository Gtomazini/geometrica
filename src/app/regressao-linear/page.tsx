// src/app/regressao-linear/page.tsx
import Navigation from "../navigation";
import { MetricsComparison } from "@/components/metricscomparison";
import { modelResults } from "@/types/metrics";

export default function RegressaoLinear() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="space-y-12">
          {/* Seção de Introdução Teórica */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black mb-6">Regressão Linear</h2>
              <p className="text-xl text-gray-600">
                Modelo estatístico para análise de relações entre variáveis contínuas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card Principal com Definição */}
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">O que é?</h3>
                <p className="text-gray-600 leading-relaxed">
                  O modelo de regressão linear múltipla é um modelo estatístico versátil 
                  para avaliar relacionamentos entre um destino contínuo e os preditores.
                </p>
              </div>

              {/* Card com Características */}
              <div className="p-8 bg-white rounded-xl brutal-shadow">
                <h3 className="text-2xl font-bold mb-4">Características</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Suporta preditores contínuos, categóricos e derivados</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Permite modelagem de relacionamentos não lineares</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-yellow-400 rounded-full" />
                    <p>Inclui termo constante (interceptação) no modelo</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detalhamento Técnico */}
            <div className="p-8 bg-white rounded-xl brutal-shadow">
              <h3 className="text-2xl font-bold mb-4">Detalhamento Técnico</h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  O modelo é linear porque consiste em termos aditivos em que cada termo é um 
                  preditor que é multiplicado por um coeficiente estimado. O termo constante 
                  (interceptação) normalmente também é incluído no modelo.
                </p>
                <p className="leading-relaxed">
                  A regressão linear é usada para gerar insights para gráficos que contêm pelo 
                  menos dois campos contínuos com um identificado como o destino e o outro como 
                  um preditor. Além disso, um preditor categórico e dois campos contínuos 
                  auxiliares podem ser especificados em um gráfico e usados para gerar um modelo 
                  de regressão apropriado.
                </p>
                <p className="leading-relaxed">
                A significância estatística do modelo é avaliada através de testes estatísticos 
                apropriados, e sua performance é medida através de métricas como R², RMSE e Erro Máximo.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Métricas */}
          <MetricsComparison 
            metrics={modelResults.regressaoLinear}
            modelName="Resultados do Modelo"
          />
        </div>
      </div>
    </main>
  );
}