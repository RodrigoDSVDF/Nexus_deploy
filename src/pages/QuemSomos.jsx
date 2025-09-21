import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function QuemSomos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="border-b border-blue-500/20 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
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

      {/* Seção Principal */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mais que Ferramentas. <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Uma Jornada.</span>
            </h1>
          </div>
          
          <div className="mt-12 text-lg text-gray-300 space-y-6 text-left leading-relaxed">
            <p>
              Na internet de hoje, a inteligência artificial virou commodity. Todo mundo anuncia “a ferramenta revolucionária”, o “prompt que vai mudar tudo” ou o “curso definitivo”. São offers, downloads e listas intermináveis de recursos… mas cadê a conexão? Cadê a transformação real?
            </p>
            <p>
              Percebi que nesse mar de informações, o que mais falta é <strong>sentido</strong>.
            </p>
            <p>
              As pessoas são bombardeadas com opções, mas não são guiadas a pensar. São ensinadas a usar ferramentas, mas não a desenvolver uma mentalidade. São incentivadas a produzir, mas não a refletir.
            </p>
            <p className="font-bold text-white text-xl">
              Foi dessa lacuna que nasceu o Nexus.
            </p>
            <p>
              Não somos mais um lugar que só te vende algo. Somos um espaço de <strong>construção</strong>.
            </p>
            <p>
              Aqui, a inteligência artificial não é um fim — é uma ponte. Uma extensão da sua mente. Uma ferramenta para ampliar sua criatividade, organizar suas ideias e resolver problemas complexos, <strong>sem abrir mão do que te torna humano: seu pensamento crítico, sua intuição e sua capacidade de se comunicar com profundidade</strong>.
            </p>

            <div className="py-8">
              <h2 className="text-2xl font-bold text-white text-center">Nosso propósito é claro:</h2>
              <p className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                Fazer o binômio entre I.A. e Transformação Pessoal.
              </p>
            </div>

            <p>
              Queremos conduzir você a um patamar elevado de uso consciente da tecnologia — onde você não apenas executa, mas <strong>compreende</strong>; não apenas repete, mas <strong>cria</strong>; não apenas consome, mas <strong>se desenvolve</strong>.
            </p>
            <p>
              E no centro disso tudo está o que acreditamos ser o grande catalisador da mudança real: <strong>A comunicação</strong>. Não a comunicação superficial das redes sociais. Mas a comunicação intencional. A que formula perguntas melhores. A que estrutura pensamentos. A que conecta pessoas e ideias.
            </p>
            <p>
              É por isso que no Nexus você não encontra apenas listas de ferramentas ou tutoriais rasos. Você encontra um <strong>guia para alto desempenho cognitivo e emocional</strong>, com base em pilares como:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Atenção e foco na era digital</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Criatividade e autenticidade</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Engenharia de prompts com propósito</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Educação transformadora</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Estratégias para o novo mercado de trabalho</span>
                </div>
            </div>

            <p>
              Nosso compromisso é com seu crescimento real. Queremos que você use a I.A. não para ser substituído, mas para se tornar <strong>mais humano</strong>.
            </p>
            <p className="text-xl font-semibold text-white">
              Se você está cansado de conteúdos vazios e pronto para uma jornada de evolução com significado… Você encontrou seu lugar.
            </p>
            <p className="text-center text-2xl font-bold text-cyan-400 pt-8">
              Nexus: Porque tecnologia, sem humanidade, é apenas ruído.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuemSomos
