'use client'

import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppButton() {
    return (
        <Link target="_blank" className="flex flex-row gap-2 bg-green-500
            hover:bg-green-600 py-2 px-6 rounded-lg"
            href={"https://www.google.com"}><BsWhatsapp size={20} /> WhatsApp</Link>
    );
}