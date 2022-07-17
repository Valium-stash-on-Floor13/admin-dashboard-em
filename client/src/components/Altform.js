 import React, {useState} from 'react'


import FourthForm from "./FourthForm.js"
import FifthForm from "./FifthForm.js"
import SixthForm from './SixthForm'
import Welcome from './Welcome.js'

function Form() {
  
  const [page, setPage] = useState(3);
  const [formData, setFormData] = useState({
      showone: false,
      showtwo: false,
      showthree: false,
      images:[],
      len:null,
      value: '',
      one: '',
      two: '',
      three: '',
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
      orderstatus:'incomplete',
      stage:0,
      cost:null
  });   


    async function handleSubmit(event) { 
        event.preventDefault()
    }

    async function handleInfo(event) { 
        const next_id = localStorage.getItem('next_id');

        const response = await fetch("http://localhost:3002/api/complete", {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({

            id:next_id,
            section : formData.section,
            others : formData.others,
            method : formData.method,
            floor : formData.floor,
            date : formData.date,
            postcode : formData.postcode,
            city : formData.city,
            description : formData.description,
            orderstatus:"complete",

          }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
          console.log(data)
          setPage(page+1)

        }
      }

    const FormTitles = ["First Form", "Second Form", "ThirdForm","FourthForm", "FifthForm","SixthForm", "Welcome"];

  return (
        <>
        <form  onSubmit={handleSubmit}>
        
        {page <=5 &&   <p className="borderradiusformtop inline-block text-white font-semibold px-4 py-4 bg-[#FFAD00] w-[100%] ">Complete these steps and leave the rest on us!</p> }
        {page === 6 &&   <p className="borderradiusformtop inline-block text-white font-semibold px-4 py-4 bg-[#64e003] w-[100%] ">Congratulations! You have completed all the steps</p> }

         
            <div className="inside px-[30px] py-[20px]">
               
            {page <=5 &&   <p className="text-center  text-sm mb-2 text-[#4A4A4A]">Step {page +1 } of {FormTitles.length -1}</p> }
          
            {page <=5 &&  <div className="bar mb-3 bg-[#E4E4E4] relative rounded-lg h-[6px]">
                    <span style={{width: page === 3 ? "66.6%": page === 4 ? "83.3%": "100%"}}
                    className="absolute z-1 bg-[#61CEFB] rounded-lg h-[6px] l-0 t-0 b-0"></span>
                </div>}
              
               {page === 3 && <FourthForm formData={formData} setFormData={setFormData}/>}
               {page === 4 && <FifthForm formData={formData} setFormData={setFormData}/>}
               {page === 5 && <SixthForm formData={formData} setFormData={setFormData}/>}
               {page === 6 && <Welcome/>}
             
           
                <div className='flex justify-around items-center'>
               
               {page <6? <button  
                    disabled={page === 3 || page === 6}
                    onClick={()=> {
                        setPage((currPage)=>currPage-1);
                    }}
                    className="block w-[100%] bg-[#5E94EB] py-1 text-white font-semibold mx-1">
                    Prev
                </button>:null}
                {page <5? <button 
                    
                    disabled={page === FormTitles.length -1 || (page=== 0 && formData.value==='' ) || (page=== 1 && formData.sliderVal===0  ) || (page=== 2 && formData.name==='' ) || (page=== 2 && formData.address==='' ) || (page=== 2 && formData.email==='') || (page=== 2 && formData.contact===null ) || (page=== 3 && formData.section==='' ) || (page=== 4 && formData.method==='' ) || (page=== 4 && formData.floor===null ) || (page=== 4 && formData.date===null )}

                    onClick={()=> {
                        setPage((currPage)=>currPage+1);
                    }}
                   
                    className=" block w-[100%] mx-1 bg-[#5E94EB] py-1 text-white font-semibold">
                    Next
                </button>:null}
                
                {page===5? <button 
                 type="submit"
                 disabled ={  (page===5  && formData.city==='' ) ||  (page===5  && formData.postcode==='' )}
                    onClick={handleInfo}
                   
                    className=" block w-[100%] mx-1 bg-[#5E94EB] py-1 text-white font-semibold">
                    Submit
                </button>:null}
                </div>
            </div>
          
        </form>
       
    </>
  )
}

export default Form



