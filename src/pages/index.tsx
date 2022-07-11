import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Nav />
        <HeroSection>
          <div className="
          flex flex-col px-4 pt-8 lg:pr-[20%] font-inter
          transform transition-all ease-out max-w-[1360px] mx-auto
          "
          >
            <h2 className="text-whiteColor uppercase text-md xl:text-xl mb-4">Psicóloga Clínica Mariane Barbosa</h2>
            <h1 className="text-whiteColor text-4xl md:text-6xl font-bold mt-3 mb-8"><span className="text-secondaryColor-700 block mb-4">Psicoterapia online</span> Atendimento individual</h1>
            <p className="text-whiteColor mb-12">Um trabalho de aprofundamento pessoal, que possibilita à pessoa a descoberta, reavaliação e trabalho sobre suas crenças e perspectivas da vida, fazendo com que ela se torne mais consciente das suas possibilidades e potencialidades.</p>
            <Link href='/'>
              <a className={`
              text-whiteColor bg-secondaryColor-700 py-2 px-10 text-md rounded-full max-w-max text-center transition-all duration-300 hover:scale-105
              `}>Vamos Conversar?</a>
            </Link>
          </div>          
        </HeroSection>

        <section id="" className={`flex items-center bg-flower-light bg-no-repeat bg-auto bg-right-top w-full`}>
          <div className={`bg-whiteColor bg-opacity-80 w-full`}>
            <div className="max-w-[1360px] mx-auto py-16 md:py-32 px-4">
              <div className={`lg:pr-[50%]`}>
                <h2 className="text-secondaryColor-700 uppercase text-sm font-bold mb-4">Qualidade de vida</h2>
                <h1 className="text-darkColor-900 text-5xl font-bold mt-3 mb-8">Por que fazer <span className="text-secondaryColor-700">terapia?</span></h1>
                <p className='text-darkColor-100'>Antes de tudo, psicoterapia não é sinônimo de doença. A psicoterapia serve para superar dificuldades que a vida nos apresenta e ajudar na prevenção de transtornos psicológicos que dificultam o convívio em sociedade.</p>
              </div>

              <div className={`mt-16 grid md:grid-cols-2 gap-6`}>

                <article className="bg-accentColor-700 bg-opacity-95 rounded-3xl py-9 px-7 flex gap-3">
                  <div className={``}> 
                    <Image src='/icons/autoestima.png' alt="autoestima" width={78} height={78}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="font-bold text-whiteColor">Autoestima</h3>
                    <p className="text-whiteColor text-sm">Com a terapia, é possível desenvolver ou aprimorar habilidades de enfrentamento, tendo em mente que sempre é possível ressignificar eventos que repercutem em nossa autoestima.</p>
                  </div>
                </article>

                <article className="bg-accentColor-700 bg-opacity-95 rounded-3xl py-9 px-7 flex gap-3">
                  <div className={``}> 
                    <Image src='/icons/autocontrole.png' alt="Autocontrole" width={78} height={78}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="font-bold text-whiteColor">Autocontrole</h3>
                    <p className="text-whiteColor text-sm">Um dos pilares da psicoterapia é orientar a pessoa para que ela possa adquirir o verdadeiro autocontrole. Conseguir direcionar plenamente o próprio comportamento, os pensamentos e as emoções.</p>
                  </div>
                </article>

                <article className="bg-accentColor-700 bg-opacity-95 rounded-3xl py-9 px-7 flex gap-3">
                  <div className={``}> 
                    <Image src='/icons/autoconfianca.png' alt="Autoconfiança" width={78} height={78}/>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="font-bold text-whiteColor">Autoconfiança</h3>
                    <p className="text-whiteColor text-sm">A autoconfiança é uma qualidade que pode ser desenvolvida e trabalhada em qualquer momento da vida. Quem possui autoconfiança acredita em si mesmo, mostra-se firme, fala com propriedade e conquista maior autonomia.</p>
                  </div>
                </article>

                <article className="bg-accentColor-700 bg-opacity-95 rounded-3xl py-9 px-7 flex gap-3">
                  <div className={``}> 
                    <Image src='/icons/amorproprio.png' alt="Amor Próprio" width={78} height={78}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="font-bold text-whiteColor">Amor Próprio</h3>
                    <p className="text-whiteColor text-sm">Amor próprio é a aceitação de que você se ama e se cuida o suficiente e o reconhecimento do seu valor pessoal para tornar isso uma prioridade em sua vida.</p>
                  </div>
                </article>

                <Link href='/#faq'>
                <a className="text-secondaryColor-700 font-bold text-xl">Está com dúvidas?</a></Link>
              </div>
            </div>          
          </div>

        </section>

        <section className="flex items-center bg-pattern-bals bg-repeat bg-contain bg-center bg-fixed w-full">
          <div className="bg-whiteColor bg-opacity-95 w-full">       
            <div className={`mx-auto max-w-[1360px] py-16 md:py-32 px-4 flex flex-col gap-8`}>
              <div className="lg:w-3/4 mx-auto flex flex-col gap-8">
                <h2 className="text-darkColor-900 text-5xl text-center font-bold">Terapia <span className="text-secondaryColor-700">Online</span></h2>
                <p className="text-darkColor-100 text-xl text-center">A terapia online funciona como a presencial, mas por meio de encontros online. Pode ser realizada a terapia do conforto de sua casa, do seu trabalho ou outro lugar que esteja garantida a privacidade.</p>
                <p className="text-darkColor-100 text-sm text-center">Existem muitas plataformas seguras para que você possa realizar o seu atendimento online de uma maneira ética e confiável.</p>
              </div>

              <div className="flex flex-wrap gap-4 justify-around lg:w-3/4 mx-auto">
                <span><span className="text-secondaryColor-700 font-bold">✓</span> Relacionamento</span>
                <span><span className="text-secondaryColor-700 font-bold">✓</span> Autoestima</span>
                <span><span className="text-secondaryColor-700 font-bold">✓</span> Ansiedade</span>
                <span><span className="text-secondaryColor-700 font-bold">✓</span> Depressão</span>
              </div>

              <div className="flex justify-center mt-4">
                <Link href="/#contato">
                <a className="text-center border-2 border-accentColor-700 rounded-full px-10 py-2 text-accentColor-700 font-bold text-xl transition-all duration-300 hover:border-secondaryColor-700 hover:bg-secondaryColor-700 hover:text-whiteColor">Agende sua Consulta</a>
                </Link>              
              </div>
            </div>
          </div>

        </section>

        <section id="sobre-mim" className="flex items-center w-full bg-gradient-to-b from-accentColor-700 to-accentColor-900">
          <div className="max-w-[1360px] mx-auto py-16 md:py-32 px-4">
            <div className="grid md:grid-cols-2">
              <div className='columns-1 flex md:justify-end md:p-3'>
                <div className="shadow-[#F29799] shadow-img rounded-[40px] h-[475px]">
                  <Image
                  src='/images/mariane-barbosa.jpg'
                  alt="Mariane Barbosa"          
                  width={486}
                  height={475}
                  className={`rounded-[40px]`}
                  />
                </div>
              </div>
              <div className="columns-1 flex flex-col mt-5 md:mt-0 md:p-3 text-whiteColor text-base font-light">
                <span className="text-secondaryColor-700 uppercase text-sm font-bold mb-4">PSICÓLOGA CLÍNICA - CRP 06/17024</span>
                <h1 className="font-bold text-4xl md:text-5xl mb-6">Mariane Barbosa</h1>
                <p className="opacity-75 mb-4">Como psicóloga clínica atuo para que cada indivíduo encontre sua própria verdade. Acredito que cada pessoa seja única e mereça ser respeitada, acredito no poder do ser humano para superar seus obstáculos e isso me motiva bastante!</p>
                <p className="opacity-75 mb-4">Acredito muito na interdisciplinaridade e nas parcerias profissionais e estou sempre buscando conhecimentos novos, ampliando a possibilidade de entregar o melhor para todos os meus pacientes.</p>
                <p className="opacity-75 mb-4">Meu objetivo é criar um espaço acolhedor, onde a pessoa se sinta respeitada em suas individualidades, num lugar em que possa fazer uso de sua verdadeira história para construir soluções reais diante dos problemas.</p>
                <p className="opacity-75 mb-4">Para ser feliz, é necessário ouvir as vozes interiores e reconhecer-se como alguém importante e merecedor do seu amor.</p>
              </div>
            </div>
            <div id="depoimentos" className="flex flex-col items-center mt-16">
              <span className="text-secondaryColor-700 uppercase text-sm font-bold mb-4">RELATO DOS MEUS PACIENTES ❤️</span>
              <h2 className="text-4xl text-whiteColor">Depoimentos</h2>
              <div className="mt-8 text-dangerColor-500">content...</div>
            </div>
          </div>

        </section>

        <section id="faq" className="flex items-center bg-pattern-bals bg-repeat bg-fixed bg-contain bg-center w-full">
          <div className="bg-whiteColor bg-opacity-95 w-full">       
            <div className={`mx-auto max-w-[1360px] py-16 md:py-32 px-4 flex flex-col gap-8`}>
              <div className="flex flex-col items-center md:w-3/4 mx-auto">
                <span className="text-secondaryColor-700 uppercase text-sm font-bold mb-4">PERGUNTAS  FREQUENTES</span>
                <h1 className="font-bold text-5xl mb-6">FAQ</h1>
                <details className="w-full py-4 bg-lightColor rounded-md px-4 mb-4 drop-shadow-md">
                  <summary className="flex items-center font-bold uppercase cursor-pointer outline-none">QUAL ABORDAGEM É UTILIZADA NAS SESSÕES?</summary>
                  <p className="">Eu trabalho com a abordagem Terapia Cognitivo Comportamental, que visa o objetivo da mudança através de uma visão direcionada às ações que o paciente deseja tomar para resolver um problema. Além disso, a TCC tem base científicas comprovadas e permite que o paciente identifique padrões de pensamentos negativos entre outros processos adaptativos.</p>
                </details>
                <details className="w-full py-4 bg-lightColor rounded-md px-4 mb-4 drop-shadow-md">
                  <summary className="flex items-center font-bold uppercase cursor-pointer outline-none">COMO FAÇO PARA AGENDAR UMA CONSULTA?</summary>
                  <p>Agendar uma consulta é muito simples. Basta entrar em contato comigo clicando aqui que a gente combina o melhor horário da sua sessão.</p>
                </details>
                <details className="w-full py-4 bg-lightColor rounded-md px-4 mb-4 drop-shadow-md">
                  <summary className="flex items-center font-bold uppercase cursor-pointer outline-none">COMO DEVO AGIR DURANTE AS SESSÕES?</summary>
                  <p>Eu recebo o paciente em um ambiente acolhedor, seguro e sigiloso, e vou conduzindo a conversa por meio de perguntas que permitem ao paciente expressar suas questões e inseguranças.</p>
                </details>
                <details className="w-full py-4 bg-lightColor rounded-md px-4 mb-4 drop-shadow-md">
                  <summary className="flex items-center font-bold uppercase cursor-pointer outline-none">QUANTO TEMPO DURA UMA SESSÃO E QUAL É A FREQUÊNCIA?</summary>
                  <p>As sessões duram em média 50 minutos e são realizadas semanalmente.</p>
                </details>
                <details className="w-full py-4 bg-lightColor rounded-md px-4 mb-4 drop-shadow-md">
                  <summary className="flex items-center font-bold uppercase cursor-pointer outline-none">COMO FUNCIONA A TERAPIA ONLINE?</summary>
                  <p>As terapias online acontecem no conforto da sua casa ou do local que você tenha preferência e disposição para realizar as sessões utilizando um aparelho celular ou computador conectado à internet. Pouco antes da sessão é enviado um link para realização da vídeo chamada.</p>
                </details>
                <details className="w-full py-4 bg-lightColor rounded-md px-4 mb-4 drop-shadow-md">
                  <summary className="flex items-center font-bold uppercase cursor-pointer outline-none">QUAIS OS HORÁRIOS DE ATENDIMENTO?</summary>
                  <p>Os atendimentos são feitos de segunda à sexta-feira das 14h às 20h. Minha agenda costuma estar equilibrada, mas consigo abrir exceções de horário.</p>
                </details>
                
              </div>
            </div>          
          </div>

        </section>

        <section className="flex items-center bg-whiteColor w-full">
          <div className="w-full">       
            <div className={`mx-auto max-w-[1360px] py-16 md:py-32 px-4 flex flex-col gap-8`}>
              <div className="flex flex-col gap-3">
                <span className="text-secondaryColor-700 uppercase text-sm font-bold">POSTAGENS RECENTES</span>
                <h1 className="font-bold text-5xl mb-6 uppercase">Blog</h1>
                <p className="text-darkColor-100 md:w-2/4">Escrevo textos sobre autoestima, autoconhecimento e liberdade emocional para ajudar pessoas levando informações certas que contribuem para o bem-estar do leitor.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                <article className="cursor-pointer relative">
                  <div className="w-full relative">
                    <Image src='/images/4-tecnicas-que-ajudam-a-controlar-a-ansiedade.jpg' layout="responsive" width={384} height={214} alt='blog' />
                  </div>
                  <div className="p-3">
                    <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3">4 Técnicas Que Ajudam A Controlar A Ansiedade</h4>
                    <p className="text-darkColor-100">Você tem ansiedade? Sua ansiedade é ‘saudável’ ou ‘patológica’? Você sabe qual seria a diferença e como identificá-las? ...</p>
                  </div>                  
                </article>

                <article className="cursor-pointer">
                  <div className="w-full relative">
                    <Image src='/images/7-atitudes-que-podem-aumentar-a-sua-autoestima.jpg' layout="responsive" width={384} height={214} alt='blog' />
                  </div>
                  <div className="p-3">
                    <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3">7 Atitudes Que Podem Aumentar A Sua Autoestima</h4>
                    <p className="text-darkColor-100">São inúmeras as atitudes que podem aumentar a autoestima, mas antes, vamos entender melhor como ela funciona? ...</p>
                  </div>                  
                </article>

                <article className="cursor-pointer">
                  <div className="w-full relative">
                    <Image src='/images/relacao-abusiva-10-sinais-de-alerta.jpg' layout="responsive" width={384} height={214} alt='blog' />
                  </div>
                  <div className="p-3">
                    <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3">Relação Abusiva: 10 Sinais De Alerta</h4>
                    <p className="text-darkColor-100">Diferente do que muitos imaginam, uma relação abusiva nem sempre inicia com a violência física, muitas vezes não chega....</p>
                  </div>                  
                </article>

              </div>
            </div>
          </div>
        </section>

        <Footer />
    </>
  )
}
