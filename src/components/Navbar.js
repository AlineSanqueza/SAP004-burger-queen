import React from 'react';
import Logo from '../images/new-logo-burger.png';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const Nav = (props) => {
  return (
    <header>
      <nav className={css(styles.nav)}>
        <ul>
          <li className={css(styles.li)}>
            <Link to='/' className={css(styles.link)} onClick={props.onClick}>Sair</Link>
          </li>
        </ul>
      </nav>
        <img className={css(styles.img)} src={Logo} alt='burger logo'/>
    </header>
  );
}

const styles = StyleSheet.create({
  nav: {
    background: 'red'
  },
  li: {
    listStyle: 'none',
    marginTop: '5px',
    fontSize: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#F2F2F2',
    cursor: 'pointer',
    transition: '0.5s linear',
    ':hover': {
      color: '#D97904',
      cursor: 'pointer'
    }
  },
  img: {
    background: 'pink'
  }
  
})

export default Nav;