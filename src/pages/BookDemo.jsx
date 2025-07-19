import React from 'react'
import NavBar from '../additional/navbar';
import logo45 from '../assets/pic45.png';
import logo46 from '../assets/pic46.png';
import logo47 from '../assets/pic47.png';
import BottomBar from '../additional/BottomBar';
function BookDemo() {
  return (
    <>
    <NavBar/>
     <div className="w-full bg-[#0A192C] px-4 md:px-16 py-12">
      
      <h2 className="text-white text-center text-2xl md:text-4xl font-bold mb-3">
        Concept Booster Camp
      </h2>
      <p className="text-white text-center text-base md:text-lg mb-8">
        Get One Week Free Trial Class and Surpass your Peers with our Courses
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-white mb-10 text-sm md:text-base max-w-5xl mx-auto">
        <p>✅ Live Interactive Classes With Top Teachers</p>
        <p>✅ Personalised 1:1 lessons with Mentors</p>
        <p>✅ Access to Study Material</p>
        <p>✅ Complimentary Test Series</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <button className="border border-white text-white px-6 py-2 text-sm md:text-base hover:bg-white hover:text-[#0A192C] transition">
          TOP EDGE SKILLS
        </button>
        <button className="bg-[#5DE86D] text-[#0A192C] px-6 py-2 text-sm md:text-base hover:bg-green-500 transition">
          SCHOOL SUBJECTS
        </button>
      </div>

     
      <div className="bg-white rounded-md shadow-md max-w-4xl mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Enter Email*</label>
            <input
              type="email"
              placeholder="Write here"
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Name*</label>
            <input
              type="text"
              placeholder="Write here"
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Phone*</label>
            <input
              type="text"
              placeholder="🇮🇳 Write here"
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Your Class*</label>
            <select className="w-full border border-gray-300 px-3 py-2 rounded">
              <option>Choose your Class</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#0026E6] text-white px-12 py-3 font-semibold hover:bg-blue-800 transition">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  
  <img src={logo45} alt="logo45" className="w-full h-[450px] sm:h-[450px] object-cover rounded-lg shadow-md mb-20 mt-30 px-4 py-8 bg-white" />
    <div className="w-full bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 font-inter">Pricing Plan</h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-[#dce8ff] rounded-lg shadow-md flex flex-col justify-between">
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold font-inter">Core Competence</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Monday - Saturday</li>
              <li>Time - 7.00 PM to 7.45 PM</li>
              <li>School Subjects</li>
              <li>Dual Teacher Support</li>
              <li>Olympiad Preparation</li>
              <li>Test Series and Material</li>
            </ul>
            <button className="mt-4 bg-green-400 text-white font-bold py-2 px-4 rounded-full w-fit hover:bg-green-500">
              Buy Now
            </button>
          </div>
          <div className="bg-[#0b1c35] text-white text-center py-4 rounded-b-lg font-semibold">
            14,999 only
          </div>
        </div>


        <div className="bg-[#f5f5f5] rounded-lg shadow-md flex flex-col justify-between">
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold font-inter">Cutting Edge Skills</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Tuesday to Friday</li>
              <li>Time - 8.00 PM to 8.45 PM</li>
              <li>Skill Development Course</li>
              <li>Dual Teacher Support</li>
              <li>Olympiad Preparation</li>
              <li>Test Series and Material</li>
            </ul>
            <button className="mt-4 bg-green-400 text-white font-bold py-2 px-4 rounded-full w-fit hover:bg-green-500">
              Buy Now
            </button>
          </div>
          <div className="bg-red-700 text-white text-center py-4 rounded-b-lg font-semibold">
            14,999 only
          </div>
        </div>

   
        <div className="bg-[#dce8ff] rounded-lg shadow-md flex flex-col justify-between">
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold font-inter">Dual Program</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Combination of Both Programs</li>
              <li>Core Competence</li>
              <li>New Age Skills</li>
              <li>Dual Teacher Support</li>
              <li>Olympiad Preparation</li>
              <li>Test Series and Material</li>
            </ul>
            <button className="mt-4 bg-green-400 text-white font-bold py-2 px-4 rounded-full w-fit hover:bg-green-500">
              Buy Now
            </button>
          </div>
          <div className="bg-[#0b1c35] text-white text-center py-4 rounded-b-lg font-semibold">
            19,999 only
          </div>
        </div>
      </div>
    </div>
<div className="w-full py-8 bg-white">
  <img
    src={logo46}
    alt="logo46"
    className="w-full h-[600px] object-contain shadow-md"
  />
</div>

  <img src={logo47} alt="logo47" className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-md px-4 py-8 bg-white" />


    <BottomBar/>
    </>
  )
}

export default BookDemo
