
import './App.css'
import HomePage from './pages/Homepage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {


  return (
    <>
      
        <Routes>


          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/student_login' element={ <Favourites/> }/>
          <Route path='/teacher_login' element={ <Favourites/> }/>

        </Routes>
      
    
      
    </>
  )
}

export default App
