import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero.jsx'
import Short from './components/Short.jsx'
import Body from './components/Body.jsx'
import Footer from  './components/Footer.jsx'
import styled from 'styled-components';


const styledDiv = styled.div
background: seagreen;
margin: 0 auto;

function App() {
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Short />
     <Body />
     <Footer />
   </div>
  )
}

export default App