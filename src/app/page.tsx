import Navigation from "./navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-lg p-8 space-y-8">
          <div>
            <h2 className="text-5xl font-black mb-4">Bem-vindo ao Geometrica</h2>
            <p className="text-xl text-gray-600">
              Um trabalho do Projeto Integrador IV que contempla a análise comparativa de modelos de machine learning. 
            </p>
          </div>

          <div className="space-y-6">
            {/* Dataset */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Sobre o Dataset</h3>
              <p className="text-gray-600">
                Para a análise foi escolhido um dataset de uma planta enérgica de ciclo combinado. O conjunto de dados contém 9.568 pontos de dados coletados de uma Usina de Ciclo 
                Combinado ao longo de 6 anos (2006-2011), quando a usina foi configurada para 
                trabalhar com carga total. Os dados foram obtidos do UCI Machine Learning Repository.
              </p>
            </div>

            {/* Características do Dataset */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Características dos Dados</h3>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
                <li>Temperatura (T): variando entre 1.81°C e 37.11°C</li>
                <li>Pressão Ambiente (AP): entre 992.89-1033.30 milibar</li>
                <li>Umidade Relativa (RH): entre 25.56% e 100.16%</li>
                <li>Potência Elétrica (PE): entre 420.26-495.76 MW (variável alvo)</li>
              </ul>
            </div>

            {/* Análise de Sensibilidade */}
<div>
  <h3 className="text-2xl font-bold mb-4">Análise de Sensibilidade</h3>
  
  <div className="space-y-6">
    <p className="text-gray-600">
      Na análise do nosso dataset, identificamos a relação entre as variáveis independentes 
      (inputs do modelo) e a variável dependente (output - Potência Elétrica) através do 
      coeficiente de correlação de Pearson.
    </p>

    {/* Explicação das Variáveis */}
    <div className="p-6 bg-gray-50 rounded-xl brutal-shadow">
      <h4 className="text-xl font-semibold mb-3">Tipos de Variáveis</h4>
      <div className="space-y-3">
        <p className="text-gray-600">
          <span className="font-medium">Variáveis Independentes:</span> São os inputs do modelo 
          que influenciam o resultado. Em nosso caso, são as condições ambientais medidas.
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Variável Dependente:</span> É o output que queremos 
          prever - a Potência Elétrica gerada pela usina.
        </p>
      </div>
    </div>

    {/* Tabela de Correlações */}
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b">
              Variável Independente
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 border-b">
              Coeficiente Pearson (r)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              Temperatura Ambiente (TA)
            </td>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              -0.95
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              Vácuo de Exaustão (VE)
            </td>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              -0.87
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              Pressão Ambiente (PA)
            </td>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              0.52
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              Umidade Relativa (UR)
            </td>
            <td className="px-6 py-4 text-sm text-gray-600 border-b">
              0.39
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Interpretação dos Resultados */}
    <div className="p-6 bg-gray-50 rounded-xl brutal-shadow">
      <h4 className="text-xl font-semibold mb-3">Interpretação</h4>
      <ul className="space-y-3 text-gray-600">
        <li>
          <span className="font-medium">Temperatura Ambiente (-0.95):</span> Apresenta forte 
          correlação negativa, indicando que aumentos na temperatura tendem a reduzir 
          significativamente a potência elétrica gerada.
        </li>
        <li>
          <span className="font-medium">Vácuo de Exaustão (-0.87):</span> Também possui 
          correlação negativa forte, sugerindo impacto considerável na redução da potência.
        </li>
        <li>
          <span className="font-medium">Pressão Ambiente (0.52):</span> Correlação positiva 
          moderada, indicando que aumentos na pressão tendem a aumentar a potência gerada.
        </li>
        <li>
          <span className="font-medium">Umidade Relativa (0.39):</span> Correlação positiva 
          fraca, sugerindo menor influência na potência gerada.
        </li>
      </ul>
    </div>
  </div>
</div>

            {/* Metodologia */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Metodologia</h3>
              <p className="text-gray-600">
                Utilizamos três diferentes abordagens de machine learning:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
                <li>Regressão Linear - Modelo estatístico básico e interpretável</li>
                <li>Support Vector Machine - Algoritmo robusto para regressão não-linear</li>
                <li>Random Forest - Ensemble learning para capturar relações complexas</li>
              </ul>
            </div>
 
            <div>
              <h3 className="text-2xl font-bold mb-2">Orientador</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Luis Pedro Dragão Jeronimo'].map((membro) => (
                  <div key={membro} className="p-4 bg-gray-50 rounded-lg brutal-shadow">
                    <p className="font-medium text-gray-900">{membro}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Equipe</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Gabriel Tomazini Ferreira', 'Carmen Silvia Mello Wiezel', 'Felipe Machini Malachias Marques', 'Odecio Luiz de Oliveira Souza', 'Tamiris Baptista Camargo'].map((membro) => (
                  <div key={membro} className="p-4 bg-gray-50 rounded-lg brutal-shadow">
                    <p className="font-medium text-gray-900">{membro}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Polos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Ribeirão Preto - SP', 'Altinopolis - SP', 'São Simão - SP', 'Santa Cruz da Esperança - SP'].map((membro) => (
                  <div key={membro} className="p-4 bg-gray-50 rounded-lg brutal-shadow">
                    <p className="font-medium text-gray-900">{membro}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Créditos do Dataset */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Créditos do Dataset</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Dataset disponibilizado por Pınar Tüfekci e Heysem Kaya no UCI Machine Learning Repository 
                  sob licença Creative Commons Attribution 4.0 International (CC BY 4.0).
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}