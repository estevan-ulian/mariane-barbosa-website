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

        <section id="" className={`flex items-center bg-flower-light bg-no-repeat bg-contain bg-right-bottom w-full`}>
          <div className={`bg-whiteColor bg-opacity-80 max-w-[1360px] mx-auto py-32 px-4`}>
            
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

        </section>

        <section className="flex items-center bg-pattern-bals bg-repeat bg-contain bg-center ">

          <div className={`bg-whiteColor bg-opacity-95 max-w-[1360px] mx-auto py-32 px-4 flex flex-col gap-8`}>
            
            <h2 className="text-darkColor-900 text-5xl text-center font-bold mt-3 mb-8">Terapia <span className="text-secondaryColor-700">Online</span></h2>
            <p className="text-darkColor-100">A terapia online funciona como a presencial, mas por meio de encontros online. Pode ser realizada a terapia do conforto de sua casa, do seu trabalho ou outro lugar que esteja garantida a privacidade.</p>
            <p className="text-darkColor-100 text-sm">Existem muitas plataformas seguras para que você possa realizar o seu atendimento online de uma maneira ética e confiável.</p>

            <div className="flex justify-around">
              <span><span className="text-secondaryColor-700 font-bold">✓</span> Relacionamento</span>
              <span><span className="text-secondaryColor-700 font-bold">✓</span> Autoestima</span>
              <span><span className="text-secondaryColor-700 font-bold">✓</span> Ansiedade</span>
              <span><span className="text-secondaryColor-700 font-bold">✓</span> Depressão</span>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/#contato">
              <a className="text-center border-2 border-accentColor-700 rounded-full px-10 py-2 text-accentColor-700 font-bold text-xl transition-all duration-300 hover:border-secondaryColor-700 hover:bg-secondaryColor-700 hover:text-whiteColor">Agende sua Consulta</a>
              </Link>              
            </div>

          </div>
        </section>
        <section className="flex items-center w-full bg-gradient-to-b from-accentColor-700 to-accentColor-900">
          <div className="max-w-[1360px] mx-auto py-32 px-4 flex flex-col gap-6">
            <div className={`rounded-3xl drop-shadow-border`}>
              <Image
              src='/images/mariane-barbosa.jpg'
              alt="Mariane Barbosa"
              width={350}
              height={350}              
              />
            </div>
          </div>

        </section>

        <Footer />
    </>
  )
}
