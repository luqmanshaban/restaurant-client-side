import React, { useState } from 'react'
import { Drinks, Meals, Shawarma, Snacks, TopPick } from './Food'
import BreakFastIcon from '@mui/icons-material/FreeBreakfast';
import LunchIcon from '@mui/icons-material/LunchDining';
import DessertIcon from '@mui/icons-material/Icecream';
import DrinksIcon from '@mui/icons-material/BrunchDining';
import { createTheme, ThemeProvider } from '@mui/system';
import styles from '../../styles/Menu.module.scss'

//Mui
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#e78d26',
    },
    secondary: {
      main: '#000',
    },
  },
});

const Menu = () => {
  //food sections
  const [foodType, setFoodType] = useState(false, false, false, false)

  //render clicked food Type
  const handelFoodTypeClick = (index) => {
    setFoodType()
  }
  
  return (
    <div className={styles.menu}>
      <section id={styles.header}>
        <article className={styles}></article>
      </section>
        <section>
            <TopPick />
            <Meals />
            <Snacks />
            <Shawarma />
            <Drinks />
        </section>
    </div>
  )
}

export default Menu