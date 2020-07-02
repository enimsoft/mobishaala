import React from 'react';
import logo from './logo.svg';
import './App.css';
import background from './vectors/header/background/background.svg'
import backgroundLayer from './vectors/header/background/backgroundLayer.svg'
import Background from './components/header/background/Background';
import Logo from './components/header/logo/Logo';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import CustomFooter from './components/footer/CustomFooter';

function App() {
  return (
    <div>
      <Header/>
      <div class="spacer"/>
      <Section1/>
      <div class="spacer"/>
      <Section2/>
      <div class="spacer"/>
      <Section3/>
      <div class="spacer"/>
      <Section4/>
      <div class="spacer"/>
      <Section5/>
      <div class="spacer"/>
      <div class="spacer"/>
      <CustomFooter/>
    </div>
  );
}

export default App;
