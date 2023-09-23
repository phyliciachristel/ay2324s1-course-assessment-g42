import Home from './pages/home';
import Questions from './pages/questions';
import UserProfile from'./pages/UserProfile';
import Login from './pages/login';
import Signup from './pages/signup';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navBar';

function App() {
  return (
    <div>
      <ToastContainer limit={1}/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questions" element={<Questions />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="userprofile" element={<UserProfile />}/>
      </Routes>
    </div>
  );
}

export default App;