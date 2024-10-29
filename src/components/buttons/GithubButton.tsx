'use client'

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function GithubButton() {
    return (
        <Link target="_blank" className="flex flex-row gap-2 bg-zinc-800
            hover:bg-zinc-950 py-2 px-6 rounded-lg"
            href={"https://www.google.com"}><FaGithub size={20} /> Github</Link>
    );
}