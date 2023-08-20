'use client'
import { Fade } from 'react-awesome-reveal'
import DrinkCard from '../DrinkCard'
import styles from './DrinkCardsGrid.module.css'

interface IDrinkCardsGridProps {
  drinks: {
    idDrink: string
    strDrinkThumb: string
    strDrink: string
  }[]
}

const DrinkCardsGrid = ({ drinks }: IDrinkCardsGridProps) => {
  return (
    <div className={styles.drink__cards}>
      <Fade direction="up" cascade triggerOnce>
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            idDrink={drink.idDrink}
            strDrinkThumb={drink.strDrinkThumb}
            strDrink={drink.strDrink}
          />
        ))}
      </Fade>
    </div>
  )
}

export default DrinkCardsGrid
