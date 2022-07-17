import React, { useState, useEffect } from 'react';
import {  useNavigate } from "react-router-dom"

const Home = () => {
  const [orderData, setOrderData] = useState('')
  const [push, setPush] = useState(false)
  const [load, setLoad] = useState(false)
  const [sub, setSub] = useState('')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(-1)
  const [skip, setSkip] =useState(0)
  const [totalActive, setTotalActive] =useState(0)
  const [totalComplete, setTotalComplete] =useState(0)

  const navigate = useNavigate();


  useEffect(() => {
    fetch(`http://localhost:3002/api/read?search=${search}&sort=${sort}&skip=${skip}`)
    .then(response => response.json())
    .then((data) => setOrderData(data))
  },[load, push, search, sort, skip])



  useEffect(() => {
    fetch("http://localhost:3002/api/show")
    .then(response => response.json())
    .then((data) => setSub(data))
  },[])
 
  useEffect(() => {
    fetch("http://localhost:3002/api/totalactive")
    .then(response => response.json())
    .then((data) => setTotalActive(data.count))
  },[])

  useEffect(() => {
    fetch("http://localhost:3002/api/totalcomplete")
    .then(response => response.json())
    .then((data) => setTotalComplete(data.count))
  },[])
 

  const next = (id) => {
    localStorage.setItem('next_id', id)
    navigate('/next')
  }

  const edit = (id) => {
    localStorage.setItem('edit_id', id)
    navigate('/edit')
  }

  const sortOrder = (event) => {
    setSort(event.target.value)
  }

  async function onDelete(id) { 

    const response = await fetch('http://localhost:3002/api/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       id
      }),
    })

    const data = await response.json()

    if (data.status === 'ok') {
    
      setOrderData(orderData.filter((val)=>{
        return orderData._id!== id
      }))
      setPush(!push)
      setLoad(!load)

 
    }
  }
 
  return (
      <>
    

    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">
    <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Home </h2>


    <div className="  ml-[100px] shadow-black/20 shadow-lg form  bg-white rounded-[10px] mb-[30px]">

<div className="cards flex justify-around items-start px-[30px] py-[20px] mb-[30px]">
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">{orderData.length}</h2>
      <h2 className="text-white  font-bold text-[20px] text-center"> New Orders</h2>
    </div>
   
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">{totalActive}</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Active Orders</h2>
    </div>
   
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">0</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Completed Orders</h2>
    </div>
    
</div>

      </div>
      <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>New orders </h2>
      <div className="table w-[900px] overflow-auto-x  ml-[100px] shadow-black/20 shadow-lg form  mb-[60px] bg-white rounded-[10px]">
   
      <div className=' w-[100%] bg-indigo-500  mb-[20px] px-[20px] py-[6px] '>
  <input type="text" className='mr-[40px] w-[350px] px-[20px] py-[6px] rounded' placeholder="Search by location or customer name" value={search} onChange={(event) =>setSearch(event.target.value)}/>
<span className='pl-[100px] mr-[20px] text-white font-semibold'>Sort by </span> 
<select className='bg-white text-indigo-700 font-bold px-[8px] py-[4px] rounded' name="" id="" onChange={sortOrder}>
<option value="-1" selected>Newest</option>
<option value="1" >Oldest</option>

</select>
</div>
<div className="table-wrapper">
   <table className=' table '>
     <tr className='text-left w-[100%] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 text-white' >
   
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Order Status</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Name</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Id</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>City</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Postcode</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Area(m.sq)</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Email</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Phone</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Section</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Method</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Date</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Edit</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Complete Order </th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Delete</th>
     </tr>
     <tbody>
      {orderData!== '' &&
        orderData.map((order)=>(
          
           <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1) border-2'>
       
         
            {order.orderstatus==='incomplete'? <td className='font-semibold text-red-500 bg-red-100 w-[200px] px-[20px] py-[5px]'>Incomplete </td>: <td className='text-green-500 bg-green-100 font-semibold w-[200px] px-[20px] py-[5px]'>Complete</td>}
            <td className='font-semibold w-[200px] px-[20px] py-[5px]'>{order.name}</td>
           
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order._id}</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order.city}</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order.postcode}</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order.sliderVal} m.sq</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order.email}</td> 
          <td className='font-semibold w-[100%s] px-[20px] py-[5px]'>    {order.contact}</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>{order.section}</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>{order.method}</td>
        
      

        
          {order.orderstatus==='complete'? <td className='font-semibold w-[100%] px-[20px] py-[5px]'>{
       new Date(order.date).getDate()+"/" + (new Date(order.date).getMonth() + 1) + "/" + new Date(order.date).getFullYear()
       }</td>:
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'></td>}
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'> <button onClick={() =>edit(order._id)} className='hover:bg-orange-600 bg-orange-500 text-white rounded px-[15px] py-[5px] font-medium'>
       Edit
         </button></td>
       {order.orderstatus === 'complete'?
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>
       <button disabled className=' bg-green-600 text-white rounded px-[15px] py-[5px] font-medium' >
         Completed</button>
         </td>
         : <td className='font-semibold w-[100%] px-[20px] py-[5px]'>
        <button onClick={() =>next(order._id)} className='hover:bg-green-600 bg-green-500 text-white rounded px-[15px] py-[5px] font-medium' >
          Complete</button>
          </td>}

       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='hover:bg-red-600 bg-red-500 text-white rounded px-[15px] py-[5px] font-medium' onClick ={(() => onDelete(order._id))}> Delete</button></td>
   
       </tr>

        ))}
      {orderData.length===0 && <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1)] border-2'>
        <p className=' p-[30px] font-bold text-[30px] text-blue-400'>No new orders found </p></tr> }
     
      {orderData=== '' && <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1)] border-2'>
      <p className=' p-[30px] font-bold text-[30px] text-blue-400'>Loading data <img className='inline-block' src="./images/spin.gif" alt="" /></p>
      
         </tr>}
     
     </tbody>
   </table>
   </div>
      </div>
      
    <div className="  ml-[100px] shadow-black/20 shadow-lg form  bg-white rounded-[10px] mb-[30px]">


      </div>
      
      </section>
      </>
  )
}

export default Home