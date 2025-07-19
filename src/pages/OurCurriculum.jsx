
import React from 'react';
import NavBar from '../additional/navbar';
import logo8 from '../assets/pic8.png';
import logo9 from '../assets/pic9.png';
import logo10 from '../assets/pic10.png';
import logo15 from '../assets/pic15.png';
import logo16 from '../assets/pic16.png';
import logo17 from '../assets/pic17.png';
import logo18 from '../assets/pic18.png';
import logo19 from '../assets/pic19.png';
import logo20 from '../assets/pic20.png';
import logo21 from '../assets/pic21.png';
import logo22 from '../assets/pic22.png';
import logo23 from '../assets/pic23.png';
import logo24 from '../assets/pic24.png';
import logo25 from '../assets/pic25.png';
import logo26 from '../assets/pic26.png';
import logo27 from '../assets/pic27.png';
import logo28 from '../assets/pic28.png';
import logo29 from '../assets/pic29.png';
import logo30 from '../assets/pic30.png';
import logo31 from '../assets/pic31.png';
import logo32 from '../assets/pic32.png';
import logo33 from '../assets/pic33.png';
import logo34 from '../assets/pic34.png';
import BottomBar from '../additional/BottomBar';

function OurCurriculum() {
  return (
    <>
      <NavBar />
      
 
      <div className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2">
            <h1 className="text-black font-inter font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed py-4">
              Empower your child with lifelong skills to ace exams,{' '}
              <span className="text-[#283593]">crack Olympiads</span>, and succeed with trusted tutors.
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-inter text-[#2E7D32] py-4">
              —One solution for all.
            </h2>

            <button className="w-full sm:w-[180px] md:w-[200px] h-[40px] md:h-[44px] bg-[#C90A0A] text-white font-inter font-bold text-sm md:text-base rounded-[30px] transition-transform duration-200 hover:scale-105">
              Book a Free Demo
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={logo15}
              alt="Curriculum"
              className="w-[200px] sm:w-[280px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

     
      <div className="w-full min-h-[400px] py-55 md:py-65 relative overflow-hidden flex items-center justify-center">
        {/* <div className="w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[600px] lg:h-[500px] bg-[#C7DEFF] rounded-full absolute left-[-150px] md:left-[-250px] lg:left-[-300px] top-5 md:top-10 transition-transform duration-200 hover:scale-105"></div>
        <div className="w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[600px] lg:h-[500px] bg-[#C7DEFF] rounded-full absolute right-[-150px] md:right-[-250px] lg:right-[-300px] top-5 md:top-10 transition-transform duration-200 hover:scale-105"></div>
         */}
          <div className="w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] bg-[#C7DEFF] rounded-full absolute left-[-150px] md:left-[-250px] lg:left-[-300px] top-5 md:top-10 transition-transform duration-200 hover:scale-105"></div>
        <div className="w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] bg-[#C7DEFF] rounded-full absolute right-[-150px] md:right-[-250px] lg:right-[-300px] top-5 md:top-10 transition-transform duration-200 hover:scale-105"></div>
            
        <div className="z-10 max-w-4xl text-center px-4">
          <h1 className="font-inter font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0D30AD] mb-4">
            WE OFFER TWO DYNAMIC COURSES
          </h1>
          <p className="font-inter text-sm sm:text-base md:text-lg text-[#000000C4] leading-relaxed">
            Comprehensive school subject courses to build a strong academic foundation and ensure success in exams and Olympiads, and cutting-edge technology programs like <span className="font-semibold text-[#0D47A1]">coding</span>, <span className="font-semibold text-[#0D47A1]">AI</span>, and <span className="font-semibold text-[#0D47A1]">robotics</span> to prepare your child for the innovations of tomorrow.
          </p>
        </div>
      </div>
   
      
      <div className='w-full min-h-[600px] bg-[#283593] py-8 md:py-12'>
        <h1 className='font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FFFFFF] text-center px-4 mb-8 md:mb-12'>
          Subjects We Teach
        </h1>
       
 
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 flex-wrap px-4 mb-8 md:mb-12">
          {[{ img: logo16, text: 'Mathematics' }, { img: logo17, text: 'Chemistry' }, { img: logo18, text: 'Biology' }, { img: logo19, text: 'English' }].map((card, i) => (
            <div key={i} className="w-full max-w-[270px] sm:w-[200px] md:w-[240px] lg:w-[270px] h-[140px] md:h-[160px] rounded-[10px] bg-[#FFFFFF] p-4 hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-full max-w-[160px] md:max-w-[200px] h-[60px] md:h-[80px] object-contain mx-auto" />
              <p className="text-[#000000] font-inter font-semibold text-lg md:text-xl mt-2 md:mt-3 text-center">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 flex-wrap px-4 pb-8 md:pb-12">
          {[{ img: logo20, text: 'Social Studies' }, { img: logo21, text: 'Mental Ability' }, { img: logo22, text: 'Physics' }, { img: logo23, text: 'Olympiad' }].map((card, i) => (
            <div key={i} className="w-full max-w-[270px] sm:w-[200px] md:w-[240px] lg:w-[270px] h-[140px] md:h-[160px] rounded-[10px] bg-[#FFFFFF] p-4 hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-full max-w-[160px] md:max-w-[200px] h-[60px] md:h-[80px] object-contain mx-auto" />
              <p className="text-[#000000] font-inter font-semibold text-lg md:text-xl mt-2 md:mt-3 text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="w-full bg-white py-8 md:py-16 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left">
            <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D47A1]">4.8+</h1>
            <p className="font-inter text-sm sm:text-base md:text-lg text-[#000000C4] font-semibold">
              Rated Application on Google Play Store
            </p>
          </div>

          <div className="text-center md:text-left">
            <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D47A1]">1.05L</h1>
            <p className="font-inter text-sm sm:text-base md:text-lg text-[#000000C4] font-semibold">
              Happy Students Using Our Services
            </p>
          </div>

          <div className="text-center md:text-left max-w-xl">
            <h1 className="font-inter text-lg sm:text-xl md:text-2xl font-bold text-[#000000] leading-relaxed">
              More than 85% of students enrolled with us have improved their results within 3 months.
            </h1>
          </div>
        </div>
      </div>


      <div className='w-full min-h-[600px] bg-[#283593] py-8 md:py-12'>
        <h1 className='font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FFFFFF] text-center px-4 mb-8 md:mb-12'>
          Our Top Edge Skills
        </h1>
       
   
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 flex-wrap px-4 mb-8 md:mb-12">
          {[{ img: logo24, text: 'Coding' }, { img: logo25, text: 'Robotics' }, { img: logo26, text: 'Finance' }, { img: logo27, text: 'Spoken English' }].map((card, i) => (
            <div key={i} className="w-full max-w-[270px] sm:w-[200px] md:w-[240px] lg:w-[270px] h-[140px] md:h-[160px] rounded-[10px] bg-[#FFFFFF] p-4 hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-full max-w-[160px] md:max-w-[200px] h-[60px] md:h-[80px] object-contain mx-auto" />
              <p className="text-[#000000] font-inter font-semibold text-lg md:text-xl mt-2 md:mt-3 text-center">{card.text}</p>
            </div>
          ))}
        </div>

    
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 flex-wrap px-4 pb-8 md:pb-12">
          {[{ img: logo28, text: 'Current Affairs' }, { img: logo29, text: 'Artificial Intelligence' }, { img: logo30, text: 'Entrepreneurship' }, { img: logo31, text: 'Olympiad' }].map((card, i) => (
            <div key={i} className="w-full max-w-[270px] sm:w-[200px] md:w-[240px] lg:w-[270px] h-[140px] md:h-[160px] rounded-[10px] bg-[#FFFFFF] p-4 hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-full max-w-[160px] md:max-w-[200px] h-[60px] md:h-[80px] object-contain mx-auto" />
              <p className="text-[#000000] font-inter font-semibold text-lg md:text-xl mt-2 md:mt-3 text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>


      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-24'>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 md:gap-12 lg:gap-16">
          {[
            { img: logo32, text:'Mentor Teacher Support', suggestion: 'Personalised One to One Support for all your doubts and help in school curriculum' }, 
            { img: logo33, text: 'Test Series and Analysis ', suggestion: "Test yourself with Students across India and in-depth analysis for the same." },
            { img: logo34, text: 'Complete Study Material ', suggestion: "All Study Materials at One Place. You don't need to buy any book after this" }
          ].map((card, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full lg:flex-1 hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover rounded-full mb-4" />
              <p className="text-black font-inter font-semibold text-lg sm:text-xl md:text-2xl text-center mb-3">{card.text}</p>
              <p className="text-gray-700 text-sm sm:text-base text-center">{card.suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-24'>
        <h1 className="text-center font-inter font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#000000] py-4 md:py-8">
          Students Love Us
        </h1>
        <p className='text-center font-inter font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#000000] pb-8 md:pb-10 max-w-4xl mx-auto'>
          Highest Rated Education Platform All Across India with 4.8+ Google Rating on our Application at Play Store
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 md:gap-10">
          {[
            { img: logo8, text: 'Samarths Parents', suggestion: 'Love the way they teach. Special attention to each student. Highly recommend it ♥️♥️' }, 
            { img: logo9, text: 'Manan Sharma', suggestion: 'Fantastic content and user experience. The interactive quizzes are great!' }, 
            { img: logo10, text: 'Abhika Jain', suggestion: 'Amazing teaching with personal mentor support and interactive classes.' }
          ].map((card, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full lg:flex-1 hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover rounded-full mb-4" />
              <p className="text-black font-inter font-semibold text-lg sm:text-xl md:text-2xl text-center mb-3">{card.text}</p>
              <p className="text-gray-700 text-sm sm:text-base text-center">{card.suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomBar/>
    </>
  );
}

export default OurCurriculum;