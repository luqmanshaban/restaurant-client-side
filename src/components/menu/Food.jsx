
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


const h1Variations = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: -40, transition: {duration: 0.5}}
}
const articleVariations = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: -100, transition: {duration: 0.5}}
}


//adjust on small screens
function getGridCols() {
    return window.innerWidth >= 800 ? 4 : 1.2;
}
function cellHeight() {
    return window.innerWidth >= 800 ? 400 : 320;
}
  

const TopPick = () => {
    const [cartItems, setCartItems] = useState(Array(Data.topPick.length).fill(0))

    const {topPick} = Data;

    return (
        <>
        <h1>Top Pick</h1>
        <section className={styles.food}>
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
                  <button id={styles.addToCart}>Add To Cart</button>
                </motion.article>
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        </>
    )
}

const Meals = () => {
    const [cartItems, setCartItems] = useState(Array(Data.meals.length).fill(0))

    const {meals} = Data;

    return (
        <>
        <h1>Meals</h1>
        <section className={styles.food}>
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
                  <button id={styles.addToCart}>Add To Cart</button>
                </motion.article>
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        </>
    )
}

const Shawarma = () => {
    const [cartItems, setCartItems] = useState(Array(Data.shawarma.length).fill(0))

    const {shawarma} = Data;

    return (
        <>
        <h1>Top Pick</h1>
        <section className={styles.food}>
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
                  <button id={styles.addToCart}>Add To Cart</button>
                </motion.article>
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        </>
    )
}

const Drinks = () => {
    const [cartItems, setCartItems] = useState(Array(Data.drinks.length).fill(0))
    const {drinks} = Data;

    return (
        <>
        <h1>Drinks</h1>
        <section className={styles.food}>
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
                  <button id={styles.addToCart}>Add To Cart</button>
                </motion.article>
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        </>
    )
}

const Snacks = () => {
    const [cartItems, setCartItems] = useState(Array(Data.snacks.length).fill(0))

    const {snacks} = Data;

    return (
        <>
        <h1>Snacks</h1>
        <section className={styles.food}>
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
                  <button id={styles.addToCart}>Add To Cart</button>
                </motion.article>
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        </>
    )
}

export {TopPick, Meals, Shawarma, Drinks, Snacks}