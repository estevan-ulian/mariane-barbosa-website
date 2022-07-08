import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <Nav />
        <HeroSection>
          <div className="
          flex flex-col px-4 lg:pr-[30%] 2xl:pr-[50%] font-inter
          transform transition-all  ease-out
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

        <Footer />
    </>
  )
}
