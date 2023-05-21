import React from 'react'
import Link from 'next/link'

const logo = () => {
    return (
    <Link href="/" className='flex p-3 bg-[#ffffff] rounded-full text-black items-center justify-center text-2xl font-bold hover:bg-[#4fb0c6] hover:text-white transition-colors transition hover:scale-110'>
            NS
    </Link>
    )
}

export default logo