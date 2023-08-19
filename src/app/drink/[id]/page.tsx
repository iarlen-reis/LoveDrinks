import styles from './Drink.module.css'
import { api } from '@/utils/axios'
import PageNavigation from '@/components/PageNavigaiton'

import {
  ShoppingBasketIcon,
  DotIcon,
  PenSquareIcon,
  MartiniIcon,
} from 'lucide-react'
import DrinkImage from '@/components/DrinkImage'
import DrinkCategory from '@/components/DrinkCategory'
import DrinkIngredients from '@/components/DrinkIngredients'
import DrinkInstruction from '@/components/DrinkInstruction'

interface IParamsProps {
  params: {
    id: string
  }
}

interface IDrinkProps {
  drinks: {
    idDrink: string
    strDrink: string
    strCategory: string
    strAlcoholic: string
    strInstructions: string
    strDrinkThumb: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
  }[]
}
const Drink = async ({ params }: IParamsProps) => {
  const response = await api.get<IDrinkProps>(`/lookup.php?i=${params.id}`)

  const data = response.data

  const drink = data.drinks[0]

  return (
    <div className={styles.drink}>
      <PageNavigation to="/" label={drink.strDrink} />
      <div className={styles.drink__container}>
        <DrinkImage src={drink.strDrinkThumb} alt={drink.strDrink} />
        <div className={styles.drink__information}>
          <h1>
            {drink.strDrink}
            <MartiniIcon />
          </h1>
          <DrinkCategory
            category={drink.strCategory}
            isAlcoholic={drink.strAlcoholic}
          />
          <DrinkIngredients
            ingredient1={drink.strIngredient1}
            ingredient2={drink.strIngredient2}
            ingredient3={drink.strIngredient3}
            ingredient4={drink.strIngredient4}
          />
          <DrinkInstruction instruction={drink.strInstructions} />
        </div>
      </div>
    </div>
  )
}

export default Drink
