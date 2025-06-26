import { Card, CardContent } from "@/components/ui/card"
import { Hammer, Settings, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Hammer className="w-12 h-12 text-emerald-400" />,
      title: "Crea Fácil",
      description:
        "Configura tu servidor de Minecraft en minutos con nuestra interfaz intuitiva y herramientas automatizadas.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Settings className="w-12 h-12 text-amber-400" />,
      title: "Modifica y Personaliza",
      description:
        "Añade mods populares, personaliza configuraciones y crea la experiencia perfecta para tu comunidad.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Únete a una Comunidad",
      description: "Conecta con otros jugadores, comparte servidores y descubre nuevas aventuras en multijugador.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="servidores" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Características Destacadas</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre todo lo que ModNestMC puede hacer por tu experiencia de Minecraft
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-md border-white/10 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
