import React from 'react'
import Form from './Form'

const AddOrder = () => {
  return (
    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">

<h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Add Orders</h2>

    <div className="w-[40%]  ml-[100px] shadow-black/20 shadow-lg form  bg-white rounded-[10px]">
       <Form/>
      </div>
      </section>
      
  )
}

export default AddOrder