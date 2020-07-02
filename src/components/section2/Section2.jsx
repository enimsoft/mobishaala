import React from 'react'
import background from '../../vectors/section2/background/background.svg'
import SuccessStories from './SuccessStories'

const Section2 = () => {
    return (
        <div class="section-2">
            {/* forget the below div existed in the document (svg background)*/}
            <div class=".background-container">
                <img src={background} class="background" />
            </div>¸
            <div class="content">
                <h1>Our Success Stories</h1>
                <SuccessStories />
                <button class="secondary">See All Success Stories</button>
            </div>
        </div>
    )
}

export default Section2
