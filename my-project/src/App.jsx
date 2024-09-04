import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import AddProduct from './pages/addProduct/AddProduct';
import UpdateProduct from './pages/updateProduct/UpdateProduct';
import MyState from './context/data/myState';

function App() {
  return (
    <div>
      <MyState>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/addProduct' element = {<AddProduct/>}/>
          <Route path='/updateProduct' element = {<UpdateProduct/>}/>
        </Routes>
      </Router>
      </MyState>
    </div>
  )
}

export default App
