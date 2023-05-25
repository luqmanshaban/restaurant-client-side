import React, { useEffect } from 'react'
import styles from '../../styles/Main.module.scss'
import Data from '../../Data'
import Cart  from '@mui/icons-material/ShoppingCartOutlined'
import {  ImageListItem } from '@material-ui/core';
import ImageList  from '@material-ui/core/ImageList';
import Add from '@mui/icons-material/Add'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom';

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
    return window.innerWidth >= 800 ? 3 : 1.2;
  }

  function cellHeight() {
    return window.innerWidth >= 800 ? 400 : 320;
  }
  
const FoodMenu = () => {
    const {topPick} = Data;
    const h1Controls = useAnimation()
    const artcilceControls = useAnimation()
    const [h1Ref, h1InView] = useInView({triggerOnce: true})
    const [articleRef, artcleInView] = useInView({triggerOnce: true})

    useEffect( () => {
      if(h1InView){
        h1Controls.start('visible')
      }
    },[h1Controls, h1InView]
    )

    useEffect( () => {
        if(artcleInView){
          artcilceControls.start('visible')
        }
      },[artcilceControls, artcleInView]
      )

  return (
    <section className={styles.main}>
      <motion.article id={styles.header} ref={h1Ref} initial='hidden' animate={h1Controls} variants={h1Variations}>
        <h1>Top Picks</h1>
        <Link to='/menu'>View Full menu</Link>
      </motion.article>

      <motion.section id={styles.food} ref={articleRef} initial='hidden' animate={artcilceControls} variants={articleVariations}>
        <div style={{ overflow: 'hidden' }}>
          <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
            {topPick.map((food, index) => (
              <ImageListItem key={index} id={styles.artc}>
                <motion.article className={styles.artc} >
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
        </div>
      </motion.section>
    </section>
  );
};

export default FoodMenu;
