import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Globe, Zap, Shield } from "lucide-react"

export default function ServerInfo() {
  const serverFeatures = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Mundos Épicos",
      description:
        "Explora biomas únicos, desde junglas místicas hasta montañas nevadas con estructuras personalizadas.",
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
      title: "Modalidades Variadas",
      description: "Survival, Creative, PvP, Mini-juegos y eventos especiales que mantienen la diversión constante.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Rendimiento Optimizado",
      description: "Servidores de alta velocidad con 99.9% de uptime y lag mínimo para la mejor experiencia.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Seguridad Garantizada",
      description: "Protección anti-griefing, backups automáticos y moderación activa las 24 horas.",
    },
  ]

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestro Servidor</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ModNestMC no es solo una plataforma, también ofrecemos nuestro propio servidor premium con características
            únicas y una experiencia de juego incomparable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serverFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-md border-white/10 hover:border-emerald-400/30 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Server Stats */}
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <p className="text-gray-300">Disponibilidad</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <p className="text-gray-300">Mods Disponibles</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">1000+</div>
              <p className="text-gray-300">Jugadores Activos</p>
            </div>
          </div>
        </div>

        {/* Server Connection Info */}
        <div className="mt-12 text-center">
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl border border-emerald-500/30 p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Conecta Ahora</h3>
            <div className="bg-black/50 rounded-lg p-4 mb-4">
              <p className="text-emerald-400 font-mono text-lg">play.modnestmc.com</p>
            </div>
            <p className="text-gray-300 text-sm">Versión: 1.20.x | Java & Bedrock</p>
          </div>
        </div>
      </div>
    </section>
  )
}
