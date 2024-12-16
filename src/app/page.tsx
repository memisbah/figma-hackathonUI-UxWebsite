import React from 'react'
import Topcategory from './components/topcategory'
import Mainsection from './components/mainsection'
import Feature from './components/feature'

import Newstyle from './components/newstyle'
import Footer from './components/footer'
import OurProduct from './components/ourproduct'

export default function Home() {
  return (
    <div className='m-3'>
      <Mainsection/>
      <Feature/>
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <Footer/>
    </div>
  )
}
