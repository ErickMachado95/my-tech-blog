import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../sass/navbar.module.sass'

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
        <li>
          <Link to='/about'>About</Link> 
        </li>
      </ul>
    </nav>
  )
}

export default NavBar