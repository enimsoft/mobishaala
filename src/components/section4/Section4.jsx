import React from 'react'

import background from '../../vectors/section4/background/background.svg'

const Section4 = () => {
    return (
        <div class="section-3">
            {/* forget the below div existed in the document (svg background)*/}
            <div class=".background-container">
                <img src={background} class="background" />
            </div>
            <div class="content">
                <h1>Get Your Risk Free Audit Today</h1>
                <p>UNCOVER THE SECRETS TO OUTRANK YOUR COMPETITORS</p>
                <button class="secondary">See All Success Stories</button>
            </div>
        </div>
    )
}

export default Section4
