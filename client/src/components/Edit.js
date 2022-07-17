import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const moment = require('moment');

const Edit = () => {


  const [cost, setCost] =useState(null)
  const [userper, setUserper] =useState(30)
  const [subper, setSubper] =useState(10)
  const [page, setPage] =useState(1)
  const [formData, setFormData] = useState({
    value: '',
    sliderVal: 50,
    name: '',
    email: '',
    contact:'',
    address: '',
    section:'Kitchen',
    others:'',
    method:'Elevator',
    date:null,
    floor:null,
    postcode:'',
    city:'',
    description:'',
    orderstatus:'incomplete'
});   
const navigate = useNavigate()
const id=localStorage.getItem('edit_id')
 
  useEffect(() => {
    
    fetch(`http://localhost:3002/api/edit?id=${localStorage.getItem('edit_id')}`)
    .then(response => response.json())
    .then((data) =>{
      setFormData({...formData, 
        value: data.value,
        sliderVal: data.sliderVal,
        name: data.name,
        email:data.email,
        contact:data.contact,
        address: data.address,
        section:data.section,
        others:data.others,
        method:data.method,
        date:data.date,
        floor:data.floor,
        postcode:data.postcode,
        city:data.city,
        description:data.description
       })
       if(formData.date){
        var DateObj = new Date(formData.date).toString();
        let selectDate=(moment(DateObj).format('YYYY-MM-DD'))
        console.log(selectDate)
      
        
    setFormData({...formData, date: DateObj})
  }
    })
    .catch((error)=> console.log(error))
  },[])

  

  async function handleSubmit(event) { 
    event.preventDefault()
}
async function handleCost(event) { 
  const response = await fetch("http://localhost:3002/api/cost", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id:id,
      cost:cost,
      userper:userper,
      subper:subper,
      email:formData.email
    }),
  })

  const data = await response.json()

  if (data.status === 'ok') {
    navigate('/activeorders')
    

  }
}

