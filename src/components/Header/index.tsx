import Link from 'next/link'
import { WineIcon } from 'lucide-react'
import styles from './Header.module.css'
import MenuMobile from '../MenuMobile'
import MobileButton from '../MobileButton'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="link de navegação para a página inicial"
        >
          <div>
            <span>I love</span>
            <span>Drinks</span>
          </div>
          <WineIcon size={25} />
        </Link>
        <MenuMobile />
        <MobileButton />
      </div>
    </header>
  )
}

export default Header
