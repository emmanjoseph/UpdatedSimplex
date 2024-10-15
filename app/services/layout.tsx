
import Top from '@/components/serviceComponents/Top'
import React from 'react'
import Services from './page'
import Reviews from '@/components/serviceComponents/Reviews'
import Bottom from '@/components/serviceComponents/Bottom'

const layout = () => {
  return (
    <div>
        <Top/>
        <Services/>
        <Reviews/>
        <Bottom/>
     
    </div>
  )
}

export default layout
