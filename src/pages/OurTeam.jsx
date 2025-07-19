import React from 'react'
import NavBar from '../additional/navbar'
import logo11 from '../assets/pic11.png';
import logo12 from '../assets/pic12.png';
import logo13 from '../assets/pic13.png';
import logo14 from '../assets/pic14.png';
import logo35 from '../assets/pic35.png';
import logo36 from '../assets/pic36.png';
import logo37 from '../assets/pic37.png';
import logo38 from '../assets/pic38.png';
import logo39 from '../assets/pic39.png';
import logo40 from '../assets/pic40.png';
import logo41 from '../assets/pic41.png';
import logo42 from '../assets/pic42.png';
import logo43 from '../assets/pic43.png';
import logo44 from '../assets/pic44.png';
import BottomBar from '../additional/BottomBar';
function OurTeam() {
  return (
   <>
   <NavBar/>

         <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-12 md:py-24'>
           <h1 className="text-center font-inter font-bold text-[64px] sm:text-3xl md:text-4xl lg:text-5xl text-[#283593] py-4 md:py-8">
        Our Trusted Teachers
           </h1>
           <p className='text-center font-inter font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#000000] pb-8 md:pb-10 max-w-4xl mx-auto'>
            Best Experts for your Child's Career here at Genius Labs Digital School after Solid Training and Certification
           </p>
   
           <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 md:gap-10">
             {[
               { img: logo35 }, 
               { img: logo36 }, 
               { img: logo37 },
                { img: logo38 },
             ].map((card, i) => (
               <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full lg:flex-1 hover:scale-105 transition">
                 <img src={card.img} alt={`card-${i}`} className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover  mb-4" />
               
               </div>
             ))}
           </div>
         </div>
     
           <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-24'>
             <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 md:gap-12 lg:gap-16">
               {[
                 { img: logo39, text:'Content Team', suggestion: 'Standardisation and Scripting making Teaching and Research content more scientific and systematic.' }, 
                 { img: logo40, text: 'Content Team ', suggestion: "Advancement in Technology driving Industry Leadership and fostering educational innovation." },
                 { img: logo41, text: 'Animation Team', suggestion: "Animation and illustration team creates courseware that is detailed and lively, making learning more enjoyable" }
               ].map((card, i) => (
                 <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full lg:flex-1 hover:scale-105 transition">
                   <img src={card.img} alt={`card-${i}`} className="w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] object-cover  mb-4" />
                   <p className="text-black font-inter font-semibold text-lg sm:text-xl md:text-2xl text-center mb-3">{card.text}</p>
                   <p className="text-gray-700 text-sm sm:text-base text-center">{card.suggestion}</p>
                 </div>
               ))}
             </div>
           </div>
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24">
      

      <h1 className="text-center font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-[#283593] leading-tight mb-4">
        Learning is Most Effective when it’s Fun!
      </h1>


      <p className="text-center font-inter font-medium text-base sm:text-lg lg:text-xl text-[#000000] max-w-3xl mx-auto mb-10">
        Our 45-minute lessons are well thought-out and practiced to make a student fundamentally strong.
      </p>

  
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 px-4">
        
 
        <img 
          src={logo42} 
          alt="Learning Icon" 
          className="w-[600px] sm:w-[300px] md:w-[600px] h-auto object-contain"
        />

 
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-[#283593] font-inter font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4">
            Our Virtual Lesson Space
          </h2>
          <img 
            src={logo43} 
            alt="Virtual Space" 
            className="w-[140px] sm:w-[160px] md:w-[200px] h-auto object-contain mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <img 
          src={logo44} 
          alt="App Logo" 
          className="w-[1200px] sm:w-[400px] md:w-[1200px] h-auto object-contain"
        />
      </div>
    </div>

    
        <div className="w-full bg-[#283593] py-12 px-4 sm:px-6 md:px-12">
  {/* Heading */}
  <h1 className="text-center font-inter font-semibold text-2xl sm:text-3xl md:text-4xl text-white mb-12">
    Our Happy Genius Labs Family
  </h1>

  {/* Cards Section */}
  <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-7xl mx-auto">
    {[
      { img: logo11, text: '1 Lakh+', suggestion: 'Happy Students' },
      { img: logo12, text: '7 Cr+', suggestion: 'Minutes Watched' },
      { img: logo13, text: '5 Cr+', suggestion: 'Questions Solved' },
      { img: logo14, text: '10 Lakh+', suggestion: 'Doubts Solved' }
    ].map((card, i) => (
      <div
        key={i}
        className="flex flex-col items-center bg-[#3949AB] p-6 rounded-xl w-full sm:w-[260px] hover:scale-105 transition-transform duration-300"
      >
        <img
          src={card.img}
          alt={`card-${i}`}
          className="w-[80px] h-[80px] object-contain mb-4"
        />
        <p className="text-white font-inter font-bold text-xl text-center mb-2">
          {card.text}
        </p>
        <p className="text-white font-inter text-base text-center">
          {card.suggestion}
        </p>
      </div>
    ))}
  </div>
</div>

          <BottomBar/>
   </>
  )
}

export default OurTeam
