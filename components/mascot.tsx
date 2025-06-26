import { Card, CardContent } from "@/components/ui/card"

export default function Mascot() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Loro de Minecraft - Mascota de ModNestMC"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Mascota</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Conoce a nuestra mascota, el loro más amigable de Minecraft, que te guiará en tu aventura. Con sus
                    colores vibrantes y personalidad única, representa el espíritu de comunidad y diversión que define a
                    ModNestMC.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
