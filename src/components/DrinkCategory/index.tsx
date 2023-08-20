'use client'
import { InfoIcon } from 'lucide-react'
import styles from './DrinkCategory.module.css'
import { Fade } from 'react-awesome-reveal'

interface IDrinkCategoryProps {
  category: string
  isAlcoholic: string
}

const DrinkCategory = ({ category, isAlcoholic }: IDrinkCategoryProps) => {
  return (
    <div className={styles.drink__category}>
      <Fade direction="left" triggerOnce>
        <h2>
          Informations
          <InfoIcon />
        </h2>
      </Fade>
      <Fade direction="up" cascade triggerOnce>
        <ul>
          <li>
            <span>Category:</span> {category}
          </li>
          <li>
            <span>Alcoholic?:</span> {isAlcoholic}
          </li>
        </ul>
      </Fade>
    </div>
  )
}

export default DrinkCategory
