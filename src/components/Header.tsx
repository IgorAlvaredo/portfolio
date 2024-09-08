'use client'
export default function Header() {
  return (
    <header className="flex flex-row bg-black h-16 fixed z-10 w-full">
        <nav className="flex items-center justify-between text-white w-full px-10">
            <label className="text-xl font-bold flex items-center p-2 h-full cursor-pointer hover:text-green-500 hover:scale-110">IGOR ALVAREDO</label>
            <ul className="flex flex-row h-full items-center gap-2">
                <li className="flex text-lg items-center p-2 h-full cursor-pointer hover:text-green-500 hover:scale-110">Contato</li>
                <li className="flex text-lg items-center p-2 h-full cursor-pointer hover:text-green-500 hover:scale-110">Objetivos</li>
                <li className="flex text-lg items-center p-2 h-full cursor-pointer hover:text-green-500 hover:scale-110">Projetos</li>
            </ul>
        </nav>
    </header>
  );
}
