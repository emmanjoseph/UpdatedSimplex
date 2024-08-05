import Bottom from '@/components/serviceComponents/Bottom'
import Medium from '@/components/serviceComponents/Medium'
import Reviews from '@/components/serviceComponents/Reviews'
import Top from '@/components/serviceComponents/Top'
import React from 'react'

const page = () => {
  return (
    <div>
        <Top/>
        <Medium/>
        <Reviews/>
        <Bottom/>
    </div>
  )
}

export default page