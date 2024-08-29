import React from 'react'
import { Triangle } from 'react-loader-spinner'


export const Loader = () => {
  return (
    <div className='py-14 flex items-center justify-center'>
      <Triangle
  visible={true}
  height="80"
  width="80"
  color="#3b82f6"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}
