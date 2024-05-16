import { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import { useParams } from 'react-router-dom';
import { Alert } from 'flowbite-react';



export default function UpdatePage() {
const [formData,setFormData]=useState({});
const [alert,setAlert]=useState(null);

const {studentId}=useParams();


 useEffect(()=>{
    const getStudent=async()=>{
      try{
      const res =await axios.get(`http://localhost:4000/api/student/getstudent/${studentId}`);
           setFormData(res.data);
          }
      catch(err){
        console.log(err);
    }
  };
  getStudent(); 
  },[studentId])

  const handleSumbit=async(e)=>{
    e.preventDefault();
    try{
      const res =await axios.put(`http://localhost:4000/api/student/update/${formData.user._id}`,formData);
      if(res){
        setAlert("Student's detail updated sucessfully");
      }
      
      
    }
    catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className="w-full max-w-xs m-28 ">
  <form className="bg-white shadow-md rounded px-20 py-10 w-full" onSubmit={handleSumbit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentname" >
        Student Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name"
      onChange={(e)=>{
        setFormData({
          ...formData,name:e.target.value
        })
      }}
      
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Age
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="age"
       onChange={(e)=>{
        setFormData({
          ...formData,age:e.target.value
        })
      }}
      //value={formData.user.age}
      />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Gender
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="gender"
       onChange={(e)=>{
        setFormData({
          ...formData,gender:e.target.value
        })
      }}
      //value={formData.user.gender}
      />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Address
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="address"
       onChange={(e)=>{
        setFormData({
          ...formData,address:e.target.value
        })
      }}
      //value={formData.user.address}
      />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Phone No
      </label>
      <input className="shadow appearance-none border border-grat-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Tel"
       onChange={(e)=>{
        setFormData({
          ...formData,phoneNumber:e.target.value
        })
      }}
      //value={formData.user.phoneNumber}
      />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Stream
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="stream"
       onChange={(e)=>{
        setFormData({
          ...formData,scheme:e.target.value
        })
      }}
      //value={formData.user.scheme}
      />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Email
      </label>
      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="email"
       onChange={(e)=>{
        setFormData({
          ...formData,email:e.target.value
        })
      }}
      //value={formData.user.email}
      />
      
    </div>
    
   <button className='bg-blue-700 px-2 py-1 rounded-lg text-white font-semibold' >
    Update
   </button>
  </form>
  {alert && (<Alert className='mt-5 bg-green-200 text-gray-700'>
            {alert}
            </Alert>
        )}
  
</div>
  )
}
