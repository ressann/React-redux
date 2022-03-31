import './rightsidebar.css'
import { Route, Routes} from 'react-router-dom'
import About from '../About/About'
import Footer from '../../Footer/Footer'
import Cart from '../Cart/Cart'
import Order from '../Order/Order'
import Contact from '../Contact/Contact'
import AllFood from '../AllFood/AllFood'
import Page from '../Page/Page'
import Searchpage from '../../SearchBar/SearchPage/Searchpage'

const RightSideBar = () => {

  return (
    <div className='rightside'>
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/allfood' element={<AllFood/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order/:id' element={<Order/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/search' element={<Searchpage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default RightSideBar