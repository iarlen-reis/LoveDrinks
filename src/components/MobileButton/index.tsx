'use client'
import { useMenuContext } from '@/contexts/MenuContext'
import styles from './MobileButton.module.css'
import { MenuIcon, XIcon } from 'lucide-react'

const MobileButton = () => {
  const { isMenuOpen, handleToogleMenu } = useMenuContext()
  return (
    <button className={styles.menu__button} onClick={handleToogleMenu}>
      {isMenuOpen ? (
        <XIcon size={30} role="img" />
      ) : (
        <MenuIcon size={30} role="img" />
      )}
    </button>
  )
}

export default MobileButton
