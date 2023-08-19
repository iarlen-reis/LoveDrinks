import { DotIcon, ShoppingBasketIcon } from 'lucide-react'
import styles from './DrinkIngredients.module.css'

interface IDrinkIngredientsProps {
  ingredient1: string
  ingredient2: string
  ingredient3: string
  ingredient4: string
}
const DrinkIngredients = ({
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
}: IDrinkIngredientsProps) => {
  return (
    <div className={styles.drink__ingredients}>
      <h2>
        Ingredients
        <ShoppingBasketIcon />
      </h2>
      <ul>
        {ingredient1 && (
          <li>
            <DotIcon />
            {ingredient1}
          </li>
        )}
        {ingredient2 && (
          <li>
            <DotIcon />
            {ingredient2}
          </li>
        )}
        {ingredient3 && (
          <li>
            <DotIcon />
            {ingredient3}
          </li>
        )}
        {ingredient4 && (
          <li>
            <DotIcon />
            {ingredient4}
          </li>
        )}
      </ul>
    </div>
  )
}

export default DrinkIngredients
