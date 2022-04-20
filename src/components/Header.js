import React from 'react'
import ArrowRightSVG from '../assets/ArrowRightSVG'

export default function HeaderNav() {
    return (
        <nav>
            <div className='container flex justify-between items-center px-4 py-4'>
                <a href="/"><img src={require('../assets/logo.png')} alt='remindify logo' className='w-16'/></a>
                <div className='bg-secondary text-primary flex items-center px-4 rounded-2xl mr-3'>
                    <a href='/' className='flex h-12 w-max items-center font-[ttinterfaces] font-bold text-lg'>Get it now &nbsp;</a>
                    <ArrowRightSVG width={22} height={22} />
                </div>
            </div>
        </nav>
    )
}
