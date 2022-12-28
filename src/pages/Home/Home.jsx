import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../About/About'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'


const Home = () => {
  return (
    <div>
       <NavBar />
       <Intro />
       <About/>
       <Projects />
    </div>
  )
}

export default Home