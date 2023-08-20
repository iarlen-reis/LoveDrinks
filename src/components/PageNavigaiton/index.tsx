'use client'

import Link from 'next/link'
import styles from './PageNavigation.module.css'
import { Fade } from 'react-awesome-reveal'

interface IPageNavigationProps {
  to: string
  label: string
}
const PageNavigation = ({ to, label }: IPageNavigationProps) => {
  return (
    <Fade direction="up" triggerOnce>
      <ul className={styles.navigation}>
        <li>
          <Link href={to} aria-label="link de navegação para a página inicial">
            Página inicial
          </Link>
        </li>
        <li>&gt;</li>
        <li>{label}</li>
      </ul>
    </Fade>
  )
}

export default PageNavigation
