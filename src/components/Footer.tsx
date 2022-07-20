import Link from "next/link";
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <footer id="contato" className="flex justify-centerw-full bg-footer bg-no-repeat bg-cover bg-right-top relative">
                <div className="mx-auto w-full max-w-[1360px] pt-10 pb-40 md:pt-16 md:pb-32 px-4">

                    <div className="flex flex-col sm:flex-row flex-wrap items-start justify-start">

                        <div className="sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                        
                        </div>
                        
                        <div className="sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                            <h4 className="text-whiteColor font-bold mb-2">Menu</h4>
                            <ul>
                                <li><Link href="/#sobre-mim"><a className="text-lightColor text-sm">Sobre Mim</a></Link></li>
                                <li><Link href="/#depoimentos"><a className="text-lightColor text-sm">Depoimentos</a></Link></li>
                                <li><Link href="/blog"><a className="text-lightColor text-sm">Blog da Mari</a></Link></li>
                            </ul>
                        </div>
                        
                        <div className="sm:w-1/2 lg:w-1/4 mb-6">
                            <h4 className="text-whiteColor font-bold mb-2">Línks Úteis</h4>
                            <ul>
                                <li><Link href="/#faq"><a className="text-lightColor text-sm">Perguntas Frequentes</a></Link></li>
                                <li><Link href="/politica-de-privacidade"><a className="text-lightColor text-sm">Política de Privacidade</a></Link></li>
                            </ul>
                        </div>

                        <div className="sm:w-1/2 lg:w-1/4">
                            <h4 className="text-whiteColor font-bold mb-2">Informações de contato</h4>
                            <ul className="max-w-full">
                                <li><Link href="/#"><a className="text-lightColor text-sm flex items-center gap-2"><BsWhatsapp className="text-secondaryColor-700" /> (17) 91111-1111</a></Link></li>
                                <li className=" break-all"><Link href="mailto:contato@marianebarbosa.com.br"><a className="text-lightColor text-sm flex items-center gap-2 "><AiOutlineMail className="text-secondaryColor-700" /> contato@marianebarbosa.com.br</a></Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full py-3 border-t border-t-lightColor border-opacity-25">
                    <div className="mx-auto max-w-[1360px] flex flex-wrap flex-col md:flex-row gap-1 md:gap-0 justify-between px-4 items-center">
                        <span className="text-whiteColor text-sm text-center">Mariane Marques Barbosa - CRP 06/17024</span>
                        <span className="text-whiteColor text-sm text-center">2022 © Todos os direitos reservados</span>
                        <span className="text-whiteColor text-sm text-center">Desenvolvido por <a href="https://ulian.biz" target='_blank' rel="noreferrer">Estevan Ulian</a></span>
                    </div>
                </div>
            </footer>
        </>
    )
}
