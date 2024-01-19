import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import {Shop} from './Pages/Shop'
import {LoginSignup} from './Pages/LoginSignup'
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category='mens'/>}/>
        <Route path='/womens' element={<ShopCategory category='womens'/>}/>
        <Route path='/kids' element={<ShopCategory category='kids'/>}/>

        <Route path='product' element={<Product/>}></Route>
        <Route path=':productId' element={<Product/>}></Route>
        <Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
