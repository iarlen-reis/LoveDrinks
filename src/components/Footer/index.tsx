import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <a
          href="https://github.com/iarlen-reis/"
          aria-label="link de navegação para o github do Iarlen Reis"
        >
          &copy; Iarlen Reis 2023
        </a>
      </div>
    </footer>
  )
}

export default Footer
