import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Layout from './Components/Layout';
import Overview from './Components/Dashboard/Overview/Overview';
import User from './Components/Dashboard/User/User';
import Admin from './Components/Dashboard/Admin/Admin';

function App() {

  return (
    <div className='App' id='app' >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
