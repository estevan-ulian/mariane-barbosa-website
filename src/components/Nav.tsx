
import { useState } from 'react';
import Image from 'next/image';
import { CloseIcon, MenuIcon } from './Icons'
import Button from './Button'
import LogoDark from '../../public/images/logo-mariane-barbosa.png'
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
    px-2 lg:px-4 lg:flex min-w-full items-center
    `}>

        <nav className={`
            flex justify-between lg:grow h-20 items-center
        `
        }>

            <div className='w-4/5'>
                <Link href="/">            
                    <Image src={LogoDark} 
                    alt='Logo Mariane Barbosa'
                    layout='fixed'
                />
                </Link>
            </div>
            

            <div onClick={() => setOpen(!open)}
            className={`absolute z-20 right-2 top-7
            text-3xl cursor-pointer lg:hidden`}>
                {!open ? <MenuIcon className='w-8 h-8' /> : <CloseIcon className='w-8 h-8' />}
            </div>

            <ul className={`
            absolute top-14 bg-gray-600 px-2 lg:px-4 bg-secondaryColor-700 z-10
            flex flex-col gap-10 items-center justify-center
            lg:z-auto lg:flex-row lg:items-center lg:pb-0 lg:static
            lg:gap-8 lg:h-auto lg:w-auto lg:pl-0 lg:bg-transparent
            w-full h-screen transition-all duration-500 ease-in-out 
            ${open ? 'left-0 top-0' : 'left-[-100%] top-0'}
            `}
            >
                {
                    Links.map((Link, i) => {
                        return (
                            <li key={i} className={`lg:flex lg:items-center lg:justify-center`}>                                
                                    <a className={`
                                    text-xl lg:text-base 
                                    lg:my-0 my-7 
                                    text-whiteColor
                                    cursor-pointer
                                    
                                    `}
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
                        <a className='border rounded-full border-whiteColor px-5 py-2 text-whiteColor text-xl'>Fale comigo!</a>
                    </Link>
                </Button>
            </ul>

        </nav>

    </div>
  )
}
export default Nav