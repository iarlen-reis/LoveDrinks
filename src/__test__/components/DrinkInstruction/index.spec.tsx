import { render } from '@testing-library/react'
import DrinkInstruction from '@/components/DrinkInstruction'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderDrinkInstruction = () => {
  return render(<DrinkInstruction instruction="Descrição da bebida" />)
}

describe('DrinkInstruction component', () => {
  it('should render DrinkInstruction component', () => {
    renderDrinkInstruction()
  })

  it('should have a h2 with text <Instruction>', () => {
    const { getByRole } = renderDrinkInstruction()

    const h2 = getByRole('heading', {
      level: 2,
    })

    expect(h2).toHaveTextContent('Instruction')
  })

  it('should have a p with text <Descrição da bebida>', () => {
    const { getByText } = renderDrinkInstruction()

    const p = getByText('Descrição da bebida')

    expect(p).toBeInTheDocument()
  })
})
