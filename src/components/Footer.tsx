import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="flex justify-center py-2 w-full bg-footer">
                <div className="mx-auto max-w-[1360px] py-16 md:py-32 px-4">
                    <div className="grid lg:grid-cols-4">
                        <div className="columns-1">
                            <h4 className="text-whiteColor font-bold mb-2">Menu</h4>
                            <ul>
                                <li><Link href=""><a className="text-whiteColor text-sm">Sobre Mim</a></Link></li>
                                <li><Link href=""><a className="text-whiteColor text-sm">Depoimentos</a></Link></li>
                                <li><Link href=""><a className="text-whiteColor text-sm">Blog da Mari</a></Link></li>
                            </ul>
                        </div>
                        <div className="columns-1">
                            <h4 className="text-whiteColor font-bold mb-2">Línks Úteis</h4>
                            <ul>
                                <li><Link href=""><a className="text-whiteColor text-sm">Perguntas Frequentes</a></Link></li>
                                <li><Link href=""><a className="text-whiteColor text-sm">Política de Privacidade</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
