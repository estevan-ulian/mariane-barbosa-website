import Link from "next/link";
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <footer className="flex justify-center pt-8 pb-36 w-full bg-footer bg-no-repeat bg-cover relative">
                <div className="mx-auto max-w-[1360px] md:py-32 px-4">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="columns-1">
                            <h4 className="text-whiteColor font-bold mb-2">Menu</h4>
                            <ul>
                                <li><Link href=""><a className="text-lightColor text-sm">Sobre Mim</a></Link></li>
                                <li><Link href=""><a className="text-lightColor text-sm">Depoimentos</a></Link></li>
                                <li><Link href=""><a className="text-lightColor text-sm">Blog da Mari</a></Link></li>
                            </ul>
                        </div>
                        <div className="columns-1">
                            <h4 className="text-whiteColor font-bold mb-2">Línks Úteis</h4>
                            <ul>
                                <li><Link href=""><a className="text-lightColor text-sm">Perguntas Frequentes</a></Link></li>
                                <li><Link href=""><a className="text-lightColor text-sm">Política de Privacidade</a></Link></li>
                            </ul>
                        </div>
                        <div className="columns-1">
                            <h4 className="text-whiteColor font-bold mb-2">Informações de contato</h4>
                            <ul>
                                <li><Link href=""><a className="text-lightColor text-sm flex items-center gap-2"><BsWhatsapp className="text-secondaryColor-700" /> (17) 91111-1111</a></Link></li>
                                <li><Link href=""><a className="text-lightColor text-sm flex items-center gap-2 "><AiOutlineMail className="text-secondaryColor-700" /> contato@marianebarbosa.com.br</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full py-6  border-t border-t-lightColor">
                    <div className="mx-auto max-w-[1360px] flex flex-wrap justify-between px-4 items-center">
                        <span className="text-whiteColor text-sm">Mariane Marques Barbosa - CRP 06/17024</span>
                        <span className="text-whiteColor text-sm">2022 © Todos os direitos reservados</span>
                        <span className="text-whiteColor text-sm">Desenvolvido por <a href="https://ulian.biz" target='_blank' rel="noreferrer">Estevan Ulian</a></span>
                    </div>
                </div>
            </footer>
        </>
    )
}
