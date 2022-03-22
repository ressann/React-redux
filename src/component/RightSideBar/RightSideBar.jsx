import './rightsidebar.css'
import React, { useState } from 'react'
import Items from '../Items/Items'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Footer from '../../Footer/Footer'
import Cart from '../Cart/Cart'
import Order from '../Order/Order'

const RightSideBar = () => {

  const [items,setItems]=useState([
    {
      id:1,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://i.pinimg.com/736x/b0/cd/85/b0cd857480cca49c3799594298219e7f.jpg',
      price:10,
    },
    {
      id:2,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://cdn.cnn.com/cnnnext/dam/assets/170427140235-03-khmer-cuisine-super-tease.jpg',
      price:10,
    },
    {
      id:3,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://th.bing.com/th/id/R.d1af1644908127c23d839e870dea427d?rik=YfdVp6%2fsfLFPbw&riu=http%3a%2f%2fflavorverse.com%2fwp-content%2fuploads%2f2016%2f10%2fCambodian-Food.jpg&ehk=bhpa07mjCSlFoWXv5tbiMVgwb71%2bpd%2bxF9nkPrcTY6M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
      price:10,
    },
    {
      id:4,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://th.bing.com/th/id/OIP.POKJH0PCQ5h6aCTVj6QjpgHaEK?pid=ImgDet&rs=1',
      price:10,
    },
    {
      id:5,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://elevenmyanmar.com/sites/news-eleven.com/files/styles/news_detail_image/public/news-images/learning.jpg?itok=LCOqOX47',
      price:10,
    },
    {
      id:6,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://thumbs.dreamstime.com/b/pho-bo-vietnamese-fresh-rice-noodle-soup-beef-herbs-chili-vietnam-s-national-dish-dark-background-115496231.jpg',
      price:10
    },
    {
      id:7,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://i1.wp.com/www.awanderingfoodie.com/wp-content/uploads/2017/04/num-banh-chok-somlar-prahar-atraveldiary.jpg?resize=1060%2C707&ssl=1',
      price:10
    },
    {
      id:8,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://allyskitchen.com/wp-content/uploads/2017/08/DSC3867.jpg',
      price:10
    },
    {
      id:9,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://i.pinimg.com/originals/45/ba/42/45ba42daeb2d1c135523201b44fcab1b.jpg',
      price:10
    },
    {
      id:10,
      title:'The best food',
      details:'Lorem ipsum dolor sit amet.',
      img:'https://tripily.co/wp-content/uploads/2020/03/fd1ceb0ece5bf6cb97bb9b82315107df-e1583574290315.jpg',
      price:10
    },
  ])
  return (
    <div className='rightside'>
      <Routes>
        <Route path='/' element={<Items items={items}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Items items={items}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order/:id' element={<Order order={items}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default RightSideBar