import React from 'react'

import justTheBeginning from '../../vectors/section3/elements/justTheBeginning.svg'
import moneyBack90days from '../../vectors/section3/icons/moneyBack90days.svg'
import transformYourBusiness from '../../vectors/section3/elements/transformYourBusiness.svg'
import people from '../../vectors/section3/icons/people.svg'

const Section3 = () => {
    return (
        <div class="section-3">
            <img src={justTheBeginning} />
            <div class="spacer"/>
            <img src={moneyBack90days} />
            <div class="spacer"/>
            <img src={transformYourBusiness} />
            <div class="spacer"/>
            <img src={people} />
        </div>
    )
}

export default Section3
