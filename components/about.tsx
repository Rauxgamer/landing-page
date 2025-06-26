export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Sobre Nosotros</h2>
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              ModNestMC permite a jugadores de cualquier nivel crear y gestionar servidores personalizados de Minecraft
              en minutos, con o sin mods. Nuestra misión es simplificar tu experiencia para que disfrutes más tiempo
              jugando y menos tiempo configurando.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
