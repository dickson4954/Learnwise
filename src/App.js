
import './App.css';

import LandingPage from './Componets/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inquiry from './Componets/inquiry';
import PricingPage from './Componets/pricingPage';
import ContactPage from './Componets/ContactPage';
import Admin from './Componets/admin/admin';
import ProjectForm from './Componets/admin/projectForm';

function App() {
  return (
   <div>

    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path='/inquiry' element={<Inquiry/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/form' element={<ProjectForm/>}/>'

        </Routes>
    </Router>
   
  
   </div>
  );
}

export default App;

