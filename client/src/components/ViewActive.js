import {useState, useEffect} from 'react';



const ViewActive = () => {
const [name, setName] = useState('')
const [postcode, setPostcode] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [address, setAddress] = useState('')
const [sliderVal, setSliderVal] = useState()
const [section, setSection] = useState('')
const [method, setMethod] = useState('')
const [date, setDate] = useState('')
const [floor, setFloor] = useState('')
const [city, setCity] = useState('')
const [createdon, setCreatedon] = useState('')
const [description, setDescription] = useState('')
const [cost, setCost] = useState(null)
const [subcontractorper, setSubcontractorper] = useState(null)
const [userper, setUserper] = useState(null)

  useEffect(() => {
    
    fetch(`http://localhost:3002/api/viewactive?id=${localStorage.getItem('viewActive_id')}`)
    .then(response => response.json())
    .then((data) =>{
      
        setName(data.name)
        setEmail(data.email)
        setPhone(data.contact)
        setPostcode(data.postcode)
        setSliderVal(data.sliderVal)
        setSection(data.section)
        setMethod(data.method)
        setFloor(data.floor)
        setDate(data.date)
        setCreatedon(data.createdon)
        setCity(data.city)
        setSubcontractorper(data.subper)
        setUserper(data.userper)
        setDescription(data.description)
        setAddress(data.address) 
        setCost(data.cost) 
      
   
    })
    .catch((error)=> console.log(error))
  },[])
  
  return (
    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">

    <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Order Info</h2>
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
   <label className='text-[#33333] font-bold ' >City : </label>
    <span>{city}</span>
   </div>
   <hr />
 
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Address : </label>
    <span>{address}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Area : </label>
    <span>{sliderVal}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Section : </label>
    <span>{section}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Method : </label>
    <span>{method}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Floor : </label>
    <span>{floor}</span>
   </div>
   <hr />
  
 
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Order Created on : </label>
    <span>{createdon}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Date of Moving : </label>
    <span>{date}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Cost : </label>
    <span>{cost} Є</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Advance Percent(User) : </label>
    <span>{userper}</span>
   </div>
   <hr />
   <div className='px-[20px] py-[10px]'>
   <label className='text-[#33333] font-bold ' >Advance Percent(Subcontractor) : </label>
    <span>{subcontractorper}</span>
   </div>
   <hr />
   </div>
</section>
  )
}

export default ViewActive

