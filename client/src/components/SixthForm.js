import React from 'react'

const SixthForm = ({formData, setFormData}) => {
  return (
    <div>
         <div className="form-group form-main">       
            <li className="list-disc text-[#333333] font-semibold">Postcode</li>
            <small className="block mb-5 text-[#B6B6B6] font-semibold"  >Enter the postcode</small>

            <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] mb-[5px] text-align text-[14px] py-[6px]' type="number" name="postcode" onChange={event => setFormData({...formData, postcode: event.target.value})} value={formData.postcode}/>
        </div>

        <div className="form-group form-main">       
            <li className="list-disc text-[#333333] font-semibold">City</li>
            <small className="block mb-5 text-[#B6B6B6] font-semibold">Enter your city name</small>
            <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] mb-[5px] text-align text-[14px] py-[6px]' type="text" name="city" onChange={event => setFormData({...formData, city: event.target.value})} value={formData.city}/>
        </div>

        <div className="form-group form-main">       
            <li className="list-disc text-[#333333] font-semibold">Additional Description</li>
            <small className="block mb-5 text-[#B6B6B6] font-semibold">Add a side note</small>
            <textarea className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] mb-[5px] text-align text-[14px] py-[6px] focus:none' name="description" id="desc" cols="" rows="4" onChange={event => setFormData({...formData, description: event.target.value})} value={formData.description}></textarea>
        </div>
    </div>
  )
}

export default SixthForm