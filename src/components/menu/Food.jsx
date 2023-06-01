
import React, { useState } from "react";
import styles from '../../styles/Food.module.scss'
import Data from "../../Data";
import {  ImageListItem } from '@material-ui/core';
import ImageList  from '@material-ui/core/ImageList';
import { motion } from "framer-motion";
import Add from '@mui/icons-material/Add'
import Cart  from '@mui/icons-material/ShoppingCartOutlined'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


//adjust on small screens
function getGridCols() {
    return window.innerWidth >= 800 ? 4 : 1.2;
}
function cellHeight() {
    return window.innerWidth >= 800 ? 400 : 400;
}


const TopPick = ({addToCart}) => {
    const [cartItems, setCartItems] = useState(Array(Data.topPick.length).fill(0))

    const {topPick} = Data;

    //increment cart count
    const add = index => {
      const newCartItems = [...cartItems]
      newCartItems[index] += 1
      setCartItems(newCartItems)
    }                 
    const remove = index => {
      const newCartItems = [...cartItems]
      newCartItems[index] = Math.max(newCartItems[index] -1, 0)
      setCartItems(newCartItems)
    }  
    
    //add to cart
    const addToCartClicked = (index) => {
      const newAddedItems = [...cartItems];
      newAddedItems[index] = true;
      setCartItems(newAddedItems);
      addToCart(
        Data.topPick[index].img,
        Data.topPick[index].name,
        Data.topPick[index].price,
        Data.topPick[index].price * cartItems[index],
        cartItems[index]
      );
    };

    return (
        <>
        <h1 id={styles.h1}>Top Pick</h1>
        <section className={styles.food} id={styles.topPick}>
        <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
            {topPick.map((food, index) => (
              <ImageListItem key={index} id={styles.artc}>
                <motion.article className={styles.artc}>
                  <span id={styles.cart}>
                    <Cart />
                    <Add sx={{ fontSize: '15px', position: 'relative', top: '-20px', right: '10px' }} />
                  </span>
                  <img src={food.img} alt={food.name} />
                  <h1>{food.name}</h1>
                  <p>
                    Price: <br /> Ksh {food.price}
                  </p>
                  <figure className={styles.counter}>
                    <button onClick={() => add(index)}>
                      <AddIcon />
                    </button>
                    <span>{cartItems[index]}</span>
                    <button onClick={() => remove(index)}>
                      <RemoveIcon />
                    </button>
                  </figure>
                  <button id={styles.addToCart} onClick={() => addToCartClicked(index)}>Add To Cart</button>
                </motion.article>
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        </>
    )
}

const Meals = ({addToCart}) => {
  const [cartItems, setCartItems] = useState(Array(Data.meals.length).fill(0))

  const {meals} = Data;

  //increment cart count
  const add = index => {
    const newCartItems = [...cartItems]
    newCartItems[index] += 1
    setCartItems(newCartItems)
  }                 
  const remove = index => {
    const newCartItems = [...cartItems]
    newCartItems[index] = Math.max(newCartItems[index] -1, 0)
    setCartItems(newCartItems)
  }  
  
  //add to cart
  const addToCartClicked = (index) => {
    const newAddedItems = [...cartItems];
    newAddedItems[index] = true;
    setCartItems(newAddedItems);
    addToCart(
      Data.meals[index].img,
      Data.meals[index].name,
      Data.meals[index].price,
      Data.meals[index].price * cartItems[index],
      cartItems[index]
    );
  };

  return (
      <>
      <h1 id={styles.h1}>Top Pick</h1>
      <section className={styles.food} id={styles.topPick}>
      <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
          {meals.map((food, index) => (
            <ImageListItem key={index} id={styles.artc}>
              <motion.article className={styles.artc}>
                <span id={styles.cart}>
                  <Cart />
                  <Add sx={{ fontSize: '15px', position: 'relative', top: '-20px', right: '10px' }} />
                </span>
                <img src={food.img} alt={food.name} />
                <h1>{food.name}</h1>
                <p>
                  Price: <br /> Ksh {food.price}
                </p>
                <figure className={styles.counter}>
                  <button onClick={() => add(index)}>
                    <AddIcon />
                  </button>
                  <span>{cartItems[index]}</span>
                  <button onClick={() => remove(index)}>
                    <RemoveIcon />
                  </button>
                </figure>
                <button id={styles.addToCart} onClick={() => addToCartClicked(index)}>Add To Cart</button>
              </motion.article>
            </ImageListItem>
          ))}
        </ImageList>
      </section>
      </>
  )
}

const Shawarma = ({addToCart}) => {
  const [cartItems, setCartItems] = useState(Array(Data.shawarma.length).fill(0))

  const {shawarma} = Data;

  //increment cart count
  const add = index => {
    const newCartItems = [...cartItems]
    newCartItems[index] += 1
    setCartItems(newCartItems)
  }                 
  const remove = index => {
    const newCartItems = [...cartItems]
    newCartItems[index] = Math.max(newCartItems[index] -1, 0)
    setCartItems(newCartItems)
  }  
  
  //add to cart
  const addToCartClicked = (index) => {
    const newAddedItems = [...cartItems];
    newAddedItems[index] = true;
    setCartItems(newAddedItems);
    addToCart(
      Data.shawarma[index].img,
      Data.shawarma[index].name,
      Data.shawarma[index].price,
      Data.shawarma[index].price * cartItems[index],
      cartItems[index]
    );
  };

  return (
      <>
      <h1 id={styles.h1}>Top Pick</h1>
      <section className={styles.food} id={styles.topPick}>
      <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
          {shawarma.map((food, index) => (
            <ImageListItem key={index} id={styles.artc}>
              <motion.article className={styles.artc}>
                <span id={styles.cart}>
                  <Cart />
                  <Add sx={{ fontSize: '15px', position: 'relative', top: '-20px', right: '10px' }} />
                </span>
                <img src={food.img} alt={food.name} />
                <h1>{food.name}</h1>
                <p>
                  Price: <br /> Ksh {food.price}
                </p>
                <figure className={styles.counter}>
                  <button onClick={() => add(index)}>
                    <AddIcon />
                  </button>
                  <span>{cartItems[index]}</span>
                  <button onClick={() => remove(index)}>
                    <RemoveIcon />
                  </button>
                </figure>
                <button id={styles.addToCart} onClick={() => addToCartClicked(index)}>Add To Cart</button>
              </motion.article>
            </ImageListItem>
          ))}
        </ImageList>
      </section>
      </>
  )
}

const Drinks = ({addToCart}) => {
  const [cartItems, setCartItems] = useState(Array(Data.drinks.length).fill(0))

  const {drinks} = Data;

  //increment cart count
  const add = index => {
    const newCartItems = [...cartItems]
    newCartItems[index] += 1
    setCartItems(newCartItems)
  }                 
  const remove = index => {
    const newCartItems = [...cartItems]
    newCartItems[index] = Math.max(newCartItems[index] -1, 0)
    setCartItems(newCartItems)
  }  
  
  //add to cart
  const addToCartClicked = (index) => {
    const newAddedItems = [...cartItems];
    newAddedItems[index] = true;
    setCartItems(newAddedItems);
    addToCart(
      Data.drinks[index].img,
      Data.drinks[index].name,
      Data.drinks[index].price,
      Data.drinks[index].price * cartItems[index],
      cartItems[index]
    );
  };

  return (
      <>
      <h1 id={styles.h1}>Top Pick</h1>
      <section className={styles.food} id={styles.topPick}>
      <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
          {drinks.map((food, index) => (
            <ImageListItem key={index} id={styles.artc}>
              <motion.article className={styles.artc}>
                <span id={styles.cart}>
                  <Cart />
                  <Add sx={{ fontSize: '15px', position: 'relative', top: '-20px', right: '10px' }} />
                </span>
                <img src={food.img} alt={food.name} />
                <h1>{food.name}</h1>
                <p>
                  Price: <br /> Ksh {food.price}
                </p>
                <figure className={styles.counter}>
                  <button onClick={() => add(index)}>
                    <AddIcon />
                  </button>
                  <span>{cartItems[index]}</span>
                  <button onClick={() => remove(index)}>
                    <RemoveIcon />
                  </button>
                </figure>
                <button id={styles.addToCart} onClick={() => addToCartClicked(index)}>Add To Cart</button>
              </motion.article>
            </ImageListItem>
          ))}
        </ImageList>
      </section>
      </>
  )
}

const Snacks = ({addToCart}) => {
       const [cartItems, setCartItems] = useState(Array(Data.snacks.length).fill(0))

    const {snacks} = Data;

    //increment cart count
    const add = index => {
      const newCartItems = [...cartItems]
      newCartItems[index] += 1
      setCartItems(newCartItems)
    }                 
    const remove = index => {
      const newCartItems = [...cartItems]
      newCartItems[index] = Math.max(newCartItems[index] -1, 0)
      setCartItems(newCartItems)
    }  
    
    //add to cart
    const addToCartClicked = (index) => {
      const newAddedItems = [...cartItems];
      newAddedItems[index] = true;
      setCartItems(newAddedItems);
      addToCart(
        Data.snacks[index].img,
        Data.snacks[index].name,
        Data.snacks[index].price,
        Data.snacks[index].price * cartItems[index],
        cartItems[index]
      );
    };

    return (
        <>
        <h1 id={styles.h1}>Top Pick</h1>
        <section className={styles.food} id={styles.topPick}>
        <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
            {snacks.map((food, index) => (
              <ImageListItem key={index} id={styles.artc}>
                <motion.article className={styles.artc}>
                  <span id={styles.cart}>
                    <Cart />
                    <Add sx={{ fontSize: '15px', position: 'relative', top: '-20px', right: '10px' }} />
                  </span>
                  <img src={food.img} alt={food.name} />
                  <h1>{food.name}</h1>
                  <p>
                    Price: <br /> Ksh {food.price}
                  </p>
                  <figure className={styles.counter}>
                    <button onClick={() => add(index)}>
                      <AddIcon />
                    </button>
                    <span>{cartItems[index]}</span>
                    <button onClick={() => remove(index)}>
                      <RemoveIcon />
                    </button>
                  </figure>
                  <button id={styles.addToCart} onClick={() => addToCartClicked(index)}>Add To Cart</button>
                </motion.article>
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        </>
    )
}

export {TopPick, Meals, Shawarma, Drinks, Snacks}