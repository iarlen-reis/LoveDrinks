import Link from 'next/link'
import styles from './PageNavigation.module.css'

interface IPageNavigationProps {
  to: string
  label: string
}
const PageNavigation = ({ to, label }: IPageNavigationProps) => {
  return (
    <ul className={styles.navigation}>
      <li>
        <Link href={to}>Página inicial</Link>
      </li>
      <li>&gt;</li>
      <li>{label}</li>
    </ul>
  )
}

export default PageNavigation
