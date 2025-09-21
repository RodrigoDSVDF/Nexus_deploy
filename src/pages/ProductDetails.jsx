import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, BookOpen, CheckCircle, Clock, Users, Star, Target, Brain, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProductDetails() {
  const [activeModule, setActiveModule] = useState(0)

  // Módulos reestruturados com base no conteúdo do seu E-book
  const modules = [
    {
      title: "Pilar 1: Dominando a Atenção na Era do Caos",
      duration: "2 horas",
      lessons: 8,
      description: "Aprenda a combater a 'pobreza de atenção' e a 'amnésia digital'. Este pilar é sua fundação para transformar o excesso de informação em foco e clareza.",
      topics: [
        "A Crise da Atenção no Século XXI: Causas e Consequências",
        "O 'Efeito Google': Como a tecnologia molda nossa memória",
        "Infobesidade: Estratégias para lidar com a sobrecarga cognitiva",
        "O Mito da Multitarefa: Os custos reais da alternância de tarefas",
        "Deep Work: Como cultivar a concentração profunda e ininterrupta",
        "Saindo da Caverna Digital: Superando a desinformação",
        "Mindfulness e Higiene Mental para o mundo digital",
        "Construindo um ambiente que protege seu foco"
      ]
    },
    {
      title: "Pilar 2: A IA como Ferramenta de Transformação",
      duration: "3 horas",
      lessons: 12,
      description: "Desmistifique a Inteligência Artificial e transforme-a em sua maior aliada para criatividade e produtividade, sem abrir mão do pensamento crítico.",
      topics: [
        "A Origem da IA: Dos anos 40 aos LLMs de hoje",
        "Ampliando a Mente, Não Substituindo-a: O uso consciente da IA",
        "Engenharia de Prompt: A arte de fazer as perguntas certas",
        "Personalizando o ChatGPT: Crie seu assistente pessoal",
        "Dominando Ferramentas Essenciais: DeepSeek, Perplexity e mais",
        "Automação Inteligente para tarefas repetitivas",
        "IA para Análise de Dados e Tomada de Decisão",
        "Criatividade e Autenticidade na Era da IA Generativa",
        "Filosofia Prática: Sartre e a liberdade em um mundo de máquinas",
        "Krishnamurti: Cultivando a inteligência humana não mecânica",
        "A Lei dos Retornos Acelerados de Kurzweil",
        "Projeto Prático: Integrando a IA no seu fluxo de trabalho"
      ]
    },
    {
      title: "Pilar 3: Produtividade e Organização de Alta Performance",
      duration: "2.5 horas",
      lessons: 10,
      description: "Estruture sua vida e seus projetos com sistemas comprovados, adaptados para a complexidade da era informacional e potencializados pela tecnologia.",
      topics: [
        "Arquitetura de Informação Pessoal: O fim da bagunça digital",
        "Construindo seu 'Segundo Cérebro' com ferramentas inteligentes",
        "Método GTD aplicado à Era da IA",
        "Time Blocking e Gestão de Energia (não apenas de tempo)",
        "Templates e Processos para máxima eficiência",
        "Como a IA pode organizar seus projetos e conhecimento",
        "Criando Rotinas de Alta Performance que realmente funcionam",
        "Sistema de Revisão Semanal para melhoria contínua",
        "Eliminando a paralisia por análise",
        "Organização de projetos complexos com clareza"
      ]
    },
    {
      title: "Pilar 4: Estratégia, Inovação e Vantagem Competitiva",
      duration: "2.5 horas",
      lessons: 9,
      description: "Desenvolva os frameworks mentais para se destacar. Aprenda a transformar informação em estratégia e a construir seu diferencial no mercado.",
      topics: [
        "O Paradigma Informacional: A nova fonte de poder e produtividade",
        "Como a Mente Humana se torna uma força direta de produção",
        "Frameworks para Tomada de Decisão em cenários complexos",
        "Análise de Tendências e Padrões com auxílio da IA",
        "Construindo sua Vantagem Competitiva Sustentável",
        "Posicionamento Profissional na Economia da Atenção",
        "Networking Estratégico na Sociedade em Rede",
        "Inovação Contínua: Como se manter sempre à frente",
        "Do Conhecimento à Ação: Um plano prático"
      ]
    },
    {
      title: "Pilar 5: O Futuro do Trabalho e da Educação",
      duration: "2 horas",
      lessons: 6,
      description: "Prepare-se para as transformações que já estão acontecendo. Entenda o novo mercado e como a IA está revolucionando a forma como aprendemos e evoluímos.",
      topics: [
        "O Impacto da IA no Mercado de Trabalho: Ameaças e Oportunidades",
        "Porque o conhecimento em IA aumenta suas chances de promoção",
        "Desenvolvendo as Competências do Futuro (Criatividade, Crítica, Adaptação)",
        "A IA como Pilar para uma Aprendizagem Personalizada",
        "Agentes de IA: A revolução silenciosa que já está ao nosso alcance",
        "Construindo seu Plano de Desenvolvimento para o Futuro"
      ]
    }
  ]

  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Amplie Sua Mente",
      description: "Use a IA para expandir sua criatividade e resolver problemas, sem perder sua autonomia e pensamento crítico."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Produtividade Consciente",
      description: "Liberte-se de tarefas repetitivas para focar no que realmente importa: criar, inovar e evoluir."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Clareza na Era do Caos",
      description: "Supere a 'infoxicação' e a 'pobreza de atenção' com estratégias para um futuro focado e com propósito."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Vantagem Profissional",
      description: "Posicione-se como um líder na nova era informacional, dominando as competências mais valorizadas pelo mercado."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="border-b border-blue-500/20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-medium">Voltar para Home</span>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                NEXUS
              </h1>
              <p className="text-gray-400 text-sm">Manual de Alta Performance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
            <BookOpen className="w-4 h-4 mr-2" />
            Uma Jornada de Capacitação
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Não apenas use IA. <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Torne-se mais humano</span> com ela.
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Este manual é um guia para transformar a Inteligência Artificial em uma ferramenta de capacitação, ajudando você a prosperar na complexidade da Era da Informação.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-2xl border border-blue-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Os <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">5 Pilares da Alta Performance</span> na Era Digital
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma jornada estruturada que vai da filosofia à prática, mostrando como usar a tecnologia a favor do seu desenvolvimento.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Module List */}
            <div className="lg:col-span-1 space-y-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  onClick={() => setActiveModule(index)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeModule === index
                      ? 'bg-gradient-to-r from-blue-900/50 to-emerald-900/50 border-blue-400/50'
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/30'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{module.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {module.lessons} lições
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Module Details */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {modules[activeModule].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {modules[activeModule].description}
                </p>
                
                <div className="flex items-center space-x-6 mb-8 text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{modules[activeModule].duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>{modules[activeModule].lessons} lições</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>Acesso vitalício</span>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-4">O que você vai dominar neste pilar:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {modules[activeModule].topics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para ser o <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">protagonista do futuro</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Adquira o conhecimento necessário para transformar sua performance e se destacar em um mundo em constante mudança.
          </p>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 p-8 rounded-3xl border border-blue-500/20 mb-8">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-white">R$ 97</span>
              <span className="text-gray-400 ml-2">pagamento único</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-gray-300 mb-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>5 Pilares de Conteúdo Profundo</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Estratégias Práticas e Aplicáveis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Acesso vitalício ao Manual</span>
              </div>
            </div>
          </div>

          <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 border-2 border-orange-400/50 animate-pulse">
              <BookOpen className="w-6 h-6 mr-3" />
              Quero o Manual NEXUS Agora
            </Button>
          </a>
          
          <p className="text-gray-400 text-sm mt-4">
            🛡️ Garantia de 7 dias - Satisfação garantida ou seu dinheiro de volta
          </p>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
