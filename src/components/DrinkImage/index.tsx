'use client'
import Image from 'next/image'
import styles from './DrinkImage.module.css'
import { Zoom } from 'react-awesome-reveal'

interface IDrinkImageProps {
  src: string
  alt: string
}
const DrinkImage = ({ src, alt }: IDrinkImageProps) => {
  return (
    <Zoom direction="up" triggerOnce duration={1000}>
      <div className={styles.drink__image}>
        <Image src={src} alt={alt} width={600} height={400} />
      </div>
    </Zoom>
  )
}

export default DrinkImage
