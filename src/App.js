import { BrowserRouter, Outlet } from 'react-router-dom'
import { Router as Routes } from './Router/router'
function App() {
  return (
    <BrowserRouter >
      <Routes />
    </BrowserRouter>
  );
}
export default App;
