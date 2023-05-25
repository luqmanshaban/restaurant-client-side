
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {  createTheme,ThemeProvider } from '@mui/system';
//
import styles from '../styles/Navbar.module.scss';

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



function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [activeLink, setActiveLink] = useState('home')

    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
  
    const handleLinkClick = (clicked) => {
      setIsActive(false);
      setActiveLink(clicked)
    };

    /////////////////
    return (
      <nav className={`${styles.navbar}`} >
        <Link to='/' className={styles.logo}>
          <section id={styles.logo}>
            <span style={{color: '#FFA500'}}>S</span>
            <span style={{color: '#FFA500'}}>w</span>
            <span style={{color: '#FFA500'}}>a</span>
            <span>h</span>
            <span>i</span>
            <span>l</span>
            <span>i</span>
            &nbsp;
            &nbsp;
          <span>P</span>
          <span>l</span>
          <span>a</span>
          <span style={{color: '#FFA500'}}>t</span>
          <span style={{color: '#FFA500'}}>e</span>
          </section>
        </Link>
        <ul className={`${styles.navMenu}   ${isActive ? styles.isactive : ''}  
`}>
          <li className={`${styles.navItem} ${activeLink === 'home' ? styles.active : ''}`} onClick={() => handleLinkClick('home')}>
            <Link className={`${styles.link} ${styles.navLink} `} to='/'>Home</Link>
          </li>
          <li className={`${styles.navItem}  ${activeLink === 'menu'? styles.active : ''}`} onClick={() => handleLinkClick('menu')}>
            <Link className={`${styles.link} ${styles.navLink}`} to='/menu'>Menu</Link>
          </li>
          <li className={`${styles.navItem}  ${activeLink === 'contact' ? styles.active : ''}`} onClick={() => handleLinkClick('contact')}>
            <Link className={`${styles.link} ${styles.navLink}`} to='/contact'>Contact Us</Link>
          </li>
        </ul>
       <ul className={`${styles.rightNav} ${isActive ? styles.isactive : ''} `} >
        <li id={styles.cart}>
          <ThemeProvider theme={theme}>
            <ShoppingCart color='primary' sx={{cursor: 'pointer', fontSize: '30px', marginTop: '10px','&:hover': { scale: '1.2'}, transition: '0.3s ease' }}/>
          </ThemeProvider>
        </li>
          <li className={`${styles.navItem}  `} onClick={handleLinkClick}>
            <Button id={styles.signup}  variant='contained' >
              <Link className={styles.link} to='/signup'>Sign Up</Link>
            </Button>
          </li>
          <li className={`${styles.navItem} `} onClick={handleLinkClick}>
            <Link className={`${styles.navItem}`} to='/login'>
              <Button id={styles.login} variant='contained'>Login
              </Button> 
            </Link>
          </li>
       </ul>
       <div className={`${styles.hamburger}`} onClick={toggleActiveClass}>
        <span className={`${styles.bar1}  ${isActive ? styles.active : ''}`}></span>
        <span className={`${styles.bar2}  ${isActive ? styles.active : ''}`}></span>
        <span className={`${styles.bar3}  ${isActive ? styles.active : ''}`}></span>
       </div>
     </nav>
    );
  }
  


export default Navbar;