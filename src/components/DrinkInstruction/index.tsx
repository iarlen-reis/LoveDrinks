import { PenSquareIcon } from 'lucide-react'
import styles from './DrinkInstruction.module.css'

interface IDrinkInstructionProps {
  instruction: string
}
const DrinkInstruction = ({ instruction }: IDrinkInstructionProps) => {
  return (
    <div className={styles.drink__instructions}>
      <h2>
        Instructions
        <PenSquareIcon />
      </h2>
      <p>{instruction}</p>
    </div>
  )
}

export default DrinkInstruction
