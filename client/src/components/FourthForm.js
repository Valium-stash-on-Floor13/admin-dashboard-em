const FourthForm = ({formData, setFormData}) => {
 
  return (
    <div>
             
   
        <div className="form-group form-main">       
            <li className="list-disc font-semibold text-[#333333]">Section of the house that needs to be cleared</li>
            <small className="block mb-2 text-[#B6B6B6] font-semibold">This field is mandatory</small>
            <select className="px-[10px] py-[4px] mb-[15px] text-sm" name="section" id="section" onChange={event => setFormData({...formData, section: event.target.value})} value={formData.section} >
                <option className="" selected value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Loft">Loft</option>
                <option value="Basement">Basement</option>
                <option value="Others">Others</option>
            </select> 
           {formData.section === 'Others' ?<><li className="list-disc text-[#333333] font-semibold mb-[6px]">In case of others, mention here</li>
            <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] mb-[20px] text-align text-[14px] py-[6px]' type="text" placeholder='Mention the section' onChange={event => setFormData({...formData, others: event.target.value})} value={formData.others} />
            </>:null }
           

        </div>

       

       
    </div>
  )
}

export default FourthForm