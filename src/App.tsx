import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import AddProduct from './pages/Admin/AddProducts'
import EditProducts from './pages/Admin/EditProducts'
import ManageProducts from './pages/Admin/ManageProducts'
import ManageCategories from './pages/Admin/ManageCategories'

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

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/add-product" element={ <AddProduct /> } />
        <Route path="/edit-product" element={ <EditProducts /> } />
        <Route path="/manage-products" element={ <ManageProducts /> } />
        <Route path="/manage-categories" element={ <ManageCategories /> } />
      </Routes>
    </>
  )
}

export default App