import React from 'react'

import { section1data as data } from './section1data'
import img1 from '../../vectors/section1/images/img1.svg'
import img2 from '../../vectors/section1/images/img2.svg'
import img3 from '../../vectors/section1/images/img3.svg'
import Section1card from './section1card'

const Section1 = () => {
    return (
        <div class="section-1">
            <div>
                <img src={img1} />
                <Section1card {...data[0]} />
            </div>
            <div>
                <Section1card {...data[1]} />
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
                <Section1card {...data[2]} />
            </div>
        </div>
    )
}

export default Section1
