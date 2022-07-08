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
          flex flex-col px-4 lg:pr-[20%] font-inter
          transform transition-all ease-out max-w-[1360px] mx-auto
          "
          >
            <h2 className="text-whiteColor uppercase text-xl mb-4">Psicóloga Clínica Mariane Barbosa</h2>
            <h1 className="text-whiteColor text-6xl font-bold"><span className="text-secondaryColor-700 block mb-4">Psicoterapia online</span> Atendimento individual</h1>
            <p className="text-whiteColor mt-8 mb-10">Um trabalho de aprofundamento pessoal, que possibilita à pessoa a descoberta, reavaliação e trabalho sobre suas crenças e perspectivas da vida, fazendo com que ela se torne mais consciente das suas possibilidades e potencialidades.</p>
            <Link href='/'>
              <a className={`
              text-whiteColor bg-secondaryColor-700 py-3 px-6 text-xl rounded-full max-w-max text-center
              `}>Vamos Conversar?</a>
            </Link>
          </div>          
        </HeroSection>

        <section id="sobre-mim" className={`flex items-center min-h-screen py-16 bg-flower-light bg-opacity-80 bg-no-repeat bg-contain bg-right-top px-4 max-w-[1360px] mx-auto`}>
          <div>
            
          <div className={`lg:pr-[50%]`}>
            <h2 className="text-secondaryColor-700 uppercase text-xl mb-4">Qualidade de vida</h2>
            <h1 className="text-darkColor-900 text-5xl font-bold">Por que fazer <span className="text-secondaryColor-700 block mb-4">terapia?</span></h1>
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
             <a className="text-secondaryColor-700 font-bold">Está com dúvidas?</a></Link>

          </div>
          

          
          </div>

        </section>

        <Footer />
    </>
  )
}
