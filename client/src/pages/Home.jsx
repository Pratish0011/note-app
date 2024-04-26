import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className='absolute top-0 h-[8vh] w-[70vw] left-60  pl-10 ml-10'>

        <SearchBar/>
        <Card  />
    
        
    </div>
  )
}

export default Home