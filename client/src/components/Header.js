import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [lang, setLang] = useState('de');
  const setLingo = (event) => {
    setLang(event.target.value)
   }


  return (
<section className='fixed z-auto top-0 w-[calc(100vw-300px)] right-0 bg-[white] py-[15px] px-[20px] flex justify-end shadow-sm shadow-black/20'>
<span className=" border-2 text-white bg-indigo-500  px-[4px] py-[3px]"> 
    {lang==='en'? <img className="inline-block w-[20px]" src="./images/en.png" alt="" />:<img className="inline-block w-[20px]"  src="./images/de.png" alt="" />}
 <select className="bg-indigo-500 text-white font-semibold px-[4px] py-[3px] mb-[15px] text-sm" name="section" id="section" onChange={event => setLingo(event)} value={lang} >
                   <option className="w-[100%] px-[2px]" value="de" ><img src="./images/de.png" alt="" /> de</option>
                  <option  value="en"><img src="./images/en.png" alt="" /> en</option>
               
     
                 
                  
  </select> </span>
<button className='bg-gradient-to-r from-[#6FA6FF] to-indigo-500 py-[3px] px-[20px] ml-[45px] mr-[75px] text-white rounded-md shadow-sm shadow-black/50 font-semibold' ><Link to="/login">

  <img className='inline-block h-[14px] pr-2' src="./images/ t-white.png" alt="" /><span className='transition-all'>Logout</span>
  </Link></button>
</section>
  )
}

export default Header

