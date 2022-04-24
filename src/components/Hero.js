import React from 'react'

export default function Hero() {
    return (
        <main className='pt-28 px-6 flex flex-col justify-center'>
            <section className='container md:flex md:items-center'>
                <div>
                    <h1 className='text-5xl text-secondary font-bold mb-1 xl:text-7xl mt-8'>Remify. <br /><span className='features-explanation'>Notify tasks to yourself and stay organized.</span></h1>
                    <a href="https://play.google.com/store/apps/details?id=com.puzolve.remify" target="_blank" rel="noreferrer"><img src={require('../assets/gplay-badge.png')} alt='download app on google playstore' className='w-64 md:mt-7 xl:mt-12'/></a>
                </div>
                <video muted="" playsinline="" preload="metadata" poster="" autoPlay="true" className='rounded-[2rem] mt-12 md:order-first min-w-[340px] max-w-[540px] md:mr-7 xl:mr-14'>
                    <source src={require('../assets/herovid.mp4')} type="video/mp4" />
                </video>
            </section>
        </main>
    )
}