async function handleInfo(event) { 
    const response = await fetch("http://localhost:3002/api/updateorder", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:id,
        value : formData.value,
        sliderVal : formData.sliderVal,
        name : formData.name,
        email : formData.email,
        contact : formData.contact,
        address : formData.address,
        section : formData.section,
        others : formData.others,
        method : formData.method,
        floor : formData.floor,
        date : formData.date,
        postcode : formData.postcode,
        city : formData.city,
        description : formData.description,
        orderstatus:"complete",
        stage:0,
        cost:null
      }),
    })

    const data = await response.json()

    if (data.status === 'ok') {
      setPage(page+1)

    }
  }
 
  
  
  return (
    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">

    <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>View or Edit Orders</h2>
  
    <div className='bg-indigo-200 w-[90%] h-[100%] p-[25px] shadow-md m-[30px]  '>
    <form  onSubmit={handleSubmit}>
  <div >
 
    <div className="side-1">
      <div class="parallel flex justify-around items-center mb-[30px]">
      <div className="form-box mb-[10px] flex">
        <input className='bg-white px-[10px] w-[220px] py-[5px]' type="text" placeholder ="Name" onChange={event => setFormData({...formData, name: event.target.value})} value={formData.name} /><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Name</label>
      </div>
      <div className="form-box mb-[10px] flex">
        <input className='bg-white px-[10px] w-[220px]  py-[5px]' type="email" placeholder ="Email" onChange={event => setFormData({...formData, email: event.target.value})} value={formData.email} /><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Email</label>
      </div>

      <div className="form-box mb-[10px] flex">
        <input className='bg-white px-[10px] w-[220px]  py-[5px]' type="text" placeholder ="Phone" onChange={event => setFormData({...formData, contact: event.target.value})} value={formData.contact} /><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Phone</label>
      </div>
      </div>

      <div class="parallel flex justify-around items-center mb-[30px]">
      <div className="form-box mb-[10px] flex">
      <select className="bg-white px-[10px] w-[220px] py-[5px]" required name="value" defaultValue={formData.value}  onChange={event => setFormData({...formData, value: event.target.value})} >
                <option  value="Low">Low</option>
                <option value="Average">Average</option>
                <option value="High">High</option>
            </select> 
<label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Volume</label>
      </div>
      <div className="form-box mb-[10px] flex">
        <input className='bg-white px-[10px] w-[220px]  py-[5px]' type="text" placeholder ="Area (m. sq.)" onChange={event => setFormData({...formData, sliderVal: event.target.value})} value={formData.sliderVal} /><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Area</label>
      </div>

      <div className="form-box mb-[10px] flex">
      <select className="bg-white px-[10px] w-[220px] py-[5px]" required name="section" defaultValue={formData.section}  value={formData.section} onChange={event => setFormData({...formData, section: event.target.value})}  >
                <option  value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Loft">Loft</option>
                <option value="Basement">Basement</option>
                <option value="Others">Others</option>
            </select> 
            <label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Section</label>
      </div>
      </div>

      <div class="parallel flex justify-around items-center mb-[30px]">
      <div className="form-box mb-[10px] flex">
      <select className="bg-white px-[10px] w-[220px] py-[5px]" name="path" required  defaultValue={formData.method} value={formData.method} onChange={(event) => setFormData({...formData, method: event.target.value})}  >
                <option  value="Elevator">Elevator</option>
                <option value="Stairs">Stairs</option>

            </select> 
 <label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Method</label>
      </div>
      <div className="form-box mb-[10px] flex">
        <input className='bg-white px-[10px] w-[220px] py-[5px]' type="text" placeholder ="Floor no." onChange={event => setFormData({...formData, floor: event.target.value})} value={formData.floor}/><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Floor</label>
      </div>

      <div className="form-box mb-[10px] flex">
  <input className='bg-white px-[10px] w-[220px] py-[5px]'  type="date" defaultValue={formData.date}  onChange={event => setFormData({...formData, date: event.target.value})} value={formData.date}/><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Date</label>
      </div>
      </div>
    {/* {       new Date(order.date).getDate()+"/" + (new Date(order.date).getMonth() + 1) + "/" + new Date(order.date).getFullYear()
} */}
      <div class="parallel flex justify-around items-start mb-[30px]">
      <div className="form-box mb-[10px] flex flex-col">
      <textarea className='bg-white px-[10px]  py-[5px]' name="address" type="text" id="" cols="25" rows="3" onChange={event => setFormData({...formData, address: event.target.value})} value={formData.address}></textarea>
      <label  className='px-[10px]  py-[5px] text-white bg-blue-700' > Address</label>
      </div>


      <div >
        <div className="form-box w-[100%]  mb-[30px] flex">
          <input className='bg-white px-[10px]  py-[5px]' type="text" placeholder ="Post Code" onChange={event => setFormData({...formData, postcode: event.target.value})} value={formData.postcode}/><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Postcode</label>
        </div>

        <div className="form-box w-[100%] mb-[10px] flex">
          <input className=' bg-white px-[10px]  py-[5px]' type="text" placeholder ="City" onChange={event => setFormData({...formData, city: event.target.value})} value={formData.city}/><label  className='px-[10px]  py-[5px] text-white bg-blue-700'>City</label>
        </div>
      </div>
      
  
      <div className="form-box mb-[10px] flex flex-col">
      <textarea className='bg-white px-[10px]  py-[5px]' name="" id="" cols="25" rows="3" onChange={event => setFormData({...formData, description: event.target.value})} value={formData.description}></textarea>
      <label  className='px-[10px]  py-[5px] text-white bg-blue-700'>Description</label>

      </div>

     
      </div>
    </div>
    {(formData.value==='' ||
      formData.sliderVal===null ||
      formData.sliderVal==='' ||
      formData.name==='' ||
      formData.email==='' ||
      formData.contact==='' ||
      formData.address==='' ||
 

      formData.date===null ||
      formData.date==='' ||
      formData.floor===null ||
      formData.floor==='' ||
      formData.postcode==='' ||
      formData.city===''
     )? 
      <button onClick={handleInfo} disabled className='px-[20px]  py-[6px] font-semibold text-[20px] text-white bg-orange-400'>Update</button>
 
    :
    <button onClick={handleInfo} className='px-[20px]  py-[6px] font-semibold text-[20px] text-white hover:bg-orange-600 bg-orange-400'>Update</button>
  }

  </div>
</form>
{page===2 && <p className='mt-[20px]  text-white bg-green-600 px-[30px] py-[6px] text-[18px]'> Order has been updated!</p>}
    </div>

  
 

    <div className='bg-indigo-200 w-[90%] h-[100%] p-[25px] shadow-md m-[30px]  '>
    <h3 className='font-bold text-[#0e0e2b] text-[24px] mb-[30px] ml-[30px]'>Send a quote</h3>




    <div class="parallel  justify-around items-center mb-[30px]">
      <form onSubmit={(e)=>{e.preventDefault()}}>
      <div className="form-box mb-[10px] flex">
     <input className='bg-white px-[10px]  py-[5px]' type="number" min={30} required placeholder ="Cost" 
     onChange={event => setCost(event.target.value)} value={cost} />
      <label  className='w-[280px] px-[10px]  py-[5px] text-white bg-blue-700'>Cost Є</label>
      </div>
      <div className="form-box mb-[10px] flex">
     
      <select className="bg-white px-[10px] w-[220px] py-[5px]" required name="userper" defaultValue={userper} onChange={event => setUserper(event.target.value)} >
                <option  value="20">20 %</option>
                <option value="25">25 %</option>
                <option value="30" >30 %</option>
                <option value="35">35 %</option>
            </select>
    <label  className='w-[280px] px-[10px]  py-[5px] text-white bg-blue-700'>Advance Cost % (User)</label>
      </div>

      <div className="form-box mb-[10px] flex">

      <select className="bg-white px-[10px] w-[220px] py-[5px]" required name="subper" defaultValue={subper} onChange={event => setSubper(event.target.value)} >
                <option  value="10" >10 %</option>
                <option value="15">15 %</option>
                <option value="20" >20 %</option>
   
            </select>    <label  className='w-[280px] px-[10px]  py-[5px] text-white bg-blue-700'>Advance Cost % (Subcontractor)</label>
       </div>
       </form>
      </div>
      {(cost<1 || formData.city==='') ?  <button disabled onClick ={handleCost} className='px-[30px] mr-[30px] py-[6px] font-semibold text-[20px] text-white bg-green-500 '>Send</button>
      :
      <button  onClick ={handleCost} className='px-[30px] mr-[30px] py-[6px] font-semibold text-[20px] text-white bg-green-500 hover:bg-green-700'>Send</button>}
    </div>
        
    </section>
  )
}

export default Edit

