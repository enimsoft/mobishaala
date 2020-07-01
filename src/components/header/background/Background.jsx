import React from 'react'
import background from '../../../vectors/header/background/background.svg'
import backgroundLayer from '../../../vectors/header/background/backgroundLayer.svg'


const Background = () => {
    return (
        <div class="layer">
            <img src={background} class="background" alt="background" />
            <img src={backgroundLayer} class="background stack-top" alt="background-layer" />
        </div>
    )
}

export default Background
