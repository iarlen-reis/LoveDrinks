import Link from 'next/link'
import styles from './DrinkCard.module.css'
import Image from 'next/image'

interface IDrinkCardProps {
  idDrink: string
  strDrinkThumb: string
  strDrink: string
}
const DrinkCard = ({ strDrinkThumb, strDrink, idDrink }: IDrinkCardProps) => {
  return (
    <div className={styles.drink__card}>
      <Image
        src={strDrinkThumb}
        alt={strDrink}
        width={340}
        height={300}
        className={styles.drink__card__image}
      />
      <div className={styles.drink__card__info}>
        <span>{strDrink}</span>
        <Link href={`drink/${idDrink}`}>Detalhes</Link>
      </div>
    </div>
  )
}

export default DrinkCard
