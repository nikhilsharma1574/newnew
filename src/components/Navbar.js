import React ,{useState}from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Github from '../../public/svgs/Github.svg'
import Facebook from '../../public/svgs/Facebook.svg'
import Hackerank from '../../public/svgs/Hackerrank.svg'
import Instagram from '../../public/svgs/Instagram.svg'
import Twitter from '../../public/svgs/Twitter.svg'

const Navbar = () => {

    
    const CustomLink =({href,title,className="",icon_link})=>{
        const router = useRouter();
        console.log(router);
        return(
            <>
                <Link href={href} className={`mr-4 transition-colors duration-300 hover:underline underline-offset-4 hover:text-[#4fb0c6] ${router.asPath=== href ? 'underline' : 'no-underline'}`}>
                    {title}            
                </Link>
            </>
        )
    } 

return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
        <nav className=''>
            <CustomLink href="/" title={"Home"}  />
            <CustomLink href="/About" title={"About"} />
            <CustomLink href="/Contact" title={"Contact"} />
            {/* <CustomLink href="/test" title={"Signup"} /> */}
        </nav>
        <div className='absolute left-[50%]'>
            <Logo/>
        </div>
        <nav>
            <CustomLink href="/1" target={"_blank"} src={Github} title={"GitHub"}  />
            <CustomLink href="/2" target={"_blank"} src={Instagram} title={"Instagram"}  />
            <CustomLink href="/3" target={"_blank"} src={Twitter} title={"Twitter"}  />
            <CustomLink href="/4" target={"_blank"} src={Hackerank} title={"Hackerank"}  />
            <CustomLink href="/5" target={"_blank"} src={Facebook} title={"Facebook"}  />
        </nav>
    </header>
)
}

export default Navbar