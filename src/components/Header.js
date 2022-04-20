import React from 'react'
import ArrowRightSVG from '../assets/ArrowRightSVG'

export default function HeaderNav() {
    return (
        <nav>
            <div className='container flex justify-between items-center'>
                <img src={require('../assets/logo.png')} alt='remindify logo' className='w-16'/>
                <div className='bg-secondary text-primary flex items-center px-4 rounded-2xl'>
                    <a href='/' className='flex h-12 w-max items-center font-[ttinterfaces] font-bold text-lg'>Get in now &nbsp;</a>
                    <ArrowRightSVG width={22} height={22} />
                </div>
            </div>
        </nav>
    )
}
