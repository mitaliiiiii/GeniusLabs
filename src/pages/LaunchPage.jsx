import React from 'react';
import NavBar from '../additional/navbar';
import BottomBar from '../additional/BottomBar';
import logo from '../assets/pic.png';
import logo2 from '../assets/pic2.png';
import logo3 from '../assets/pic3.png';
import logo4 from '../assets/pic4.png';
import logo5 from '../assets/pic5.png';
import logo6 from '../assets/pic6.png';
import logo7 from '../assets/pic7.png';
import logo8 from '../assets/pic8.png';
import logo9 from '../assets/pic9.png';
import logo10 from '../assets/pic10.png';
import logo11 from '../assets/pic11.png';
import logo12 from '../assets/pic12.png';
import logo13 from '../assets/pic13.png';
import logo14 from '../assets/pic14.png';

function LaunchPage() {
  return (
    <>
      <NavBar />

   
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 md:px-12 pt-20 gap-10">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="font-inter font-bold text-[20px] md:text-[26px] bg-gradient-to-r from-[#0D30AD] to-[#C17FDD] bg-clip-text text-transparent">
            INDIA’S #1 DIGITAL SCHOOL
          </p>
          <p className="font-inter font-bold text-[36px] md:text-[48px] lg:text-[64px] text-black leading-[1.2]">
            Get Tutoring For School as well as For
          </p>
          <p className="font-inter font-bold text-[40px] md:text-[60px] lg:text-[80px] bg-gradient-to-r from-[#0C2FAC] to-[#C7DEFF] bg-clip-text text-transparent leading-[1.1]">
            Cutting Edge Technologies
          </p>
          <button className="w-full max-w-[437px] h-[60px] md:h-[72px] bg-[#C90A0A] text-white font-inter font-bold text-[24px] md:text-[32px] rounded-[15px] transition-transform duration-200 hover:scale-105 mx-auto lg:mx-0">
            Book a Free Demo
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src={logo} alt="Hero" className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[693px] h-auto object-contain" />
        </div>
      </div>

    
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 space-y-32">
        <h1 className="text-center font-inter font-semibold text-[32px] md:text-[48px] lg:text-[64px] text-black">
          WHY CHOOSE US ?
        </h1>

        {[{
          img: logo2,
          title: 'Powerful Content',
          desc: 'Learn with the most immersive and innovative dynamic content created by our team with love. Genius Labs makes learning effective and fun with live experiments and demonstrations.',
          reverse: false
        }, {
          img: logo3,
          title: 'Unwavering Support',
          desc: 'Find the teachers that genuinely care for your kid’s future. Take personalized doubt sessions, report discussions, and live data tracking.',
          reverse: true
        }, {
          img: logo4,
          title: 'Infinite Learning Resources',
          desc: 'Access booklets, notes, revisions, Olympiad papers and more — all in one place. Once enrolled, no other material is needed!',
          reverse: false
        }].map(({ img, title, desc, reverse }, index) => (
          <div key={index} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-10`}>
            <div className="relative w-full max-w-[639px] h-[615px] bg-[#C7DEFF] rounded-full flex items-center justify-center hover:scale-105 transition">
              <img src={img} alt={title} className="w-[469px] h-[471px] object-contain z-10" />
            </div>
            <div className="max-w-[600px] text-center lg:text-left">
              <p className="font-inter font-semibold text-[32px] md:text-[40px] lg:text-[48px]">{title}</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-4 leading-[150%]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

  
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <h1 className="text-center font-inter font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#15609E] leading-tight">
          TESTWALE.AI
        </h1>
        <p className="text-center font-inter text-[16px] text-[#000000C4] mb-10">
          A Custom Test Generator and Doubt-solving AI with Other Great Features
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap">
          {[{ img: logo5, text: 'Talking PPT that helps in understanding ppts' }, { img: logo6, text: 'Doubt Solver AI for any kind of doubts' }, { img: logo7, text: 'Talking PPT that helps in understanding ppts' }].map((card, i) => (
            <div key={i} className="w-[270px] h-[140px] rounded-[10px] bg-[#001E32] p-4 relative hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-[129px] h-[50px] object-contain mx-auto" />
              <p className="text-white font-inter font-semibold text-[20px] mt-3 text-center">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="w-[140px] h-[44px] bg-[#001E32] text-white font-semibold rounded-full hover:scale-105 transition">
            Check Out
          </button>
        </div>
      </div>

  
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 bg-[#C7DEFF]">
        <h1 className='font-inter font-bold text-[32px] text-[#000000]'> Learn at our Weekly Bridge Course</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between mt-10 gap-8'>
          <button className="w-[350px] h-[60px] bg-[#C90A0A] text-white border rounded-[20px] text-[24px] hover:scale-105 transition">
            Book a Free Demo
          </button>
          <p className='font-inter font-semibold text-[18px] text-[#000000] text-center lg:text-left max-w-[600px]'>
            Connect with our mentors for expert guidance. Get access to free study material. Sign up for our membership and boost your learning.
          </p>
        </div>
      </div>

    
      <div className='w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24'>
        <h1 className="text-center font-inter font-semibold text-[32px] md:text-[40px] text-[#000000] py-8">Students Love Us</h1>
        <p className='text-center font-inter font-semibold text-[16px] md:text-[20px] text-[#000000] pb-10'>
          Highest Rated Education Platform All Across India with 4.8+ Google Rating on our Application at Play Store
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 flex-wrap">
          {[{ img: logo8, text: 'Samarth’s Parents', suggestion: 'Love the way they teach. Special attention to each student. Highly recommend it ♥️♥️' }, { img: logo9, text: 'Manan Sharma', suggestion: 'Fantastic content and user experience. The interactive quizzes are great!' }, { img: logo10, text: 'Abhika Jain', suggestion: 'Amazing teaching with personal mentor support and interactive classes.' }].map((card, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full md:w-[300px] lg:w-[350px] hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
              <p className="text-black font-inter font-semibold text-[22px] text-center mb-3">{card.text}</p>
              <p className="text-gray-700 text-[16px] text-center">{card.suggestion}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className='w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 bg-[#C7DEFF]'>
        <h1 className="text-center font-inter font-semibold text-[32px] md:text-[40px] text-[#000000] py-8">Our Happy Genius Labs Family</h1>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 flex-wrap">
          {[{ img: logo11, text: '1 Lakh+', suggestion: 'Happy Students' }, { img: logo12, text: '7 Cr+', suggestion: 'Minutes Watched' }, { img: logo13, text: '5 Cr+', suggestion: 'Questions Solved' }, { img: logo14, text: '10 Lakh+', suggestion: 'Doubts Solved' }].map((card, i) => (
            <div key={i} className="flex flex-col items-center p-6 w-full md:w-[250px] lg:w-[250px] hover:scale-105 transition">
              <img src={card.img} alt={`card-${i}`} className="w-[100px] h-[100px] object-cover mb-4" />
              <p className="text-black font-inter font-semibold text-[22px] text-center mb-3">{card.text}</p>
              <p className="text-gray-700 text-[16px] text-center">{card.suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomBar />
    </>
  );
}

export default LaunchPage;