import DrinkCard from '@/components/DrinkCard'
import styles from './Search.module.css'
import { api } from '@/utils/axios'
import NotFoundDrink from '/public/mojito.png'
import Image from 'next/image'
import PageNavigation from '@/components/PageNavigaiton'

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
      <div className={styles.search__info}>
        <PageNavigation to="/" label={params.searchParams.q} />
        <h1>Resultados para: {params.searchParams.q}</h1>
      </div>
      <div className={styles.search__cards}>
        {data.drinks &&
          data.drinks.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              idDrink={drink.idDrink}
              strDrinkThumb={drink.strDrinkThumb}
              strDrink={drink.strDrink}
            />
          ))}
      </div>
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
