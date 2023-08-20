'use client'
import LinkNavigation from '../LinkNavigation'
import styles from './MenuMobile.module.css'
import { useMenuContext } from '@/contexts/MenuContext'

const MenuMobile = () => {
  const { isMenuOpen } = useMenuContext()
  return (
    <div
      className={`${styles.navigation__container} ${
        isMenuOpen ? styles.open : ''
      }`}
    >
      <nav className={styles.navigation}>
        <ul>
          <LinkNavigation
            to="/sobre"
            label="Sobre"
            arialLabel="link de navegação para a página sobre"
          />
          <LinkNavigation
            to="https://www.thecocktaildb.com/api.php"
            label="API"
            arialLabel="link de navegação para a página da TheCocktailDB"
            target="_blank"
          />
        </ul>
      </nav>
    </div>
  )
}

export default MenuMobile
