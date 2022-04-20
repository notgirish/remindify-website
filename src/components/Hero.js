import React from 'react'

export default function Hero() {
    return (
        <section className='container flex space-x-14 items-center'>
            <video width="540" height="540" muted="" playsinline="" preload="metadata" poster="" autoPlay="true" className='rounded-2xl'>
                <source src={require('../assets/herovid.mp4')} type="video/mp4" />
            </video>
            <div>
                <h1 className='text-7xl text-secondary font-[ttinterfaces] font-bold'>Remindify. <br/><span className='text-customgray'>Notify tasks to yourself and stay organized.</span></h1>
                <img src={require('../assets/gplay-badge.png')} alt='download app on google playstore' className='w-64 mt-12'/>
            </div>
        </section>
    )
}
