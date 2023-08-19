import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <a href="https://github.com/iarlen-reis/">&copy; Iarlen Reis 2023</a>
      </div>
    </footer>
  )
}

export default Footer
