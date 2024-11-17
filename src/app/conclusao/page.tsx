// src/app/conclusao/page.tsx
'use client'

import Navigation from "../navigation";
import { modelResults } from "@/types/metrics";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Preparar dados para os gráficos
const prepareChartData = () => {
  const metrics = ['R² (Validação)', 'RMSE (Validação)', 'Erro Máximo (Validação)'];
  return metrics.map(metric => ({
    name: metric,
    'Regressão Linear': metric.includes('R²') ? modelResults.regressaoLinear.r2.validation :
                       metric.includes('RMSE') ? modelResults.regressaoLinear.rmse.validation :
                       modelResults.regressaoLinear.errMax.validation,
    'SVM': metric.includes('R²') ? modelResults.svm.r2.validation :
           metric.includes('RMSE') ? modelResults.svm.rmse.validation :
           modelResults.svm.errMax.validation,
    'Random Forest': metric.includes('R²') ? modelResults.randomForest.r2.validation :
                    metric.includes('RMSE') ? modelResults.randomForest.rmse.validation :
                    modelResults.randomForest.errMax.validation,
  }));
};

export default function Conclusao() {
  const chartData = prepareChartData();

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="space-y-12">
          {/* Cabeçalho */}
          <div>
            <h2 className="text-5xl font-black mb-6">Conclusão</h2>
            <p className="text-xl text-gray-600">
              Análise comparativa dos modelos e suas performances
            </p>
          </div>

          {/* Gráfico Comparativo */}
          <div className="p-8 bg-white rounded-xl brutal-shadow">
            <h3 className="text-2xl font-bold mb-6">Comparativo de Performance</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Regressão Linear" fill="#fbbf24" />
                  <Bar dataKey="SVM" fill="#1e293b" />
                  <Bar dataKey="Random Forest" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tabela Comparativa */}
          <div className="p-8 bg-white rounded-xl brutal-shadow">
            <h3 className="text-2xl font-bold mb-6">Métricas Detalhadas</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Modelo</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">R² (Val.)</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">RMSE (Val.)</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Erro Máx. (Val.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Regressão Linear</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.regressaoLinear.r2.validation.toFixed(4)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.regressaoLinear.rmse.validation.toFixed(4)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.regressaoLinear.errMax.validation.toFixed(4)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">SVM</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.svm.r2.validation.toFixed(4)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.svm.rmse.validation.toFixed(4)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.svm.errMax.validation.toFixed(4)}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Random Forest</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.randomForest.r2.validation.toFixed(4)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.randomForest.rmse.validation.toFixed(4)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{modelResults.randomForest.errMax.validation.toFixed(4)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Análise Final */}
          <div className="p-8 bg-white rounded-xl brutal-shadow">
            <h3 className="text-2xl font-bold mb-6">Análise dos Resultados</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Analisando os resultados obtidos, observamos que o Random Forest apresentou 
                o melhor desempenho geral, com o maior R² ({modelResults.randomForest.r2.validation.toFixed(4)}) 
                e menor RMSE ({modelResults.randomForest.rmse.validation.toFixed(4)}) na validação.
              </p>
              <p>
                O SVM também demonstrou boa performance, com R² de {modelResults.svm.r2.validation.toFixed(4)}, 
                seguido pela Regressão Linear com {modelResults.regressaoLinear.r2.validation.toFixed(4)}.
              </p>
              <p>
                Em termos de erro máximo, o Random Forest e SVM apresentaram resultados similares, 
                ambos melhores que a Regressão Linear, indicando maior robustez destes modelos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}