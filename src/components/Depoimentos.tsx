import { Slider, SliderProps, Slide } from './Slider/Index'

export default function Depoimentos() {
    const settings: SliderProps = {
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        loop: true,
    }

    const depoimentos = [
        {
            autor: 'V',
            idade: 30,
            profissao: 'Social Media',
            depoimento: 'A terapia tem sido muito importante, pois através dela tenho descoberto o porquê de algumas atitudes, como também desenvolvido uma melhor autoestima e autonomia no dia a dia. Tem sido uma ferramenta bastante valiosa para mim, principalmente porque encontramos alguém que nos escuta e busca nos entender sem julgamentos. Enfim, vale a pena, pois temos um direcionamento de como agir em determinadas situações e como lidar com determinadas pessoas no dia a dia, portanto é útil e ajuda bastante!'
        },
        {
            autor: 'T',
            idade: 42,
            profissao: 'Gerente de Contas',
            depoimento: "Na minha quarta tentativa de um(a) psicoterapeuta, eu estava procurando alguém para me sentir a vontade e que me orientasse de acordo com as minhas dúvidas e inseguranças. E aí encontrei a Mari, que de forma empática e profissional vem me permitindo a construção de uma pessoa mais autoconfiante, independente, tendo uma melhor compreensão dos meus pensamentos, sentimentos e ações."
        },
        {
            autor: 'M',
            idade: 32,
            profissao: 'Estudante',
            depoimento: "Eu nunca tinha feito terapia na vida… até que um dia achei super necessário, encontrei a Mari no insta e decidi entrar em contato. Já temos praticamente um ano, sou grata a Deus por essa oportunidade, por colocar uma pessoa tão cheia de luz em minha vida… Está sendo uma experiência incrível! Que sempre indico para meus amigos, ou quem busca uma qualidade de vida. É tão fácil elogiar seu trabalho, seu cuidado, seu carinho, atenção, uma excelente profissional! Acho que todos precisam de uma “Mari” em seus dias."
        },
        {
            autor: 'E',
            idade: 47,
            profissao: 'Enfermeira',
            depoimento: "Sou muito grata por tudo que a Mari tem feito por mim, super GRATIDÃO. A terapia feito por ela, para mim, tem sido de uma importância tremenda. Eu estava mal e conforme foi acontecendo as consultas, fui melhorando e quero, com certeza, melhorar mais. Meu muito obrigada, Mari, por tamanha dedicação pelo seu trabalho e carinho por mim. Muitíssimo obrigada."
        },
    ]

    return (

        <div id="depoimentos" className="max-w-full flex flex-col items-center mt-16 bg-aspas bg-no-repeat bg-right-top bg-blend-multiply">
            <div className='flex flex-col mb-8'>
                <span className="text-secondaryColor-700 uppercase text-sm font-bold mb-4">RELATO DOS MEUS PACIENTES ❤️</span>
                <h2 className="text-4xl text-whiteColor">Depoimentos</h2>
            </div>
            <div className='max-w-[300px] w-full  sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'>              
                
                <Slider settings={settings} className='max-w-full text-lightColor swiper-button-disabled md:swiper-button-enabled' >

                    {depoimentos.map((value, index) => {
                        const { depoimento, idade, autor, profissao } = value
                        return (

                            <Slide key={index} className='w-auto text-center cursor-default pb-10'>
                                <div className='w-full px-10'>
                                    <p className='text-sm md:text-base'>{depoimento}</p>
                                    <span className='text-sm text-secondaryColor-500 font-light'>{autor}., {idade} anos - {profissao}</span>
                                </div>
                            </Slide>

                        )
                    })}       

                </Slider>
            </div>
            
        </div>
    )
}