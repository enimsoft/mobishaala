import React from 'react'
import Faq from "react-faq-component";
import { faq } from './faqList'

const Section5 = () => {
    const styles = {
        // bgColor: 'white',
        titleTextColor: "#353535",
        rowTitleColor: "#556B82",
        rowContentColor: "#353535",
        arrowColor: "#44A1F6",

    };

    const config = {
        // animate: true,
        // arrowIcon: "V"
    };


    return (
        <div class="section-5">
            <div>
                <Faq class="faq" data={faq} styles={styles} config={config} />
            </div>
            <button class="btn">Still have unanswered questions? Get in touch.</button>
        </div>
    )
}

export default Section5
