import React, { useEffect } from 'react'
import styles from '../../styles/Main.module.scss'
import Data from '../../Data'
import Cart  from '@mui/icons-material/ShoppingCartOutlined'
import { GridList, GridListTile } from '@material-ui/core';
import Add from '@mui/icons-material/Add'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const h1Variations = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: -40, transition: {duration: 0.5}}
}

const articleVariations = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: -50, transition: {duration: 0.5}}
}

function getGridCols() {
    return window.innerWidth >= 800 ? 3 : 1;
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
      <motion.h1 ref={h1Ref} initial='hidden' animate={h1Controls} variants={h1Variations}>
        Top Picks
      </motion.h1>

      <motion.section id={styles.food} ref={articleRef} initial='hidden' animate={artcilceControls} variants={articleVariations}>
        <div style={{ overflow: 'hidden' }}>
          <GridList cols={getGridCols()} cellHeight={400} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
            {topPick.map((food, index) => (
              <GridListTile key={index} id={styles.artc}>
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
              </GridListTile>
            ))}
          </GridList>
        </div>
      </motion.section>
    </section>
  );
};

export default FoodMenu;
