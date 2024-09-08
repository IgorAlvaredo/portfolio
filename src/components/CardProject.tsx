'use client'

import Link from "next/link";
import Title from "./Title";

export default function CardProject() {
    return (
        <div className="flex flex-col col-span-1 p-4 items-center justify-center rounded-lg border-2 border-zinc-800 gap-2">
            <h1 className=" font-bold text-xl text-blue-500">Nome do projeto</h1>
            <div className="bg-white h-60 w-full"></div>
            <p className=" px-8">Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição</p>
            <Link target="_blank" className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg hover:scale-110" href={"https://www.google.com"}>Saiba mais</Link>
        </div>
    );
}