import React, { useState } from 'react'
import { Drinks, Meals, Shawarma, Snacks, TopPick } from './Food'
import BreakFastIcon from '@mui/icons-material/FreeBreakfast';
import LunchIcon from '@mui/icons-material/LunchDining';
import DessertIcon from '@mui/icons-material/Icecream';
import DrinksIcon from '@mui/icons-material/BrunchDining';
import RecomendedIcon from '@mui/icons-material/Assistant';
import styles from '../../styles/Menu.module.scss'
import ImageList  from '@material-ui/core/ImageList';
import {  createTheme,ThemeProvider } from '@mui/system';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';
import Close  from '@mui/icons-material/Close';

//Mui
const theme = createTheme( {
  palette: {
      primary: {
          main: '#e78d26'
      },
      secondary: {
          main: '#fbf8f2'
      },
      tertiary: {
          main: '#563b13'
      }
  }
})
///

//adjust on small screens
function getGridCols() {
  return window.innerWidth >= 800 ? 4 : 2;
}
function cellHeight() {
  return window.innerWidth >= 800 ? 150 : 100;
}



const Menu = () => {
  //food sections
  const [foodType, setFoodType] = useState([true, false, false, false, false])
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [toggleCart, setToggleCart] = useState(false)



  //render clicked food Type
  const handelFoodTypeClick = (index) => {
    setFoodType(foodType.map((value, i) => i === index))
  }

  const addToCart = (img, name, price, total, numOfItems) => {
    setNumOfCartItems(prev => prev + 1)
    const newCartItems = {
      image: img,
      name: name,
      price: price,
      total: total,
      totalItem: numOfItems
    }
    setCartItems(prev => [...prev, newCartItems])
    setTotalPrice((prevTotal) => prevTotal + total); // Update the total price
  }
  const removeFromCart = (index) => {
    setNumOfCartItems(prev => prev - 1)
    setTotalPrice(prevTotal => prevTotal - cartItems[index].total); // Subtract the price of the removed item from the total
    setCartItems(prev => {
      const updatedCart = [...prev];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const cart = () => {
    setToggleCart(!toggleCart)
  }
  
  return (
    <div className={styles.menu}>
      {toggleCart && (
    <div className={styles.cartModal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={cart}>
          <Close />
        </button>
        <Cart
          numOfCartItems={numOfCartItems}
          cartItems={cartItems}
          totalPrice={totalPrice}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  )}
      
      <button id={styles.cart}>
      <ThemeProvider theme={theme}>
        <ShoppingCart  color="primary" sx={{ fontSize: "35px" }} onClick={cart} />
        <span>{numOfCartItems}</span>
      </ThemeProvider>
      </button>
      <section id={styles.header}>
          <input type="search" name="food" id={styles.search} placeholder='search for food'/>
        <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} className={styles.foodType} id={styles.grid}>
          
          <ul>
            <li onClick={() => handelFoodTypeClick(0)} className={`${foodType[0] ? styles.active : ''}`}>
            <button className={`${foodType[0] ? styles.active : ""} ${styles.btn}`}>
              <RecomendedIcon />
            </button>
              Top Pick
            </li>
           
            <li onClick={() => handelFoodTypeClick(1)} className={`${foodType[1] ? styles.active : ''}`}>
            <button className={`${foodType[1] ? styles.active : ""} ${styles.btn}`}>
              <LunchIcon />
            </button>
              Meals
            </li>

            <li onClick={() => handelFoodTypeClick(2)} className={`${foodType[2] ? styles.active : ''}`}>
            <button className={`${foodType[2] ? styles.active : ""} ${styles.btn}`}>
              <BreakFastIcon />
            </button>
              Snacks
            </li>

            <li onClick={() => handelFoodTypeClick(3)} className={`${foodType[3] ? styles.active : ''}`}>
            <button className={`${foodType[3] ? styles.active : ""} ${styles.btn}`}>
              <DessertIcon />
            </button>
              Shawarma
            </li>

            <li onClick={() => handelFoodTypeClick(4)} className={`${foodType[4] ? styles.active : ''}`}>
            <button className={`${foodType[4] ? styles.active : ""} ${styles.btn}`}>
              <DrinksIcon />
            </button>
              Drinks
            </li>
          </ul>
        </ImageList>
      </section>
        <section>
            {foodType[0] && <TopPick addToCart={addToCart}/>}
            {foodType[1] && <Meals addToCart={addToCart}/>}
            {foodType[2] && <Snacks addToCart={addToCart}/>}
            {foodType[3] && <Shawarma addToCart={addToCart}/>}
            {foodType[4] && <Drinks addToCart={addToCart}/>}
        </section>
    </div>
  )
}

export default Menu