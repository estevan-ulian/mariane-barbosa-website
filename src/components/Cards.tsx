import Image from "next/image"

export default function Cards() {
    const cards = [
        {
          title: 'Autoestima',
          img: '/icons/autoestima.png',
          content: 'Com a terapia, é possível desenvolver ou aprimorar habilidades de enfrentamento, tendo em mente que sempre é possível ressignificar eventos que repercutem em nossa autoestima.'
        },
        {
          title: 'Autocontrole',
          img: '/icons/autocontrole.png',
          content: 'Um dos pilares da psicoterapia é orientar a pessoa para que ela possa adquirir o verdadeiro autocontrole. Conseguir direcionar plenamente o próprio comportamento, os pensamentos e as emoções.'
        },
        {
          title: 'Autoconfiança',
          img: '/icons/autoconfianca.png',
          content: 'A autoconfiança é uma qualidade que pode ser desenvolvida e trabalhada em qualquer momento da vida. Quem possui autoconfiança acredita em si mesmo, mostra-se firme, fala com propriedade e conquista maior autonomia.'
        },
        {
          title: 'Amor Próprio',
          img: '/icons/amorproprio.png',
          content: 'Amor próprio é a aceitação de que você se ama e se cuida o suficiente e o reconhecimento do seu valor pessoal para tornar isso uma prioridade em sua vida.'
        }
      ]

    function renderCards() {
        return cards.map((value, index) => {
            const {img, title, content} = value
            return (
                <article key={index} 
                className="bg-accentColor-700 bg-opacity-95
                rounded-3xl py-9 px-7 flex gap-3
                ">
                    <div>
                        <Image src={img} 
                        alt={title} 
                        width={78} 
                        height={78} />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <h4 className="font-bold text-whiteColor">{title}</h4>
                        <p className="text-whiteColor text-sm">{content}</p>
                    </div>
                </article>
            )
        })
    }

    return (
        <>
            {renderCards()}
        </>
    )
}