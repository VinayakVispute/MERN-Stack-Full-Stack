import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className="custom-loader"></div>
      <p className='text-lg font-semibold' style={{
        '--tw-bg-opacity': 1,
        color: 'rgb(34 34 59/var(--tw-bg-opacity))',
      }}
      >Loading....</p>
    </div>
  )
}

export default Spinner