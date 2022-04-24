import React from 'react'
import ArrowRightSVG from '../assets/ArrowRightSVG'
import { Link } from 'react-router-dom'

export default function HeaderNav() {
    return (
        <nav className='fixed z-10 h-24 w-full'>
            <div className='container flex justify-between items-center px-4 py-4 bg-white'>
                <Link to="/"><img src={require('../assets/logo.png')} alt='remify logo' className='w-16'/></Link>
                <div className='bg-secondary text-primary flex items-center px-4 rounded-2xl mr-3'>
                    <a href="https://play.google.com/store/apps/details?id=com.puzolve.remify" target="_blank" rel="noreferrer" className='flex h-12 w-max items-center font-bold text-lg'>Get it now &nbsp;</a>
                    <ArrowRightSVG width={22} height={22} />
                </div>
            </div>
        </nav>
    )
}
