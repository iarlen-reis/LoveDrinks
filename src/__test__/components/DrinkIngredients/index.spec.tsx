import { render } from '@testing-library/react'
import DrinkIngredients from '@/components/DrinkIngredients'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderDrinkIngredients = () => {
  return render(
    <DrinkIngredients
      ingredient1="Café"
      ingredient2="Leite"
      ingredient3="Água"
      ingredient4="Açúcar"
    />,
  )
}

describe('DrinkIngredients component', () => {
  it('should render DrinkIngredients component', () => {
    const { debug } = renderDrinkIngredients()

    debug()
  })

  it('should have a h2 with text <Ingredients>', () => {
    const { getByRole } = renderDrinkIngredients()

    const h2 = getByRole('heading', {
      level: 2,
    })

    expect(h2).toHaveTextContent('Ingredients')
  })

  it('should have a li with text <Café>', () => {
    const { getAllByRole } = renderDrinkIngredients()

    const liCafe = getAllByRole('listitem')[0]

    expect(liCafe).toHaveTextContent('Café')
  })

  it('should have a li with text <Leite>', () => {
    const { getAllByRole } = renderDrinkIngredients()

    const liLeite = getAllByRole('listitem')[1]

    expect(liLeite).toHaveTextContent('Leite')
  })

  it('should have a li with text <Agua>', () => {
    const { getAllByRole } = renderDrinkIngredients()

    const liAgua = getAllByRole('listitem')[2]

    expect(liAgua).toHaveTextContent('Água')
  })

  it('should have a li with text <Açúcar>', () => {
    const { getAllByRole } = renderDrinkIngredients()

    const liAcucar = getAllByRole('listitem')[3]

    expect(liAcucar).toHaveTextContent('Açúcar')
  })
})
