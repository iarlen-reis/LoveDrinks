import { InfoIcon } from 'lucide-react'
import styles from './DrinkCategory.module.css'

interface IDrinkCategoryProps {
  category: string
  isAlcoholic: string
}

const DrinkCategory = ({ category, isAlcoholic }: IDrinkCategoryProps) => {
  return (
    <div className={styles.drink__category}>
      <h2>
        Informations
        <InfoIcon />
      </h2>
      <ul>
        <li>
          <span>Category:</span> {category}
        </li>
        <li>
          <span>Alcoholic?:</span> {isAlcoholic}
        </li>
      </ul>
    </div>
  )
}

export default DrinkCategory
