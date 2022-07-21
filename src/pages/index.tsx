import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import client from "../lib/apolloClient";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Container from "../components/Container";
import Subtitle from "../components/Subtitle";
import Cards from "../components/Cards";
import Depoimentos from "../components/Depoimentos";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { WhatsAppUrl } from "../data/links";
import TextContrast from "../components/TextContrast";
import Button from "../components/Button";

export default function Home({ data: { posts } }) {

function renderPost() {
  return posts.map(post => {
    const { id, title, slug, coverImage, excerpt } = post
    const excerpt125words = excerpt.slice(0, 125)

    return (
      <article key={id} 
      className={
        `w-full relative 
        transition-all duration-300 hover:scale-105
      `}
      >
        <Link href={`/blog/${slug}`}>
          <a>
            <div className="w-full relative">
              <Image unoptimized loader={() => coverImage.url} src={coverImage.url} alt={title} width={768} height={360} className={`rounded-t-2xl`} />
            </div>
            <div className="p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
              <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3" dangerouslySetInnerHTML={ { __html: title}} />
              <p className="text-darkColor-100" dangerouslySetInnerHTML={ { __html: excerpt125words + " ..."}} />
            </div> 
          </a>
        </Link>
      </article>
    )
  })
}

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
        <Container margin="mt-[96px]">
          <Subtitle textColor="white" content="Psicóloga Clínica Mariane Barbosa" />
          <h1 className="text-whiteColor text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-8"><TextContrast block>Psicoterapia online</TextContrast> Atendimento individual</h1>
          <p className="text-whiteColor mb-12 lg:pr-[50%] lg:text-lg font-light">Um trabalho de aprofundamento pessoal, que possibilita à pessoa a descoberta, reavaliação e trabalho sobre suas crenças e perspectivas da vida, fazendo com que ela se torne mais consciente das suas possibilidades e potencialidades.</p>
          <Button big url={WhatsAppUrl} content="Vamos Conversar ?" variation="bgPink" />

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
            <h2 className="text-darkColor-900 text-3xl md:text-5xl font-bold mt-3 mb-8">Por que fazer <span className="text-secondaryColor-700">terapia?</span></h2>
            <p className='text-darkColor-100 lg:pr-[50%]'>Antes de tudo, psicoterapia não é sinônimo de doença. A psicoterapia serve para superar dificuldades que a vida nos apresenta e ajudar na prevenção de transtornos psicológicos que dificultam o convívio em sociedade.</p>
          <div className={`mt-16 grid md:grid-cols-2 gap-6`}>
            <Cards />
            <Link href='/#faq'>
            <a className="text-secondaryColor-700 font-bold text-xl">Está com dúvidas?</a></Link>
          </div>
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
          <div className="lg:w-3/4 mx-auto flex flex-col gap-8">
            <h2 className="text-darkColor-900 text-3xl md:text-5xl text-center font-bold">Terapia <TextContrast>Online</TextContrast></h2>
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
            <Button content="Agende sua Consulta" 
            url={WhatsAppUrl}
            variation='bgPink' 
            big
            />
                        
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

      <Section id="faq" height="py"
      bgSection="bg-pattern-balls"       
      bgPosition="bg-center" 
      bgSize="bg-contain"
      bgRepeat
      bgFixed>      
            <Container>            
              <div className="flex flex-col items-center w-full">
                <Subtitle textColor="secondary" content="PERGUNTAS FREQUENTES" />
                <h1 className="font-bold text-4xl md:text-6xl mb-6">FAQ</h1>
                <Faq />
            </div>          
          </Container>
      </Section>

      <Section id="blog" height="py" bgSection="bg-whiteColor" bgPosition="bg-center">
        <Container>   

          <div className="flex flex-col">
            <Subtitle textColor="secondary" content="POSTAGENS RECENTES" />
            <h2 className="font-bold text-4xl md:text-6xl mb-6 uppercase">Blog</h2>
            <p className="text-darkColor-100 md:w-1/2">Escrevo textos sobre autoestima, autoconhecimento e liberdade emocional para ajudar pessoas levando informações certas que contribuem para o bem-estar do leitor.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {renderPost()}
          </div>

          <div className="flex justify-center mt-12">            
            <Button big url="/blog" content="Blog da Mari" variation="bgPink" />            
          </div>   

        </Container>
      </Section>

        <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allPosts {
        posts(first: 3, orderBy: date_DESC, stage: PUBLISHED) {
          id
          excerpt
          slug
          title
          stage
          coverImage {
            url
            width
            height
          }
        }
      }            
    `
  })
  
  return {
    props: { data },
    revalidate: 10
  }
}