'use client'

import Title from "./Title";

export default function Objectives() {
    return (
        <section className="flex flex-col items-center w-full bg-zinc-900 gap-5">
            <Title title={'Objetivos'} />
            <div className="container lg:px-20">
                <p>Após anos de experiência desenvolvendo projetos na área de
                    tecnologia com HTML5, CSS, ReactJS, NextJS, TypeScript e
                    Tailwind, estou em plena transição de carreira para me tornar
                    um Analista de Dados. Essa mudança reflete minha paixão por
                    transformar dados em insights valiosos que impulsionam decisões
                    estratégicas.</p>
                <br />
                <p>Atualmente, estou focado em construir uma base sólida em análise
                    de dados, utilizando ferramentas como Python, SQL, Google
                    Planilhas, Excel e Power BI. Meu objetivo é evoluir
                    constantemente, com a intenção de, no futuro, me especializar
                    como Cientista de Dados.
                </p>
                <br />
                <p>Estou aberto a oportunidades que me permitam aplicar e expandir
                    minhas competências em análise de dados, contribuindo para
                    soluções que fazem a diferença nas organizações. Meu foco é
                    continuar crescendo nesse campo e atingir meu objetivo final
                    de me tornar um Cientista de Dados.
                </p>
            </div>
        </section>
    );
}
