import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage(){
  const handleSubmit = (event) =>{
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return(
    <div className=' flex bg-green-100'>
    <div className='container ' style={{ maxWidth: '400px', margin: '50px auto', backgroundColor: '#FFF', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center">
                    <div className="border rounded-full w-[110px] h-[110px] border-black"></div>
                </div>
        <h2 style={{marginBottom:'21px' , textAlign:'left' }} className="text-bold"></h2>
        <h3 className="flex items-center justify-center font-extrabold text-black text-center ">
       WELCOME TO FARMERS DIRECT
      </h3>
        
        <br/>
        <div className="input-group" style={{ marginBottom: '15px' }}>

                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px'  }}><span className=' font-bold'>Email</span></label>
                    <input className="bg-gray-200" type="email" id="email" name="Email" placeholder=" Email or Phone " style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
                </div>
                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}><span className=' font-bold'>Password</span></label>
                    <input className="bg-gray-200" type="password" id="password" name="Password" placeholder="Password" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
                </div>
                <br/> 
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0a0a0a', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>LOGIN</button>    
      </form>
      
      <div className="flex justify-end text-black" style={{ backgroundColor: 'transparent', marginTop: '10px' }}>
  <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'black' }}>
    Forgot password?
  </button>
</div>
 <br/>     
      <div>
      <div className=" text-black">Don't have an account?
  <span ><Link to="/SignUp" className="cursor-pointer text-orange-500 font- " >Register</Link>  </span>
</div>
  </div>
  <br/>
  <br/>

  </div>
  </div>

    
  )
}
