import { usePathname } from 'next/navigation'
import styles from './LinkNavigation.module.css'
import Link from 'next/link'

interface LinkNavigationProps {
  to: string
  label: string
  target?: string
  arialLabel: string
}

const LinkNavigation = ({
  to,
  label,
  arialLabel,
  target,
}: LinkNavigationProps) => {
  const pathname = usePathname()
  return (
    <li className={`${pathname === to ? styles.active : ''} ${styles.link}`}>
      <Link href={to} target={target} aria-label={arialLabel}>
        {label}
      </Link>
    </li>
  )
}

export default LinkNavigation
