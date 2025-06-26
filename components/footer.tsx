import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-black/60 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">ModNestMC</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              La plataforma más fácil para crear y gestionar servidores de Minecraft. Únete a nuestra comunidad y
              comienza tu aventura hoy.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Discord className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#servidores" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Servidores
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Guías
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} ModNestMC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
