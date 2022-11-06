import { BrowserRouter, Outlet } from 'react-router-dom'
import { Router as Routes } from './Router/router'
import axios from 'axios';
function App() {
  axios.defaults.baseURL = window.origin.includes('localhost') ? 'http://localhost:8000' : 'https://job-portal-api-nxht.onrender.com';

  return (
    <BrowserRouter >
      <Routes />
    </BrowserRouter>
  );
}
export default App;
