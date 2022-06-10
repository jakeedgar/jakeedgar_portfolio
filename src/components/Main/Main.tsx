import { Routes, Route } from 'react-router-dom'
import Homepage from '../../pages/Homepage'
import Github from '../../pages/Github'
import About from '../../pages/About'
import Resume from '../../pages/Resume'

const Main = () => {
  return (         
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/github' element={<Github/>} />
      <Route path='/about' element={<About />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}
export default Main;