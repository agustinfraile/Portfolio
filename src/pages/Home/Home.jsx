import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'


const Home = () => {
  return (
    <div>
       <NavBar />
       <Intro />
       <About/>
       <Projects />
       <Contact />
    </div>
  )
}

export default Home