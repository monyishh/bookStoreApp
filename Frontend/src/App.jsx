import Home from '/src/home/Home.jsx'
import Courses from '/src/courses/Courses.jsx'
import {Route,Routes} from 'react-router-dom'
import Course from "./components/Course.jsx"
import SignUp from './components/SignUp.jsx';
function App() {
 

  return (
    <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/course" element={<Courses />} />
  <Route path="/signup" element={<SignUp />} />
 
 </Routes>
    </div>
  );
}

export default App;
