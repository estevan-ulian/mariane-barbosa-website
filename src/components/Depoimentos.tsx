import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

export default function Depoimentos() {
    return (

        <div id="depoimentos" className="flex flex-col items-center mt-16 max-w-3xl mx-auto bg-aspas bg-no-repeat bg-right-top bg-blend-multiply">
            <div className='flex max-w-full flex-col items-center'>
                <span className="text-secondaryColor-700 uppercase text-sm font-bold mb-4">RELATO DOS MEUS PACIENTES ❤️</span>
                <h2 className="text-4xl text-whiteColor">Depoimentos</h2>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    direction='horizontal'
                    className='text-lightColor'
                    loop
                    wrapperTag='ul'
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                >
                    {/* <SwiperSlide tag='li' className='max-w-full text-center px-20 py-10 cursor-default'>
                        <p>Na minha quarta tentativa de um(a) psicoterapeuta, eu estava procurando alguém para me sentir a vontade e que me orientasse de acordo com as minhas dúvidas e inseguranças. E aí encontrei a Mari, que de forma empática e profissional vem me permitindo a construção de uma pessoa mais autoconfiante, independente, tendo uma melhor compreensão dos meus pensamentos, sentimentos e ações.</p>
                    </SwiperSlide>
                    <SwiperSlide tag='li' className='max-w-full text-center px-20 py-10 cursor-default'>
                        <p>Eu nunca tinha feito terapia na vida… até que um dia achei super necessário, encontrei a Mari no insta e decidi entrar em contato. Já temos praticamente um ano, sou grata a Deus por essa oportunidade, por colocar uma pessoa tão cheia de luz em minha vida… Está sendo uma experiência incrível! Que sempre indico para meus amigos, ou quem busca uma qualidade de vida. É tão fácil elogiar seu trabalho, seu cuidado, seu carinho, atenção, uma excelente profissional! Acho que todos precisam de uma “Mari” em seus dias.</p> 
                    </SwiperSlide>
                    <SwiperSlide tag='li' className='max-w-full text-center px-20 py-10 cursor-default'>
                        <p>Sou muito grata por tudo que a Mari tem feito por mim, super GRATIDÃO. A terapia feito por ela, para mim, tem sido de uma importância tremenda. Eu estava mal e conforme foi acontecendo as consultas, fui melhorando e quero, com certeza, melhorar mais. Meu muito obrigada, Mari, por tamanha dedicação pelo seu trabalho e carinho por mim. Muitíssimo obrigada.</p> 
                    </SwiperSlide>
                    <SwiperSlide tag='li' className='max-w-full text-center px-20 py-10 cursor-default'>
                        <p>A terapia tem sido muito importante, pois através dela tenho descoberto o porquê de algumas atitudes, como também desenvolvido uma melhor autoestima e autonomia no dia a dia. Tem sido uma ferramenta bastante valiosa para mim, principalmente porque encontramos alguém que nos escuta e busca nos entender sem julgamentos. Enfim, vale a pena, pois temos um direcionamento de como agir em determinadas situações e como lidar com determinadas pessoas no dia a dia, portanto é útil e ajuda bastante!</p>
                    </SwiperSlide> */}
                </Swiper>
            </div>
            
        </div>
    )
}