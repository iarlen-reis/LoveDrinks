'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MenuIcon, XIcon, WineIcon } from 'lucide-react'
import styles from './Header.module.css'
import LinkNavigation from '../LinkNavigation'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleToogleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.logo}>
          <div>
            <span>I love</span>
            <span>Drinks</span>
          </div>
          <WineIcon size={25} />
        </Link>
        <div
          className={`${styles.navigation__container} ${
            menuOpen ? styles.open : ''
          }`}
        >
          <nav className={styles.navigation}>
            <ul>
              <LinkNavigation to="/sobre" label="Sobre" />
              <LinkNavigation
                to="https://www.thecocktaildb.com/api.php"
                label="API"
                target="_blank"
              />
            </ul>
          </nav>
        </div>
        <button className={styles.menu__button} onClick={handleToogleMenu}>
          {menuOpen ? <XIcon size={30} /> : <MenuIcon size={30} />}
        </button>
      </div>
    </header>
  )
}

export default Header
