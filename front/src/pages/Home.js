import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'

const Home = () => {
  return (
    <>
    <Header />
    <div className='home'>
    <Post />
    <Sidebar />

    </div>
    </>
  )
}

export default Home