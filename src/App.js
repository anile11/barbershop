import React from 'react';
import './App.css';
//import Form from './component/formcomponent/Form.jsx';
// import RegisterForm from './component/RegisterForm.js';
// import Parent from './componet/Parent.jsx';



import Gallary from './component/Gallary.jsx';
import Contact from './component/Contact.jsx';
import About from './component/About.jsx';




// import Parent from './component/Parent';
// import Mpage from './shopingfolder/pages/Mpage';
// import Apidata from './component/Apidata';

import Main from './component/Main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
<Router>
  {/* <Main/> */}
<Routes>
<Route path='/' element={<Main/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/gallary' element={<Gallary/>}/>
<Route path='/about' element={<About/>}/>
</Routes>
</Router>
     
   

      {/* <Form /> */}


    </>


  );
}

export default App;
