import React from 'react';
import Logo from '../images/new-logo-burger.png';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const Nav = () => {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.img)} src={Logo} alt='burger logo'/>
      <nav className={css(styles.nav)}>
        <ul>
          <li className={css(styles.li)}>
            <Link to='/' className={css(styles.link)}>Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  nav: {
    background: '#0D0D0D',
    margin: '20px'
  },
  li: {
    listStyle: 'none',
    display:'inline',
    fontSize: '23px',
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
    width: '200px',
    height: '100px'
  }
});

export default Nav;