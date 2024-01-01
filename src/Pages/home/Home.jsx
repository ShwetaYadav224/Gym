import React from 'react'
import "./Home.css"
import Programs from '../../components/Programs'
import Header from '../../components/Header'
import Values from '../../components/Values'
import FQAs from '../../components/FQAs'
function Home() {
  return (
    <>
    <Header/>
    <Programs/>
    <Values/>
    <FQAs/>
    </>
  )
}

export default Home