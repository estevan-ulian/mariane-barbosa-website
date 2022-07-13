import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Link from "next/link";
import Image from "next/image";
import Depoimentos from "../components/Depoimentos";
import Head from "next/head";
import Subtitle from "../components/Subtitle";
import Cards from "../components/Cards";
import Container from "../components/Container";

export default function Home() {
  
  
  return (
    <>
      <Head>
        <title>Mariane Barbosa - Psicóloga Clínica - Atendimento Online</title>
        <meta name="description" content="Atendimento Online e Individual. Psicoterapia com Mariane Barbosa" />
      </Head>
      <Nav />
      <Section 
      bgSection="bg-hero" 
      bgPosition="bg-center">
        <div className="
        flex flex-col px-4 pt-8 lg:pr-[20%] font-inter
        transform transition-all ease-out max-w-[1360px] mx-auto
        "
        >
          <Subtitle textColor="white" content="Psicóloga Clínica Mariane Barbosa" />
          <h1 className="text-whiteColor text-3xl md:text-5xl lg:text-6xl font-bold mt-3 mb-8"><span className="text-secondaryColor-700 block mb-4">Psicoterapia online</span> Atendimento individual</h1>
          <p className="text-whiteColor mb-12">Um trabalho de aprofundamento pessoal, que possibilita à pessoa a descoberta, reavaliação e trabalho sobre suas crenças e perspectivas da vida, fazendo com que ela se torne mais consciente das suas possibilidades e potencialidades.</p>
          <Link href='/'>
            <a className={`
            text-whiteColor bg-secondaryColor-700 py-2 px-10 text-lg md:text-xl rounded-full max-w-max text-center transition-all duration-300 hover:scale-105
            `}>Vamos Conversar?</a>
          </Link>
        </div>          
      </Section>

      <Section 
      bgSection="bg-flower-light" 
      bgPosition="bg-right-top" 
      bgSize="bg-contain"
      >
        <div className="max-w-[1360px] mx-auto py-16 md:py-32 px-4">          
          <div className={`lg:pr-[50%]`}>
            <Subtitle textColor="secondary" content="Qualidade de vida" />
            <h2 className="text-darkColor-900 text-3xl md:text-5xl font-bold mt-3 mb-8">Por que fazer <span className="text-secondaryColor-700">terapia?</span></h2>
            <p className='text-darkColor-100'>Antes de tudo, psicoterapia não é sinônimo de doença. A psicoterapia serve para superar dificuldades que a vida nos apresenta e ajudar na prevenção de transtornos psicológicos que dificultam o convívio em sociedade.</p>
          </div>
          <div className={`mt-16 grid md:grid-cols-2 gap-6`}>
            <Cards />
            <Link href='/#faq'>
            <a className="text-secondaryColor-700 font-bold text-xl">Está com dúvidas?</a></Link>
          </div>
        </div>
      </Section>

      <Section 
      bgSection="bg-pattern-bals"       
      bgPosition="bg-center" 
      bgSize="bg-contain"
      bgRepeat
      bgFixed
      >
        <div className={`mx-auto max-w-[1360px] py-16 md:py-32 px-4 flex flex-col gap-8`}>
          <div className="lg:w-3/4 mx-auto flex flex-col gap-8">
            <h2 className="text-darkColor-900 text-3xl md:text-5xl text-center font-bold">Terapia <span className="text-secondaryColor-700">Online</span></h2>
            <p className="text-darkColor-100 text-lg md:text-xl text-center">A terapia online funciona como a presencial, mas por meio de encontros online. Pode ser realizada a terapia do conforto de sua casa, do seu trabalho ou outro lugar que esteja garantida a privacidade.</p>
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
            <a className="text-center border-2 border-accentColor-700 rounded-full px-10 py-2 text-accentColor-700 font-bold text-lg md:text-xl transition-all duration-300 hover:border-secondaryColor-700 hover:bg-secondaryColor-700 hover:text-whiteColor">Agende sua Consulta</a>
            </Link>              
          </div>
        </div>
      </Section>

      <Section id="sobre-mim" bgSection="darkGradient" bgPosition="bg-center">
        <Container>
          <div className="grid md:grid-cols-2 bg-flower-light-reverse bg-no-repeat bg-bottom bg-contain">
            <div className='columns-1 flex md:justify-end md:p-3'>
              <div>
                <div className="shadow-[#F29799] shadow-img rounded-[40px] flex">
                  <Image
                  src='/images/mariane-barbosa.jpg'
                  alt="Mariane Barbosa"          
                  width={486}
                  height={475}
                  className={`rounded-[40px]`}
                  />
                </div>
              </div>
            </div>
            <div className="columns-1 flex flex-col mt-5 md:mt-0 md:p-3 text-whiteColor text-base font-light">
              <Subtitle textColor="secondary" content="PSICÓLOGA CLÍNICA - CRP 06/17024" />
              <h1 className="font-bold text-3xl md:text-4xl mb-6">Mariane Barbosa</h1>
              <p className="opacity-75 mb-4">Como psicóloga clínica atuo para que cada indivíduo encontre sua própria verdade. Acredito que cada pessoa seja única e mereça ser respeitada, acredito no poder do ser humano para superar seus obstáculos e isso me motiva bastante!</p>
              <p className="opacity-75 mb-4">Acredito muito na interdisciplinaridade e nas parcerias profissionais e estou sempre buscando conhecimentos novos, ampliando a possibilidade de entregar o melhor para todos os meus pacientes.</p>
              <p className="opacity-75 mb-4">Meu objetivo é criar um espaço acolhedor, onde a pessoa se sinta respeitada em suas individualidades, num lugar em que possa fazer uso de sua verdadeira história para construir soluções reais diante dos problemas.</p>
              <p className="opacity-75 mb-4">Para ser feliz, é necessário ouvir as vozes interiores e reconhecer-se como alguém importante e merecedor do seu amor.</p>
            </div>
          </div>        
          <Depoimentos />
        </Container>
      </Section>
          
        <section id="faq" className="flex items-center bg-pattern-bals bg-repeat bg-fixed bg-contain bg-center w-full">
          <div className="bg-whiteColor bg-opacity-95 w-full">       
            <div className={`mx-auto max-w-[1360px] py-16 md:py-32 px-4 flex flex-col gap-8`}>
              <div className="flex flex-col items-center md:w-3/4 mx-auto">
                <Subtitle textColor="secondary" content="PERGUNTAS FREQUENTES" />
                <h1 className="font-bold text-4xl md:text-6xl mb-6">FAQ</h1>
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
                <Subtitle textColor="secondary" content="POSTAGENS RECENTES" />
                <h2 className="font-bold text-4xl md:text-6xl mb-6 uppercase">Blog</h2>
                <p className="text-darkColor-100 md:w-2/4">Escrevo textos sobre autoestima, autoconhecimento e liberdade emocional para ajudar pessoas levando informações certas que contribuem para o bem-estar do leitor.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {/* {
                  data.map(v => {
                    return (
                      <article key={v.id}>
                        <div>
                          imagem
                        </div>
                        <div>
                          <h4>{v.title.rendered}</h4>
                          <p>{v.excerpt}</p>
                        </div>
                      </article>
                    )
                  })  
                } */}
                <article className="cursor-pointer relative">
                  <div className="w-full relative">
                    <Image src='/images/4-tecnicas-que-ajudam-a-controlar-a-ansiedade.jpg' layout="responsive" width={384} height={214} alt='blog' />
                  </div>
                  <div className="p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
                    <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3">4 Técnicas Que Ajudam A Controlar A Ansiedade</h4>
                    <p className="text-darkColor-100">Você tem ansiedade? Sua ansiedade é ‘saudável’ ou ‘patológica’? Você sabe qual seria a diferença e como identificá-las? ...</p>
                  </div>                  
                </article>

                <article className="cursor-pointer">
                  <div className="w-full relative">
                    <Image src='/images/7-atitudes-que-podem-aumentar-a-sua-autoestima.jpg' layout="responsive" width={384} height={214} alt='blog' />
                  </div>
                  <div className="p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
                    <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3">7 Atitudes Que Podem Aumentar A Sua Autoestima</h4>
                    <p className="text-darkColor-100">São inúmeras as atitudes que podem aumentar a autoestima, mas antes, vamos entender melhor como ela funciona? ...</p>
                  </div>                  
                </article>

                <article className="cursor-pointer">
                  <div className="w-full relative">
                    <Image src='/images/relacao-abusiva-10-sinais-de-alerta.jpg' layout="responsive" width={384} height={214} alt='blog' />
                  </div>
                  <div className="p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
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

// export async function getStaticProps() {
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts`)
//   return {
//     props: {
//       data: data || {},
//     },
//     revalidate: 1,
//   }
// }
