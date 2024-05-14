import React, { useState } from 'react';
import axios from 'axios';



export default function CreatePage() {
  const[formData,setFormData]=useState({});

  const handleSumbit= async(e)=>{
        e.preventDefault();
        
      try{
        const res=await axios.post('http://localhost:4000/api/student/add',formData);
        alert("student added");
       
        setFormData(null);
      }
      catch(error){
        alert(error);
      }
      
        }
       

  return (
    <div className="w-full max-w-xs m-28 ">
  <form className="bg-white shadow-md rounded px-20 py-10 w-full">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="studentname" >
        Student Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name"
      onChange={(e)=>{
        setFormData({
          ...formData,name:e.target.value
        })
      }}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Age
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="age"
       onChange={(e)=>{
        setFormData({
          ...formData,age:e.target.value
        })
      }}/>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Gender
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="gender"
       onChange={(e)=>{
        setFormData({
          ...formData,gender:e.target.value
        })
      }}/>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Address
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="address"
       onChange={(e)=>{
        setFormData({
          ...formData,address:e.target.value
        })
      }}/>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Phone No
      </label>
      <input className="shadow appearance-none border border-grat-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Tel"
       onChange={(e)=>{
        setFormData({
          ...formData,phoneNumber:e.target.value
        })
      }}/>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Stream
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="stream"
       onChange={(e)=>{
        setFormData({
          ...formData,scheme:e.target.value
        })
      }}/>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="email"
       onChange={(e)=>{
        setFormData({
          ...formData,email:e.target.value
        })
      }}/>
      
    </div>
    
   <button className='bg-blue-700 px-2 py-1 rounded-lg text-white font-semibold' onClick={handleSumbit}>
    Submit
   </button>
  </form>
  
  
</div>
  )
}