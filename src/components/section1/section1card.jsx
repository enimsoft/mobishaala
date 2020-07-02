import React from 'react'

const Section1card = ({ title, description }) => {
    return (
        <div class="section-1-card">
            <h1>{title}</h1>
            <p>{description}</p>
            <a href="#">Learn More</a> |
            <a href="#"> Schedule a free consultation</a>
        </div>
    )
}

export default Section1card
