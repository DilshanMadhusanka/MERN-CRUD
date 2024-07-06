import React, { useState } from "react";
import axios from "axios";


function AddStudent() {

    const [name ,setName]= useState(" ");
    const [age ,setAge]= useState(" ");
    const [gender ,setGender]= useState(" ");



    // data tika enter kral submit krama data tika backen ekat yann function ek hadnn oni 
    function sendData(e){
        e.preventDefault();
        

        // data tika pass krann object ekak hadanwa 
        const newStudent= {
            name,
            age,
            gender
        }

        // object eka print kra ganna. meka oni nam witharak ganna 
       // console.log(newStudent)

       // backend ekat data pass kranne axios haraha.
       // mekata parameter 3k pass krann oni. backend url , methana hadagththa object ekata , authentication thiynwa nam ekai 
       // methandi athuntication use krn nathi nis parameter dekai passe kranne 

       axios.post("http://localhost:8070/student/add", newStudent).then (()=>{
        alert("Student Added")
        // add unata passe input field tika empty krann oni. naththam kalin add krapu data eka input field wala thiyanwa
       // setAge(" ");
       // setGender(" ");
       // setName(" ");
       
       }).catch((err)=>{
        alert(err)
       })
    }  
    
  return (
    <div>
      <form className="max-w-sm mx-auto"   onSubmit={sendData}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Student Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter your name "
            required

            onChange={(e)=>{
                setName(e.target.value);  // state eka chnage wena welawata, setName kiyana setter eka haraha e value eka name kiyana variable ekata assign kranna
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Student Age
          </label>
          <input
            type="text"
            id="age"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter your age "
            required

            onChange={(e)=>{
                setAge(e.target.value)
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gender
          </label>
          <input
            type="text"
            id="gender"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Gender "
            required

            onChange={(e)=>{
                setGender(e.target.value)
            }}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
