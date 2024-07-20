import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';

function App() {

  return (
    <div className="">
      <Routes>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
