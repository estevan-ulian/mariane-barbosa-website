import { DEPOIMENTOS } from '../data/depoimentos'
import { Slider, SliderProps, Slide } from './Slider/Index'
import Subtitle from './Subtitle'

export default function Depoimentos() {
    const settings: SliderProps = {
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        loop: true,
    }    

    return (
        <div id="depoimentos" className="max-w-full flex flex-col items-center mt-16 bg-aspas bg-no-repeat bg-right-top bg-25">
            <div className='flex flex-col mb-10'>
                <Subtitle textColor='secondary' content="RELATO DOS MEUS PACIENTES ❤️" />
                <h3 className="text-4xl text-whiteColor">Depoimentos</h3>
            </div>
            <div className='max-w-[280px] w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'>
                <Slider settings={settings} className='max-w-full text-lightColor swiper-button-disabled md:swiper-button-enabled' >
                    {DEPOIMENTOS.map((value, index) => {
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