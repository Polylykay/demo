import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Loginpage } from './pages/Loginpage';
import { Registrationpage } from './pages/Registrationpage';
import { Statementpage } from './pages/Statementpage';
import { Applicationpage } from './pages/Applicationpage';
import { Adminpage } from './pages/Adminpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/registration" element={<Registrationpage />} /> 
        <Route path="/statement" element={<Statementpage/>} />
        <Route path="/application" element={<Applicationpage />} /> 
        <Route path="/admin" element={<Adminpage />} /> 
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/commission" element={<CommissionPage />} />
        <Route path="/courses" element={<CoursesPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//npx create-react-app my-app
//cd my-app
//npm start
// pac.json - scripts- start "HOST=0.0.0.0 react-scripts start"
