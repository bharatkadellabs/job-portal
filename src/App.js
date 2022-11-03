import { BrowserRouter, Outlet } from 'react-router-dom'
import { Router as Routes } from './Router/router'
import axios from 'axios';
function App() {
  axios.defaults.baseURL = window.origin.includes('localhost') ? 'http://localhost:8000' : 'https://bb-job-portal.herokuapp.com/';

  return (
    <BrowserRouter >
      <Routes />
    </BrowserRouter>
  );
}
export default App;
