import React from 'react'
import Banner from '../Banner/Banner'
import Top10Services from '../Top10Services/Top10Services'
import About from '../About/About'


function Home() {
  return (
    <div>
    <Banner/>
    <div className="pb-30">
  <Top10Services/>

    </div>
   
    </div>
  )
}

export default Home
