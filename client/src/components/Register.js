import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Register = () => {
 
  const navigate = useNavigate();
  
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [err, setErr] = useState('')
  const [error, setError]=useState({
    nameColor:"neutral",
    nameError:"Enter your name",
    namePass:false,
    emailColor:"neutral",
    emailError:"Enter your email here",
    emailPass:false,
    passColor:"neutral",
    passError:"Password should consist of more than 8 characters, atleast one special character and a number is mandatory.",
    passPass:false

})

function handleName(e) { 
  setName(e.target.value)
  if(e.target.value === ''){
    setError({...error, nameError : "Name cannot be blanked", nameColor:"red", namePass:false})  
  }
  else if(e.target.value.length >= 3){
    setError({...error, nameError : "Name should consist more than three letters", nameColor:"green", namePass:true})  
  }
  else{
    setError({...error, nameError : "Name should consist more than three letters", nameColor:"red", namePass:false})
  }
}

function handlePass(e) { 
  setPassword(e.target.value)
  if(e.target.value===''){
      setError({...error, passError : "Password cannot be blanked", passColor:"red", passPass:false})  
  }
  else if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/.test(e.target.value)){
      setError({...error, passError : "Password should be strong", passColor:"green",passPass:true})  
  }
  else{
      setError({...error, passError : "Password should consist of more than 8 characters, atleast one special character and a number is mandatory.", passColor:"red",passPass:false})  

  }  
}
function handleEmail(e) { 
  setEmail(e.target.value)
  if(e.target.value===''){
      setError({...error, emailError : "Email cannot be blanked", emailColor:"red", emailPass:false})  
  }
  else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(e.target.value)){
      setError({...error, emailError : "Email should be valid", emailColor:"green",emailPass:true})  
  }
  else{
      setError({...error, emailError : "Email should be valid", emailColor:"red",emailPass:false})  

  }  
}


      async function registerUser(event) { 
        event.preventDefault()

        const response = await fetch('http://localhost:3002/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            company:"",
            street:"",
            postcode:"",
            location:"",
            phone:null,
            vat:"",
          }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
          navigate('/login')
        }
        else{
setErr('This email is already registered with us!')
        }
      }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-blue-200 to-pink-200 text-[#333] flex justify-center items-center shadow-md shadow-black'>
      <div>
   {err!=='' && <p className='bg-red-100  border-2 border-red-600 shadow-sm rounded text-red py-[8px] px-[10px] mb-[10px]'>{err}</p>   }
       
        <div className='flex'>
          
        <div className="poster py-[40px] px-[30px] bg-blue-500 text-white">
            
        <p className='mb-[30px] font-bold text-[26px]' >Registeration </p>

        <p className='max-w-[340px] font-bold text-[32px] mb-[40px]'>Fill the text fields to register as an admin.</p>
        <p className='mb-[10px]'>Already have an account? </p>
        <span><Link to='/login'><span className=' bg-indigo-50 text-[#333] px-[20px] py-[8px]  font-semibold underline'>Login here</span> </Link> </span>

      
        </div>

        <div className='bg-indigo-50/80 py-[40px] px-[50px] ' >
  <form onSubmit={registerUser}>
   
    
  
      <div className="group mb-[10px]">
        <label htmlFor="name" className='text-[18px] font-semibold block mb-[12px]'>Name</label>
        <input className='w-[90%] border-2 border-indigo-400 text-[14px] p-[6px] mb-[3px] rounded bg-indigo-100 block mb-10px'
         type="text"
          value={name}
					onChange={handleName}
					placeholder="Name"
          required 
          minLength={3} maxLength={30}/>
      {error.nameColor==="neutral" ? <small className='w-[300px] inline-block font-bold neutral text-[grey]'>{error.nameError}</small>:null} 
       {error.nameColor==="red" ? <small className='w-[300px] inline-block font-bold red text-red-500'>{error.nameError}</small>:null} 
       {error.nameColor==="green" ? <small className='w-[300px] inline-block font-bold green text-blue-800'>{error.nameError}</small>:null}


      </div>
  
      <div className="group mb-[10px]">
        <label className='text-[18px] font-semibold block mb-[12px]' htmlFor="email">Email</label>
        <input className='w-[90%] border-2 border-indigo-400 text-[14px] p-[6px] mb-[3px] rounded bg-indigo-100 block mb-10px' 
          type="email"
          value={email}
          onChange={handleEmail}
					placeholder="Email"
         required/>
          {error.emailColor==="neutral" ? <small className='w-[300px] inline-block font-bold neutral text-[grey]'>{error.emailError}</small>:null} 
       {error.emailColor==="red" ? <small className='w-[300px] inline-block font-bold red text-red-500'>{error.emailError}</small>:null} 
       {error.emailColor==="green" ? <small className='w-[300px] inline-block font-bold green text-blue-800'>{error.emailError}</small>:null}
      
      </div> 
  
      <div className="group mb-[10px]">
        <label className='text-[18px] font-semibold block mb-[12px]' htmlFor="name">Password</label>
        <input className='w-[90%] border-2 border-indigo-400 text-[14px] p-[6px] mb-[3px] rounded bg-indigo-100 block mb-10px' 
        type="password" 
        value={password}
        onChange={handlePass}
				placeholder="Password"
        required 
        minLength={8}/>
          {error.passColor==="neutral" ? <small className='w-[300px] inline-block font-bold neutral text-[grey]'>{error.passError}</small>:null} 
       {error.passColor==="red" ? <small className='w-[300px] inline-block font-bold red text-red-500'>{error.passError}</small>:null} 
       {error.passColor==="green" ? <small className='w-[300px] inline-block font-bold green text-blue-800'>{error.passError}</small>:null}
   
      </div>
  
      <button  
      disabled={error.emailPass===false || error.namePass === false || error.passPass === false}
      className=" block w-[90%] mt-[12px] hover:bg-[#357cee] transition-all bg-[#5E94EB] py-1 text-white font-semibold" type='submit'>Register</button>
    </form>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Register