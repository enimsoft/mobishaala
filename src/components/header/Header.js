import React from 'react'
import Background from './background/Background'
import Nav from './nav/Nav'
import Logo from './logo/Logo'

import Section_0_1 from './section-0-1/Section_0_1'
import Section_0_2 from './section-0-2/Section_0_2'

const Header = () => {
    return (
        <div class="header">
            <Background />
            <div class="header-section">
                <div class="logo">
                    <Logo />
                </div>
                <Nav />
                <div class="nav-button">
                    <button>Schedule a Call</button>
                </div>
            </div>
            <div class="section-0">
                <div>
                    <Section_0_1 />
                </div>
                <div>
                    <Section_0_2 />
                </div>
            </div>
        </div>
    )
}

export default Header
