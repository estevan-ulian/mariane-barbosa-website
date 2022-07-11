import { useState } from 'react';
import Image from 'next/image';
import { CloseIcon, MenuIcon } from './Icons'
import Button from './Button'
import LogoLight from '../../public/images/logo-mariane-barbosa.png'
import Link from 'next/link';

const Nav = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        {name: 'Sobre Mim', url: '/#sobre-mim'},
        {name: 'Blog da Mari', url: '/blog'},
        {name: 'Depoimentos', url: '/#depoimentos'},
        {name: 'FAQ', url: '/#faq'},
        {name: 'Quer Ajuda?', url: '/#contato'},
    ]
    

  return (
    <div className={`
    px-4 lg:flex items-center max-w-[1360px] mx-auto
    `}>

        <nav className={`
            flex justify-between lg:grow h-20 items-center 
        `
        }>

            <div className='w-4/5 lg:w-1/5'>
                <Link href="/">            
                    <Image 
                    src={LogoLight} 
                    alt='Logo Mariane Barbosa'
                    width={260}
                    height={48}
                    className='cursor-pointer'
                />
                </Link>
            </div>
            

            <div onClick={() => setOpen(!open)}
            className={`absolute z-20 right-3 top-6
            text-3xl cursor-pointer lg:hidden`}>
                {!open ? <MenuIcon className='w-8 h-8 stroke-whiteColor' /> : <CloseIcon className='w-8 h-8 stroke-whiteColor' />}
            </div>

            <ul className={`
            absolute top-0 bg-gray-600 px-2 bg-secondaryColor-700 z-10
            flex flex-col gap-10 items-center justify-center

            lg:flex-row lg:items-center lg:justify-end lg:pb-0 lg:static
            lg:gap-5 lg:h-auto lg:w-4/5 lg:pl-0 lg:bg-transparentColor
            
            w-full h-screen transition-all duration-500 ease-in-out 

            ${open ? 'left-0' : 'left-[-100%]'}
            `}
            >
                {
                    Links.map((Link, i) => {
                        return (
                            <li key={i} className={`lg:flex lg:items-center lg:justify-center`}>                                
                                    <a href={Link.url} className={`
                                    text-whiteColor cursor-pointer opacity-50
                                    text-xl py-1 
                                    lg:text-base lg:my-0 lg:py-3
                                    transition-all duration-400
                                    border-b-2 border-b-transparentColor
                                    hover:border-b-2 hover:opacity-100 hover:border-secondaryColor-700
                                    `}
                                    onClick={() => setOpen(false)}
                                    >
                                        {Link.name}
                                    </a>                                
                            </li>
                            )
                        }
                    )
                }
            
                <Button className="">
                    <Link href="/">
                        <a className={`
                        border rounded-full border-whiteColor px-5 py-2 text-whiteColor text-2xl lg:text-base
                        transition-all duration-300 hover:bg-secondaryColor-700
                        `}
                        >Fale comigo!</a>
                    </Link>
                </Button>
            </ul>

        </nav>

    </div>
  )
}
export default Nav