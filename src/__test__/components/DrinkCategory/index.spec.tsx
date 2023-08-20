import { render } from '@testing-library/react'
import DrinkCategory from '@/components/DrinkCategory'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderDrinkCategory = () => {
  return render(
    <DrinkCategory category="Coffee / Tea" isAlcoholic="Non alcoholic" />,
  )
}

describe('DrinkCategory component', () => {
  it('should render DrinkCategory component', () => {
    renderDrinkCategory()
  })

  it('should have a h2 with text <Informations>', () => {
    const { getByRole } = renderDrinkCategory()

    const h2 = getByRole('heading', { level: 2 })

    expect(h2).toHaveTextContent('Informations')
  })

  it('should have a li with text <Category: Coffee / Tea>', () => {
    const { getAllByRole } = renderDrinkCategory()

    const liCategory = getAllByRole('listitem')[0]

    expect(liCategory).toHaveTextContent('Category: Coffee / Tea')
  })

  it('should have a li with text <Alcoholic?: Non alcoholic>', () => {
    const { getAllByRole } = renderDrinkCategory()

    const liAlcoholic = getAllByRole('listitem')[1]

    expect(liAlcoholic).toHaveTextContent('Alcoholic?: Non alcoholic')
  })
})
