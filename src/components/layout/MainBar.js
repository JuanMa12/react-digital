import { NavLink } from 'react-router-dom'
import styles from './MainBar.module.css'

const MainBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.txt}>React Practice</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Register</NavLink>
          </li>
          <li>
            <NavLink to="/detail">Detalle</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainBar
