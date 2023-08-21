import styles from './Home.module.css'
import Search from '@/components/Search'
import HomeApresentation from '@/components/HomeApresentation'
import DrinkCardsGrid from '@/components/DrinkCardsGrid'
import { initialDrinks } from '@/utils/initialDrinks'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.information__container}>
        <HomeApresentation />
        <Search />
      </div>
      <DrinkCardsGrid drinks={initialDrinks} />
    </div>
  )
}
