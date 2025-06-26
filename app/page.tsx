import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Features from "@/components/features"
import Mascot from "@/components/mascot"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Features />
      <Mascot />
      <Footer />
    </main>
  )
}
