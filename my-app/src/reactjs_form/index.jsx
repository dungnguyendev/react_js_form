import React from 'react'
import Student from './Student'
import './css/style.css'
const index = () => {
  return (
    <div className='container'>
        <h1 className='bg-dark text-white py-3 fs-4'>Thông tin sinh viên</h1>
        <Student/>
    </div>
  )
}

export default index