import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, LayoutList, Menu, X } from 'lucide-react'
import ProductDetails from './pages/ProductDetails.jsx'
import FAQ from './pages/FAQ.jsx'
import './App.css'

// Importando as imagens existentes
import brainNetworkImg from './assets/1000393266.jpg'
import neuronImg from './assets/1000393265.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import nexusLogoImg from './assets/Screenshot_20250918_222018_Gallery.jpg'
import brainAIImg from './assets/1000393262.jpg'
import platosCaveImg from './assets/1000396070.jpg'
import digitalToolsImg from './assets/1000395915.jpg'
import dataAnalysisImg from './assets/1000395918.jpg'
import ebookImg from './assets/1000393237.png'
import newProductImg from './assets/1000396691.jpg'
import testimonial1Img from './assets/1000396866.jpg'
import testimonial2Img from './assets/1000396868.jpg'
import testimonial3Img from './assets/1000396870.jpg'
import servicosIAImg from './assets/servicos-ia.jpg';
import produtividadeImg from './assets/produtividade.jpg';
import redeNeuralAbstrataImg from './assets/rede-neural-abstrata.jpg';
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';
import orgImg from './assets/org.jpg';
import garantiaImg from './assets/7-dias-garantido1.jpg';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={nexusLogoImg} alt="NEXUS Logo" className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/detalhes" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Detalhes do Manual
              </Link>
              <Link to="/faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
                FAQ
              </Link>
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 font-semibold">
                  Comprar Agora
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-500/20">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/detalhes" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Detalhes do Manual
                </Link>
                <Link 
                  to="/faq" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 font-semibold w-full">
                    Comprar Agora
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img src={brainNetworkImg} alt="Neural Network Background" className="w-full h-full object-cover" />
        </div>

        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12 mt-20">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Nova Era Informacional
            </div>
            
            {/* Logo NEXUS */}
            <div className="mb-8">
              <img src={nexusLogoImg} alt="NEXUS Logo" className="w-56 h-auto mx-auto mb-6" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg break-words">
              Produtividade em Alto Nível
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
               Guia de Performance 
            </h2>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-lg">
              <span className="text-white">com </span>
              <span className="text-blue-400 drop-shadow-[0_0_8px_#3b82f6]">
                Inteligência Artificial 
              </span>
            </h3>

            <div className="mt-8 text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light flex flex-col items-center text-center space-y-2">
              <span>Domine a era da informação.</span>
              <span>Transforme dados em inteligência.</span>
              <span>Faça da inovação seu diferencial.</span>
              <span className="font-semibold text-cyan-400 mt-2">Seja o protagonista do futuro.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 px-6 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-300/50">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Quero meu Manual de Alta Performance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              
              <Link to="/detalhes">
                <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-4 text-lg font-semibold rounded-xl">
                  <LayoutList className="w-5 h-5 mr-2" />
                  Ver Conteúdo Completo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade Conceitual - Caverna de Platão */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0">
          <img src={platosCaveImg} alt="Caverna de Platão - Era Digital" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-blue-900/85"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Por que o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Nexus</span> é diferente?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Muitas pessoas acham que sabem usar inteligência artificial, mas não atingem alto rendimento porque não conseguem extrair dela o seu verdadeiro potencial
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Era Informacional</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    No atual modelo econômico informacional, a fonte real da produtividade está na tecnologia capaz de transformar dados em conhecimento, informação em estratégia e comunicação em resultados.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Saia da Caverna Digital</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Como na alegoria de Platão, muitos vivem presos às sombras da desinformação digital. O NEXUS é sua saída para a luz do conhecimento de valor real.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-blue-500/30 backdrop-blur-sm shadow-2xl">
                <p className="text-lg text-gray-200 leading-relaxed">
                  O Nexus foi criado exatamente para isso: ser um <strong className="text-emerald-400">guia prático</strong> que alia alta performance pessoal e profissional com o poder da Inteligência Artificial, ajudando você a se posicionar no <strong className="text-cyan-400">centro dessa revolução</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Ferramentas Práticas */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Ferramentas Práticas</span> que Transformam
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra as tecnologias e metodologias que estão revolucionando a forma como trabalhamos e pensamos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src={digitalToolsImg} alt="Ferramentas Digitais" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Mapa</h3>
                <p className="text-gray-300">Guia que conecta você ao modelo econômico informacional</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-900/30 to-slate-800/30 p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src={dataAnalysisImg} alt="Análise de Dados" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Toolbox 4.0</h3>
                <p className="text-gray-300">Ferramentas inteligentes para orientação de sua jornada no futuro digital</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-blue-900/30 to-emerald-900/30 p-8 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src={brainAIImg} alt="IA Cognitiva" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Hub de Ação</h3>
                <p className="text-gray-300">Um laboratório onde ideias viram decisões práticas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-32 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              O que você vai conquistar com o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Manual Nexus</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img src={neuralNetworkImg} alt="Neural Network" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Produtividade Exponencial</h3>
                <p className="text-gray-300 text-lg">Elimine a sobrecarga digital e a sensação de estar sempre atrasado. Descubra como a IA pode ser sua assistente pessoal 24 horas por dia, trazendo foco, organização e resultados tangíveis todos os dias</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-900/30 to-slate-800/30 p-10 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img src={xadrezStrategiaImg} alt="Estratégia e Clareza" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Clareza Estratégica</h3>
                <p className="text-gray-300 text-lg">Acabe com a paralisia por análise e a dúvida. Tenha um framework mental e tecnológico para cortar o ruído, priorizar o essencial e enxergar o caminho mais claro e rápido para seus objetivos</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-blue-900/30 to-emerald-900/30 p-10 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img src={brainAIImg} alt="Brain AI" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Mentalidade Informacional</h3>
                <p className="text-gray-300 text-lg">Desenvolva a skill mais valiosa do século XXI: a capacidade de aprender, desaprender e reaprender rapidamente. Esteja sempre à frente, adaptando-se às novas tecnologias e tornando-se insubstituível</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para elevar sua performance ao <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">próximo nível</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Junte-se a milhares de profissionais que já transformaram sua performance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-300/50">
                <BookOpen className="w-6 h-6 mr-3" />
                Quero o Manual NEXUS Agora
              </Button>
            </a>
            
            <Link to="/faq">
              <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg font-semibold rounded-xl">
                Tenho Dúvidas
              </Button>
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            🛡️ Garantia de 7 dias - Satisfação garantida ou seu dinheiro de volta
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-900/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={nexusLogoImg} alt="NEXUS Logo" className="w-10 h-10" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  NEXUS
                </span>
              </div>
              <p className="text-gray-400">
                Manual de Alta Performance com Inteligência Artificial
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
              <div className="space-y-2">
                <Link to="/detalhes" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Detalhes do Manual
                </Link>
                <Link to="/faq" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Perguntas Frequentes
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <p className="text-gray-400 text-sm">
                Dúvidas? Entre em contato conosco através do nosso suporte.
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 NEXUS. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detalhes" element={<ProductDetails />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  )
}

export default App

