// src/components/MetricsComparison.tsx
'use client'

import { ModelMetrics } from '@/types/metrics';

interface MetricsCardProps {
  title: string;
  trainingValue: number;
  validationValue: number;
  format?: (value: number) => string;
}

const MetricsCard = ({ title, trainingValue, validationValue, format = (v) => v.toFixed(4) }: MetricsCardProps) => (
  <div className="p-6 bg-white rounded-xl brutal-shadow">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-3">
      <div>
        <p className="text-sm text-gray-500">Training</p>
        <p className="text-3xl font-bold">{format(trainingValue)}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Validation</p>
        <p className="text-3xl font-bold">{format(validationValue)}</p>
      </div>
    </div>
  </div>
);

interface MetricsComparisonProps {
  metrics: ModelMetrics;
  modelName: string;
}

export const MetricsComparison = ({ metrics, modelName }: MetricsComparisonProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-black mb-4">{modelName}</h2>
      <p className="text-xl text-gray-600">
        Análise detalhada das métricas de performance do modelo em dados de treino e validação.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricsCard
          title="R² Score"
          trainingValue={metrics.r2.training}
          validationValue={metrics.r2.validation}
        />
        <MetricsCard
          title="RMSE"
          trainingValue={metrics.rmse.training}
          validationValue={metrics.rmse.validation}
        />
        <MetricsCard
          title="Erro Máximo"
          trainingValue={metrics.errMax.training}
          validationValue={metrics.errMax.validation}
        />
      </div>

      <div className="p-6 bg-white rounded-xl brutal-shadow">
        <h3 className="text-xl font-bold mb-4">Análise de Performance</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">Coeficiente de Determinação (R²)</h4>
            <p className="text-gray-600">
              O modelo apresenta R² de {metrics.r2.validation.toFixed(4)} na validação, 
              indicando que {(metrics.r2.validation * 100).toFixed(2)}% da variabilidade 
              dos dados é explicada pelo modelo.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Erro Quadrático Médio (RMSE)</h4>
            <p className="text-gray-600">
              O RMSE de {metrics.rmse.validation.toFixed(4)} na validação indica o erro médio
              das predições em unidades da variável alvo.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Erro Máximo</h4>
            <p className="text-gray-600">
              O erro máximo de {metrics.errMax.validation.toFixed(4)} na validação representa
              o pior caso de predição do modelo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};