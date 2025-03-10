import StudentLogin from './pages/StudentLogin'
import TeacherLogin from './pages/TeacherLogin'
import './App.css'
import HomePage from './pages/Homepage'
import {Routes,Route } from 'react-router-dom'
function App() {


  return (
    <>
      
        <Routes>


          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/student_login' element={ <StudentLogin/> }/>
          <Route path='/teacher_login' element={ <TeacherLogin/> }/>

        </Routes>
      
    
      
    </>
  )
}

export default App
