'use client'

import Link from "next/link";
import Title from "./Title";

interface propsCardProject{
    title: string,
    description: string,
    url: string,
    image: string,
}

export default function CardProject(props: propsCardProject) {
    return (
        <div className="flex flex-col col-span-1 p-4 items-center justify-center rounded-lg border-2 border-zinc-800 gap-2">
            <h1 className=" font-bold text-xl text-blue-500">{props.title}</h1>
            <div className="bg-white h-60 w-full"></div>
            <p className=" px-8">{props.description}</p>
            <Link target="_blank" className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg hover:scale-110" href={`${props.url}`}>Saiba mais</Link>
        </div>
    );
}