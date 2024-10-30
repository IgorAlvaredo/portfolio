import Banner from "@/components/BannerInicial";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-zinc-900 ">
      {/* <Banner/> */}
      <section className="flex flex-col w-full bg-bannerImg bg-repeat bg-cover bg-bottom h-screen bg-opacity-75 bg-zinc-900">
        <div className="flex flex-col w-full h-screen bg-opacity-50 bg-zinc-950">
          <h1 className="text-5xl font-bold text-white text-center pt-20">O que você precisa?</h1>
          <div className="flex flex-row w-full h-full gap-5 px-5 text-white py-5 ">
            <div className="flex justify-center items-center rounded-lg w-full h-full hover:scale-105 hover:cursor-pointer transition-all">
              <h1 className="text-5xl font-bold text-zinc-200 hover:text-white text-center pt-20">Analista de Dados</h1>
            </div>
            <div className="flex justify-center items-center rounded-lg w-full h-full hover:scale-105 hover:cursor-pointer transition-all">
              <h1 className="text-5xl font-bold text-zinc-200 hover:text-white text-center pt-20">Desenvolvedor Web</h1>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
