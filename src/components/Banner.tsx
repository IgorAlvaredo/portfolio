/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative w-full h-[756px]">
      {/* Background com overlay */}
      <div className="absolute inset-0 bg-bannerImg bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Container do conteúdo */}
      <div className="relative h-full container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-12 gap-8">
          {/* Coluna da esquerda - Textos */}
          <div className="flex-1 text-white space-y-6 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold animate-fade-in">
              Análise de Dados & Visualização
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300">
              Transformando dados complexos em insights acionáveis
            </p>
            
            <div className="flex flex-wrap gap-4 text-gray-200">
              <span className="px-4 py-2 bg-zinc-800/50 rounded-full">
              <Image src="/python.png" alt="Python" width={144} height={144} />
              </span>
              <span className="px-4 py-2 bg-zinc-800/50 rounded-full">
              <Image src="/power-bi.png" alt="Power BI" width={144} height={144} />
              </span>
              <span className="px-4 py-2 bg-zinc-800/50 rounded-full">
              <Image src="/excel.png" alt="Excel" width={144} height={144} />
              </span>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Ver Projetos
              </button>
              <button className="px-6 py-3 border border-white hover:bg-white/10 rounded-lg transition-colors">
                Contato
              </button>
            </div>
          </div>

          {/* Coluna da direita - Opcional: Adicionar uma imagem ou gráfico */}
          <div className="flex-1 hidden lg:flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-white/10 rounded-lg backdrop-blur-sm p-4">
              {/* Aqui você pode adicionar um gráfico, dashboard ou imagem ilustrativa */}
              <div className="w-full h-full rounded bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;