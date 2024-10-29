'use client'

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedinButton() {
    return (
        <Link target="_blank" className="flex flex-row gap-2 bg-linkedin-500
            hover:bg-linkedin-600 py-2 px-6 rounded-lg"
            href={"https://www.google.com"}><FaLinkedin size={20} /> Linkedin</Link>
    );
}