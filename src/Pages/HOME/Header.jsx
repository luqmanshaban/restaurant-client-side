import React from 'react'
import { motion } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from '../../styles/Header.module.scss'
import hoho from '../../assets/images/hoho-removebg-preview.png'
import leaf from '../../assets/images/leaf-removebg-preview.png'
import leaf3 from '../../assets/images/leaf2-removebg-preview.png'
import { Link } from 'react-router-dom';

const h1Variations = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
    transition: {type: 'spring', stiffeness: 60, }
}
const pVariations = {
    hidden: {opacity: 0, y: 80, x: 50},
    visible: {opacity: 1, y: 0, x: 0, transition: {duration: 0.5}},
    transition: {type: 'spring', stiffeness: 60, }
}

const fbVariations = {
  hidden: {opacity: 0, y: 100, x: -150},
  visible: {opacity: 1, y: 0, x: 0, transition: {duration: 0.5}},
  transition: {type: 'spring', stiffeness: 60, }
}

const igVariations = {
    hidden: {opacity: 0, y: 100, x: 150},
    visible: {opacity: 1, y: 0, x: 0, transition: {duration: 0.5}},
    transition: {type: 'spring', stiffeness: 60, }
}

const btnVariations = {
    hidden: {opacity: 0, },
    visible: {opacity: 1,scale : [1,0.6,0.8,1], transition: {duration: 0.5}},
}

const Header = () => {
  return (
    <>
    <section className={styles.header}>
         <article className={styles.headerInfo}>
            <motion.h1 initial='hidden' animate='visible' variants={h1Variations}>it's not just Food, It's an experience</motion.h1>
            <motion.p id={styles.p1} initial='hidden' animate='visible' variants={pVariations}>Swahili Plate is a restaurant that offers an authentic taste of Swahili cuisine. From aromatic biryanis and pilafs to succulent grilled meats and seafood, each dish is prepared with the perfect blend of spices and ingredients to tantalize your taste buds.</motion.p>
            <motion.button id={styles.signup} initial='hidden' animate='visible' variants={btnVariations}>
              <Link className={styles.link} to='/menu'>Order Now</Link>
            </motion.button>
            <section id={styles.social}>
                <motion.a href='https://www.facebook.com/swahiliplate/' target='_blank' rel='noreferrer'
                 initial='hidden' animate='visible' variants={fbVariations}
                ><FacebookIcon id={styles.icons}/></motion.a>
                <motion.a href='https://www.instagram.com/swahiliplate/?hl=en' target='_blank' rel='noreferrer'
                initial='hidden' animate='visible' variants={igVariations}
                ><InstagramIcon id={styles.icons}/></motion.a>
            </section>
         </article>

        <motion.article id={styles.headerImage} 
          animate={{
            x: 10,
            opacity: 1
        }} initial={{
            opacity: 0.1
        }}
        transition={{
            type: 'spring',
            stiffness: 60,
            damping: 6
        }}>
        </motion.article>
        
        <article id={styles.art2}>
        <motion.p id={styles.p2} initial='hidden' animate='visible' variants={pVariations}><span>Swahili Plate is </span>a restaurant that offers an authentic taste of Swahili cuisine <span>. From aromatic biryanis and pilafs to succulent grilled meats and seafood</span>, each dish is prepared with the perfect blend of spices and ingredients to tantalize your taste buds.</motion.p>
            <Link className={styles.link} to='/menu'  id={styles.signup} >Order Now</Link>
            <section id={styles.social}>
                <motion.a href='https://www.facebook.com/swahiliplate/' target='_blank' rel='noreferrer'
                 initial='hidden' animate='visible' variants={fbVariations}
                ><FacebookIcon id={styles.icons}/></motion.a>
                <motion.a href='https://www.instagram.com/swahiliplate/?hl=en' target='_blank' rel='noreferrer'
                initial='hidden' animate='visible' variants={igVariations}
                ><InstagramIcon id={styles.icons}/></motion.a>
          </section>
        </article>
    </section>
    
    <section className={styles.images}>
      <img src={hoho} alt="Hoho" id={styles.hoho} height={100}/>
      <img src={leaf} alt="leaf" id={styles.leaf} height={100}/>
      <img src={leaf} alt="leaf" id={styles.leaf1} height={100}/>
      <img src={leaf3} alt="leaf" id={styles.leaf2} height={100}/>
      <img src={leaf3} alt="leaf" id={styles.leaf3} height={100}/>
    </section>
    </>
  )
}

export default Header