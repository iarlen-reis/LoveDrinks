import styles from './Search.module.css'
import { api } from '@/utils/axios'
import NotFoundDrink from '/public/mojito.png'
import Image from 'next/image'
import DrinkSearchInfo from '@/components/DrinkSearchInfo'
import DrinkCardsGrid from '@/components/DrinkCardsGrid'

interface IParams {
  searchParams: {
    q: string
  }
}

interface IDrinksProps {
  drinks: {
    idDrink: string
    strDrinkThumb: string
    strDrink: string
  }[]
}

const Search = async (params: IParams) => {
  const response = await api.get<IDrinksProps>(
    `/search.php?s=${params.searchParams.q}`,
  )

  const data = response.data

  return (
    <div className={styles.search}>
      <DrinkSearchInfo label={params.searchParams.q} />
      <div>{data.drinks && <DrinkCardsGrid drinks={data.drinks} />}</div>
      {!data.drinks && (
        <div className={styles.not__result}>
          <h1>Nenhum resultado encontrado</h1>
          <Image
            src={NotFoundDrink}
            alt="Bebida não encontrada"
            width={400}
            height={400}
          />
        </div>
      )}
    </div>
  )
}

export default Search
