import LaunchPage from "./pages/LaunchPage"
import { Routes, Route } from 'react-router-dom';
import OurCurriculum from "./pages/OurCurriculum";
import BookDemo from "./pages/BookDemo";
import OurTeam from "./pages/OurTeam";
function App() {
  
  return (
   <>

   <Routes>
   <Route path="/" element={<LaunchPage />} />
      <Route path="/pages/OurCurriculum" element={<OurCurriculum />} /> 
      <Route path="/pages/BookDemo" element={<BookDemo/>}/>
      <Route path="/pages/OurTeam" element={<OurTeam/>}/>

    </Routes>
   </>
  )
}

export default App
