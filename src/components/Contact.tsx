'use client'

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="flex flex-row gap-4">
            <Link target="_blank" className="flex flex-row gap-2 bg-linkedin-500
            hover:bg-linkedin-600 py-2 px-6 rounded-lg" 
            href={"https://www.google.com"}><FaLinkedin size={20}/> Linkedin</Link>

            <Link target="_blank" className="flex flex-row gap-2 bg-zinc-800
            hover:bg-zinc-950 py-2 px-6 rounded-lg" 
            href={"https://www.google.com"}><FaGithub size={20}/> Github</Link>

            <Link target="_blank" className="flex flex-row gap-2 bg-green-500
            hover:bg-green-600 py-2 px-6 rounded-lg" 
            href={"https://www.google.com"}><BsWhatsapp size={20}/> WhatsApp</Link>
        </div>
    );
}