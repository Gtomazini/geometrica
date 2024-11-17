// src/types/metrics.ts
export interface ModelMetrics {
    r2: {
      training: number;
      validation: number;
    };
    rmse: {
      training: number;
      validation: number;
    };
    errMax: {
      training: number;
      validation: number;
    };
  }
  
  export const modelResults: Record<string, ModelMetrics> = {
    regressaoLinear: {
      r2: { training: 0.9277, validation: 0.9325 },
      rmse: { training: 4.5854, validation: 4.4422 },
      errMax: { training: 43.4339, validation: 31.0151 }
    },
    svm: {
      r2: { training: 0.9451, validation: 0.9480 },
      rmse: { training: 3.8969, validation: 3.9935 },
      errMax: { training: 46.3594, validation: 30.8957 }
    },
    randomForest: {
      r2: { training: 0.9921, validation: 0.9616 },
      rmse: { training: 1.5117, validation: 3.3578 },
      errMax: { training: 30.5270, validation: 30.6990 }
    }
  };