import React from 'react';
import { Link } from 'react-router-dom';

let user= "";
const Home = () => {
   const setLocalUser = (e) =>{
      user = document.getElementById(`NameTag`).value;
      document.getElementById(`NameTag`).value = "";
      if(!user) e.preventDefault();
   }

  return (
    <div className='m-auto h-100'>
      <div className='h-100 d-flex flex-column gap-1 align-items-center justify-content-center'>
         <div className='display-2'>
            {/* icon / Logo */}
            Vanish Chat
         </div>
         <div>
            <input type="text" placeholder='Enter Your Name'
                   id='NameTag'
                   className='fs-6' 
                   style={{height:"5vh"}}/>
            <Link className='mx-auto btn btn-success mb-1' to={`chat`}
                  onClick={(e)=>setLocalUser(e)}>
               Chat
            </Link>
         </div>
         <div className='mt-2 lead fw-normal text-warning'>
            <dt className='text-center fs-4'>a OneTime Chat App</dt>
            <dd>We Dont store Your Messages</dd>
         </div>
      </div>
    </div>
  )
}

export default Home
export {user};