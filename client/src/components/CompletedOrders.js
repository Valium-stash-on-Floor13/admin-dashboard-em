import React, {useState, useEffect} from 'react'

const CompletedOrders = () => {

  const [orderData, setOrderData] = useState('')
  const [push, setPush] = useState(false)
  const [load, setLoad] = useState(false)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(1)
  const [skip, setSkip] =useState(0)


  useEffect(() => {
    fetch(`http://localhost:3002/api/completed?search=${search}&sort=${sort}&skip=${skip}`)
    .then(response => response.json())
    .then((data) => setOrderData(data))
  },[ load, push, search, sort, skip])

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
      
    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">

    <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Completed Orders</h2>
    
        <div className="table w-[900px] overflow-auto-x  ml-[100px] shadow-black/20 shadow-lg form  bg-white rounded-[10px]">


         
<div className=' w-[100%] bg-indigo-500  mb-[20px] px-[20px] py-[6px] '>  
<input type="text" className='mr-[40px] w-[350px] px-[20px] py-[6px] rounded' placeholder="Search by location or customer name" value={search} onChange={(event) =>setSearch(event.target.value)}/>

<span className='pl-[100px] mr-[20px] text-white font-semibold'>Sort by </span> 
<select className='bg-white text-indigo-700 font-bold px-[8px] py-[4px] rounded' name="" id="" onChange={sortOrder}>
<option value="-1" selected>Newest</option>
<option value="1" >Oldest</option>
</select>
</div>

   
   <table className='table w-[100%] overflow-scroll-x'>
     <tr className='text-left w-[100%] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 text-white' >
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Customer Name</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Order Id</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'> Total Revenue (Є)</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Customer (Є)</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Subcontractor (Є)</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Email</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Phone</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Sucontractor Name</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Date of Completion</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Delete</th>
   

   
     </tr>
     <tbody>
      {orderData!== '' &&
        orderData.map((order)=>(
          
           <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1) border-2'>
       
         
            <td className='font-semibold w-[200px] px-[20px] py-[5px]'>{order.name}</td>
           
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order._id}</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order.costone + order.costtwo} Є</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order.costone} Є</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>    {order.costtwo} Є</td>
          
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>{order.email}</td> 
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>{order.contact}</td>
          <td className='font-semibold w-[100%] px-[20px] py-[5px]'>{order.subcontractor}</td>

        
      

        
          {order.orderstatus==='complete'? <td className='font-semibold w-[100%] px-[20px] py-[5px]'>{
       new Date(order.date).getDate()+"/" + (new Date(order.date).getMonth() + 1) + "/" + new Date(order.date).getFullYear()
       }</td>:
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'></td>}
       
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='hover:bg-red-600 bg-red-500 text-white rounded px-[15px] py-[5px] font-medium' onClick ={(() => onDelete(order._id))}> Delete</button></td>

   
       </tr>

        ))}
      {orderData.length===0 && <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1)] border-2'>
        <p className=' p-[30px] font-bold text-[30px] text-blue-400'>No completed orders found </p></tr> }
     
      {orderData=== '' && <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1)] border-2'>
      <p className=' p-[30px] font-bold text-[30px] text-blue-400'>Loading data <img className='inline-block' src="./images/spin.gif" alt="" /></p>
      
         </tr>}
     
     </tbody>
     </table>
      </div>
      </section>
  )
}

export default CompletedOrders