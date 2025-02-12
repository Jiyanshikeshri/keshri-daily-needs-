import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Loginsignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import fruitVeg_banner from './Components/Assets/fruits & vegetables Logo.2jpg.jpg'
import dairyeggs_banner from './Components/Assets/Dairy and eggs banner.jpg'
import bakerybread_banner from './Components/Assets/Bread & Bakery banner.jpg'
import beverages_banner from './Components/Assets/Beverages banner.jpg'
import pantrystaples_banner from './Components/Assets/pantry and staple banner.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Fruits&Vegetables' element={<ShopCategory banner={fruitVeg_banner} category="Fruits&Vegetables"/>}/>
        <Route path='/Dairy&Eggs' element={<ShopCategory banner={dairyeggs_banner} category="Dairy&Eggs" />}/>
        <Route path='/Bakery&Bread' element={<ShopCategory banner={bakerybread_banner} category="Bakery&Bread"/>}/>
        <Route path='/Beverages' element={<ShopCategory banner={beverages_banner} category="Beverages"/>}/>
        <Route path='/PantryStaples' element={<ShopCategory banner={pantrystaples_banner} category="PantryStaples"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
