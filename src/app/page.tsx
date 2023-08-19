import styles from './Home.module.css'
import { initialDrinks } from '@/utils/initialDrinks'
import DrinkCard from '@/components/DrinkCard'
import Search from '@/components/Search'

export default async function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.information__container}>
        <div className={styles.home__apresentation}>
          <h1>I love Drinks</h1>
          <p>Your favorite drink is here!</p>
        </div>
        <Search />
      </div>
      <div className={styles.drink__cards}>
        {initialDrinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            idDrink={drink.idDrink}
            strDrinkThumb={drink.strDrinkThumb}
            strDrink={drink.strDrink}
          />
        ))}
      </div>
    </div>
  )
}
