import React from 'react'

const FifthForm = ({formData, setFormData}) => {

const isChecked = (value) => formData.method === value

const handleRadioClick = (e) => setFormData({...formData, method: e.currentTarget.value})

return (
    <div>
         <div className=" form form-main">       
            <li className="list-disc font-semibold text-[#333333]">Method of reaching out</li>
            <small className="block mb-5 text-[#B6B6B6] font-semibold">Elevator or Stairs, in case of stairs floor no. is mandatory</small>
            
           <input className='mb-[6px]' type="radio" name="method" id="elevator"  value="Elevator" checked={isChecked("Elevator")} onChange={handleRadioClick}  />
           <label>Elevator</label><br />
            <input type="radio" name="method" id="stairs" value="Stairs" checked={isChecked("Stairs")} onChange={handleRadioClick}/>
           <label> Stairs</label>
           <div>
           <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] mb-[5px] mt-[20px] text-align text-[14px] py-[6px]' type="number" min={0} max={15} placeholder='Floor no.' onChange={event => setFormData({...formData, floor: event.target.value})}  value={formData.floor} />
            <small className="block mb-5 text-[#B6B6B6] font-semibold"></small>
           </div>

 
        </div>

        <div className="form-group form-main">       
            <li className="list-disc text-[#333333] font-semibold">When's the moving required</li>
            <small className="block mb-5 text-[#B6B6B6] font-semibold">Select the date</small>

            <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] mb-[5px] text-align text-[14px] py-[6px]' type="date" name="date" id="date"  onChange={event => setFormData({...formData, date: event.target.value})} value={formData.date} />
        </div>
       
<div className='mb-[20px]'></div>
        
    </div>
  )
}

export default FifthForm