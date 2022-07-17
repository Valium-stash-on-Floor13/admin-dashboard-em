import React , { useState } from 'react'

const FirstForm = ( ) => {
    const [formData, setFormData] = useState({
        showone: false,
        showtwo: false,
        showthree: false,
        value: '',
        one: '',
        two: '',
        three: '',
        sliderVal: 50,
        name: '',
        email: '',
        contact:'',
        address: '',
        section:'',
        sectionOthers: '',
        method:'',
        floorNo: '',
        dateOfMoving: '',
        postode: '',
        city:'',
        description:''
    });
    console.log(formData.showone )
    console.log(formData.showtwo )
    console.log(formData.showthree )
    console.log(formData.showone )

    console.log(formData.one )
    console.log(formData.two )
    console.log(formData.three )

    

    

 function handleVolumeOne(){
     
   
    setFormData({...formData, showtwo:false})
    setFormData({...formData, showthree:false})
    if(formData.showone === false){
    setFormData({...formData, showone:true})
    }
    else{
        setFormData({...formData, showone:false})
    }


    if(formData.value === ''){
        setFormData({...formData, value:'Low'})
    }
    else{
        setFormData({...formData, value:''})
    }
  }
 function handleVolumeTwo(){
    
    setFormData({...formData, showone:false})
    setFormData({...formData, showthree:false})
    if(formData.showtwo === false){
        setFormData({...formData, showtwo:true})
        }
        else{
            setFormData({...formData, showtwo:false})
        }
   
    if(formData.value === ''){
        setFormData({...formData, value:'Average'})
    }
    else{
        setFormData({...formData, value:''})
    }
  }
 function handleVolumeThree(){
    
    setFormData({...formData, showone:false})
    setFormData({...formData, showtwo:false})
    if(formData.showthree === false){
        setFormData({...formData, showthree:true})
        }
        else{
            setFormData({...formData, showthree:false})
        }
    
    if(formData.value === ''){
        setFormData({...formData, value:'High'})
    }
    else{
        setFormData({...formData, value:''})
    }
  }

const convertToBase64 = e => {
    
    const file =e.target.files;
    const length =file.length;

    if(length ===  3){
        const readerone = new FileReader();
        const readertwo= new FileReader();
        const readerthree = new FileReader();

        readerone.onloadend = () =>{ 
            setFormData({...formData, one:readerone.result.toString()})
            
        }
        readertwo.onloadend = () =>{
            setFormData({...formData, two:readertwo.result.toString()})

        }
        readerthree.onloadend = () =>{
            setFormData({...formData, three:readerthree.result.toString()})
          
        }

        readerone.readAsDataURL(file[0]);
        readertwo.readAsDataURL(file[1]);
        readerthree.readAsDataURL(file[2]);
     
    }
    else if( length === 2){
        const readerone = new FileReader();
        const readertwo= new FileReader();

        readerone.onloadend = () =>{
            setFormData({...formData, one:readerone.result.toString()})
        }
        readertwo.onloadend = () =>{
            setFormData({...formData, two:readertwo.result.toString()})
        }
        readerone.readAsDataURL(file[0]);
        readertwo.readAsDataURL(file[1]);
     
    }
    else if( length === 1){
        const readerone = new FileReader();

        readerone.onloadend = () =>{
            setFormData({...formData, one:readerone.result.toString()})
        }
        readerone.readAsDataURL(file[0]);
    }
}


  return (
  <>

  <img src={formData.one} alt="" />
  <img src={formData.two} alt="" />
  <img src={formData.three} alt="" />
  {console.log(formData.value)}
<li className="list-disc font-semibold text-[#333333]"> Select the volume that needs to be cleared out</li>
    <small className="block mb-5 text-[#B6B6B6] font-semibold">Pick a rough estimate, our employees will assist you further</small>

    <div className=" boxes mb-3  flex justify-around">
        <div>
            <div onClick={()=>handleVolumeOne()} className="relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
                { formData.showone? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}
                <span className=" block bg-[#FFAD00] w-[100%] h-[30px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">Low</small>
        </div>
        <div>
            <div onClick={()=>handleVolumeTwo()} className=" relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
    { formData.showtwo? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}

    <span className=" block bg-[#FFAD00] w-[100%] h-[50px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">Average</small>
        </div>

        <div>
            <div onClick={()=>handleVolumeThree()} className=" relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
        { formData.showthree? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}

            <span className=" block bg-[#FFAD00] w-[100%] h-[80px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">High</small>
        </div>
    </div>

    <li className="list-disc text-[#333333] font-semibold">Upload some pictures of your place</li>
    <small className="block mb-5 text-[#B6B6B6] font-semibold">You can upload  three images of your place at maximum</small>
    <div className="box relative mb-2">
        <input className=" filehide" type="file" name="files" multiple id="file" onChange={e=> convertToBase64(e)} accept="image/*"/>
        <label  className="bg-[#FFAD00]/90 h-[80px] w-[100%] font-semibold text-lg px-[25px] rounded-lg border-2 border-solid border-black/20 text-white mb-[10px] t-0 b-0 l-0 r-0 flex justify-center items-center" htmlFor="file">Drag your images here or click to upload</label>
    </div>
  </>
  )
}

export default FirstForm

