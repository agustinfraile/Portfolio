import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../About/About'
import Intro from '../Intro/Intro'


const Home = () => {
  return (
    <div>
       <NavBar />
       <Intro />
       <About/>
    </div>
  )
}

export default Home