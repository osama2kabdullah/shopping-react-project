import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Login from './components/Login';
import Order from './components/Order';
import Shop from './components/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
