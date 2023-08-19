import Image from 'next/image'
import styles from './DrinkImage.module.css'

interface IDrinkImageProps {
  src: string
  alt: string
}
const DrinkImage = ({ src, alt }: IDrinkImageProps) => {
  return (
    <div className={styles.drink__image}>
      <Image src={src} alt={alt} width={600} height={400} />
    </div>
  )
}

export default DrinkImage
