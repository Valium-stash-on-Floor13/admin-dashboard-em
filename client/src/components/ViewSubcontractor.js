import React, {useState, useEffect} from 'react';



const ViewSubcontractor = () => {
const [name, setName] = useState('')
const [loc, setLoc] = useState('')
const [postcode, setPostcode] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [address, setAddress] = useState('')
const [vatId, setVatId] = useState('')
const [vatFile, setVatFile] = useState('')


 
 
  useEffect(() => {
    
    fetch(`http://localhost:3002/api/viewsubdata?id=${localStorage.getItem('viewSub_id')}`)
    .then(response => response.json())
    .then((data) =>{
      
        setName(data.name)
        setPostcode(data.postcode)
        setEmail(data.email)
        setPhone(data.phone)
        setLoc(data.location)
        setAddress(data.street)
        setVatId(data.vat)
   
    })
    .catch((error)=> console.log(error))
  },[])

 


  return (
    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">

    <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Subcontractor Info</h2>
    <div className='bg-indigo-200 w-[90%] h-[100%] p-[25px] shadow-md m-[30px]  '>
   <div className='px-[20px] py-[10px]'>
    <label className='text-[#33333] font-bold ' htmlFor="">Name : </label>
    <span className=''>{name}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Phone : </label>
    <span>{phone}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Email : </label>
    <span>{email}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Postal Code : </label>
    <span>{postcode}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Loction : </label>
    <span>{loc}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >VAT ID : </label>
    <span>{vatId}</span>
   </div>
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Address : </label>
    <span>{address}</span>
   </div>
   <hr />
   </div>
</section>
  )
}

export default ViewSubcontractor

