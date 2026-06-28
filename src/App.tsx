import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import AddProduct from './pages/Admin/AddProducts'
import EditProducts from './pages/Admin/EditProducts'
import ManageProducts from './pages/Admin/ManageProducts'
import ManageCategories from './pages/Admin/ManageCategories'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/cart">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/add-product">
        <button>Lisa toode</button>
      </Link>

      <Link to="/manage-products">
        <button>Manage products</button>
      </Link>

      <Link to="/manage-categories">
        <button>Manage categories</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/signup">
        <button>Sign up</button>
      </Link>

      <Link to="/profile">
        <button>Profile</button>
      </Link>

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/add-product" element={ <AddProduct /> } />
        <Route path="/edit-product" element={ <EditProducts /> } />
        <Route path="/manage-products" element={ <ManageProducts /> } />
        <Route path="/manage-categories" element={ <ManageCategories /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/product" element={ <ProductDetails /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App