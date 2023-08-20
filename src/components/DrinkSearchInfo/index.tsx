'use client'
import { Fade } from 'react-awesome-reveal'
import PageNavigation from '../PageNavigaiton'
import styles from './DrinkSearchInfo.module.css'

interface IDrinkSearchInfoProps {
  label: string
}

const DrinkSearchInfo = ({ label }: IDrinkSearchInfoProps) => {
  return (
    <div className={styles.search__info}>
      <PageNavigation to="/" label={label} />
      <Fade direction="left" triggerOnce>
        <h1>Resultados para: {label}</h1>
      </Fade>
    </div>
  )
}

export default DrinkSearchInfo
