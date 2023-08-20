'use client'

import { Fade } from 'react-awesome-reveal'
import styles from './HomeApresentation.module.css'

const HomeApresentation = () => {
  return (
    <div className={styles.home__apresentation}>
      <Fade direction="left" cascade triggerOnce>
        <h1>I love Drinks</h1>
        <p>Your favorite drink is here!</p>
      </Fade>
    </div>
  )
}

export default HomeApresentation
