"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            ModNestMC
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Inicio
            </Link>
            <Link href="#nosotros" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Nosotros
            </Link>
            <Link href="#servidores" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Servidores
            </Link>
            <Link href="#contacto" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="#inicio" className="text-gray-300 hover:text-emerald-400 transition-colors">
                Inicio
              </Link>
              <Link href="#nosotros" className="text-gray-300 hover:text-emerald-400 transition-colors">
                Nosotros
              </Link>
              <Link href="#servidores" className="text-gray-300 hover:text-emerald-400 transition-colors">
                Servidores
              </Link>
              <Link href="#contacto" className="text-gray-300 hover:text-emerald-400 transition-colors">
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
