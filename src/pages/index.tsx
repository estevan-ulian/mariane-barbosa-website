import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Container from "../components/Container";
import Subtitle from "../components/Subtitle";
import Cards from "../components/Cards";
import Depoimentos from "../components/Depoimentos";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { WhatsAppUrl } from "../data/content";
import TextContrast from "../components/TextContrast";
import Button from "../components/Button";
import PostGrid from "../components/PostGrid";
import { WPGetAllPostsForHome } from "../lib/posts";

export default function Home({ data: { posts } }) {
  const postsForHome = posts.edges
  return (
    <>
      <Head>
        <title>Mariane Barbosa - Psicóloga Clínica - Atendimento Online</title>
        <meta name="description" content="Atendimento Online e Individual. Psicoterapia com Mariane Barbosa" />
      </Head>

      <Nav />

      <Section 
      id="hero"
      height="full"
      bgSection="bg-hero" 
      bgPosition="bg-center">
        <Container $margin="mt-[96px]">
          <Subtitle textColor="white" content="Psicóloga Clínica Mariane Barbosa" />
          <h1 className="text-whiteColor"><TextContrast block className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold">Psicoterapia online</TextContrast> Atendimento individual</h1>
          <p className="text-whiteColor lg:pr-[50%] mb-8">Um trabalho de aprofundamento pessoal, que possibilita à pessoa a descoberta, reavaliação e trabalho sobre suas crenças e perspectivas da vida, fazendo com que ela se torne mais consciente das suas possibilidades e potencialidades.</p>
          <Button url={WhatsAppUrl} $big content="Vamos Conversar ?" />
        </Container>
      </Section>

      <Section 
      height="py"
      bgSection="bg-flower-light" 
      bgPosition="bg-right-top" 
      bgSize="bg-contain"
      >
        <Container> 
            <Subtitle textColor="secondary" content="Qualidade de vida" />
            <h2 className="text-darkColor-900">Por que fazer <span className="text-secondaryColor-700 text-3xl sm:text-4xl lg:text-5xl mb-6  font-bold">terapia?</span></h2>
            <p className='text-accentColor-700 lg:pr-[50%]'>Antes de tudo, psicoterapia não é sinônimo de doença. A psicoterapia serve para superar dificuldades que a vida nos apresenta e ajudar na prevenção de transtornos psicológicos que dificultam o convívio em sociedade.</p>
          <div className={`mt-16 grid md:grid-cols-2 gap-6`}>
            <Cards />
          </div>
            <Link href='/#faq'><a className="text-secondaryColor-700 text-center mt-10 font-bold text-xl animate-bounce">Está com dúvidas?</a></Link>
        </Container>
      </Section>

      <Section 
      height="py"
      bgSection="bg-pattern-balls"       
      bgPosition="bg-center" 
      bgSize="bg-contain"
      bgRepeat
      bgFixed
      >
        <div className={`mx-auto max-w-[1360px] py-16 md:py-32 px-4 flex flex-col gap-8`}>
          <div className="lg:w-3/4 mx-auto flex flex-col">
            <h2 className="text-darkColor-900 text-center">Terapia <TextContrast className="text-3xl sm:text-4xl lg:text-5xl mb-6  font-bold">Online</TextContrast></h2>
            <p className="text-accentColor-700 text-center">A terapia online funciona como a presencial, mas por meio de encontros online. Pode ser realizada a terapia do conforto de sua casa, do seu trabalho ou outro lugar que esteja garantida a privacidade.</p>
            <p className="text-accentColor-700 text-sm text-center">Existem muitas plataformas seguras para que você possa realizar o seu atendimento online de uma maneira ética e confiável.</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-around lg:w-3/4 mx-auto">
            <span className="text-accentColor-700"><span className="text-secondaryColor-700 font-bold">✓</span> Relacionamento</span>
            <span className="text-accentColor-700"><span className="text-secondaryColor-700 font-bold">✓</span> Autoestima</span>
            <span className="text-accentColor-700"><span className="text-secondaryColor-700 font-bold">✓</span> Ansiedade</span>
            <span className="text-accentColor-700"><span className="text-secondaryColor-700 font-bold">✓</span> Depressão</span>
          </div>

          <div className="flex justify-center mt-4">
            <Button content="Agende sua Consulta" url={WhatsAppUrl} $big />
                        
          </div>
        </div>
      </Section>

      <Section id="sobre-mim" height="py" bgSection="darkGradient" bgPosition="bg-center">
        <Container>
          <div className="grid md:grid-cols-2 bg-flower-light-reverse bg-no-repeat bg-bottom bg-contain">
            <div className='columns-1 flex md:justify-end md:p-3'>
              <div>
                <div className="shadow-[#F29799] shadow-img rounded-[40px] flex w-4/5 sm:w-full">
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
            <div className="columns-1 flex flex-col mt-5 md:mt-0 md:p-3 text-whiteColor">
              <Subtitle textColor="secondary" content="PSICÓLOGA CLÍNICA - CRP 06/17024" />
              <h2>Mariane Barbosa</h2>
              <p className="opacity-75">Como psicóloga clínica atuo para que cada indivíduo encontre sua própria verdade. Acredito que cada pessoa seja única e mereça ser respeitada, acredito no poder do ser humano para superar seus obstáculos e isso me motiva bastante!</p>
              <p className="opacity-75">Acredito muito na interdisciplinaridade e nas parcerias profissionais e estou sempre buscando conhecimentos novos, ampliando a possibilidade de entregar o melhor para todos os meus pacientes.</p>
              <p className="opacity-75">Meu objetivo é criar um espaço acolhedor, onde a pessoa se sinta respeitada em suas individualidades, num lugar em que possa fazer uso de sua verdadeira história para construir soluções reais diante dos problemas.</p>
              <p className="opacity-75">Para ser feliz, é necessário ouvir as vozes interiores e reconhecer-se como alguém importante e merecedor do seu amor.</p>
            </div>
          </div>        
          <Depoimentos />
        </Container>
      </Section>

      <Section id="faq" height="py"
      bgSection="bg-pattern-balls"       
      bgPosition="bg-center" 
      bgSize="bg-contain"
      bgRepeat
      bgFixed>      
            <Container>            
              <div className="flex flex-col items-center w-full gap-3">
                <Subtitle textColor="secondary" content="PERGUNTAS FREQUENTES" />
                <h2 className="m-0">FAQ</h2>
                <p className="text-accentColor-700 mb-6">Reservei este espaço para compartilhar e responder as perguntas mais frequentes.</p>
                <Faq />
            </div>          
          </Container>
      </Section>

      <Section id="blog" height="py" bgSection="bg-whiteColor" bgPosition="bg-center">
        <Container>   

          <div className="flex flex-col">
            <Subtitle textColor="secondary" content="POSTAGENS RECENTES" />
            <h2>Blog</h2>
            <p className="text-darkColor-100 md:w-1/2">Escrevo textos sobre autoestima, autoconhecimento e liberdade emocional para ajudar pessoas levando informações certas que contribuem para o bem-estar do leitor.</p>
          </div>

          <PostGrid posts={postsForHome}/>

          <div className="flex justify-center mt-12">            
            <Button $big url="/blog" content="Blog da Mari" />            
          </div>   

        </Container>
      </Section>

      <Footer />
    </>
  )
}

export async function getStaticProps() { 
  const { data } = await WPGetAllPostsForHome();

  return {
    props: { data },
    revalidate: 10
  }
}