import React, { useState, useEffect } from 'react'
import UserData from './UserData';

function CreateAccount() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
    password: ""

  })

  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem("user");
    return storedUserData ? JSON.parse(storedUserData) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = [...userData, formData];
    setUserData(updatedUserData);
    setFormData({
      email: "",
      name: "",
      role: "",
      password: "",
    });
    alert("Form submitted successfully");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col p-6 text-center items-center gap-4'>
          <input onChange={handleChange} className=' bg-[#D9D9D9] p-2 w-64 rounded-lg' type="email" placeholder='Enter Email' name='email' />
          <input onChange={handleChange} className=' bg-[#D9D9D9] p-2 w-64 rounded-lg' type="text" placeholder='Enter Name' name='name' />
          <input onChange={handleChange} className=' bg-[#D9D9D9] p-2 w-64 rounded-lg' type="text" placeholder='Enter Role' name='role' />
          <input onChange={handleChange} className=' bg-[#D9D9D9] p-2 w-64 rounded-lg' type="password" placeholder='Enter Password' name='password' />
          <div className=''>
            <button className='border-2 rounded-lg p-2 w-32 text-black bg-[#22F3E3] font-bold'>Submit</button>
          </div>
        </div>
      </form>
      <UserData userData={userData} setUserData={setUserData} />
    </div>
  )
}

export default CreateAccount