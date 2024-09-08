'use client'

import Link from "next/link";
import Title from "./Title";
import CardProject from "./CardProject";

export default function Projects() {
    return (
        <section className="flex flex-col items-center w-full bg-zinc-900 gap-5">
            <Title title={'Projetos'} />
            <div className="container grid grid-cols-2 gap-4">
                <CardProject />
                <CardProject />
            </div>
        </section>
    );
}