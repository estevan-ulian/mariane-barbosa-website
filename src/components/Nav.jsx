
import { useState } from 'react';
import { CloseIcon, MenuIcon } from './Icons'
import Button from './Button'

const Nav = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        {name: 'Home', link: '/'},
        {name: 'Services', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Blog', link: '/'},
        {name: 'Contact', link: '/'},
    ]
    

  return (
    <div className={`
        px-2 py-2 md:flex w-full items-center
    `}>

        <nav className={`
            flex justify-between md:grow h-10 items-center
        `
        }>

            <div className={`
            font-bold text-2xl cursor-pointer text-pink-500
            `}>
                Logo
            </div>

            <div onClick={() => setOpen(!open)}
            className={`text-3xl cursor-pointer md:hidden`}>
                {!open ? <MenuIcon className='w-8 h-8' /> : <CloseIcon className='w-8 h-8' />}
            </div>

            <ul className={`
            absolute  top-14
            md:z-auto md:flex md:items-center md:pb-0 md:static
            w-full h-screen md:h-auto md:w-auto 
            md:pl-0 pl-4 bg-gray-600 md:bg-transparent
            transition-all duration-500 ease-in-out 
            ${open ? 'right-0' : 'right-[-100%]'}
            `}
            >
                {
                    Links.map((Link, i) => {
                        return (
                            <li key={i} className={`md:ml-7 text-xl md:my-0 my-7`}>
                                <a href={Link.url} className={`text-pink-500 hover:text-pink-300 duration-500 cursor-pointer`}>
                                    {Link.name}
                                </a>
                            </li>
                            )
                        }
                    )
                }
            
                <Button>
                    Fale comigo!
                </Button>
            </ul>

        </nav>

    </div>
  )
}
export default Nav