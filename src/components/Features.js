import React from 'react'

import MainPageShort from '../assets/MainPageShort';
import HistoryPageShort from '../assets/HistoryPageShort';

export default function Features() {
    return (
        <section className='container px-6 custom-scroll'>
            <div className='features-main-div'>
                <h2 className='features-highlight'>Stay productive.<br /><span className='features-explanation'>Notify yourself about the tasks/notes you've gotta do.</span></h2>
                <div className='features-card-bg'>
                    <div className='features-card-svg'>
                        <MainPageShort />
                    </div>
                </div>
            </div>

            <div className='features-main-div'>
                <h2 className='features-highlight'>Recollection. <br /><span className='features-explanation'>See all your previous notifications and repin them.</span></h2>
                <div className='features-card-bg'>
                    <div className='features-card-svg'>
                        <HistoryPageShort />
                    </div>
                </div>
            </div>

            <div className='features-main-div'>
                <h2 className='features-highlight'>Free of charge. <br /><span className='features-explanation'>No ads, no tracking, no bs and the app is completely free.</span></h2>
            </div>
        </section>
    )
}
