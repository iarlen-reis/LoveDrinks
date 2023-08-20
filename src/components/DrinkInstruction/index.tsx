'use client'

import { PenSquareIcon } from 'lucide-react'
import styles from './DrinkInstruction.module.css'
import { Fade } from 'react-awesome-reveal'

interface IDrinkInstructionProps {
  instruction: string
}
const DrinkInstruction = ({ instruction }: IDrinkInstructionProps) => {
  return (
    <div className={styles.drink__instructions}>
      <Fade direction="left" triggerOnce>
        <h2>
          Instructions
          <PenSquareIcon />
        </h2>
      </Fade>
      <Fade delay={500} triggerOnce>
        <p>{instruction}</p>
      </Fade>
    </div>
  )
}

export default DrinkInstruction
