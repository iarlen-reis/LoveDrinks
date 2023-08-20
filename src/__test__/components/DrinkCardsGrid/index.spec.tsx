import { render } from '@testing-library/react'
import DrinkCardsGrid from '@/components/DrinkCardsGrid'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderDrinkCardsGrid = () => {
  const drinks = [
    {
      idDrink: '1',
      strDrink: 'Café',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg',
    },
    {
      idDrink: '2',
      strDrink: 'Leite',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg',
    },
  ]
  return render(<DrinkCardsGrid drinks={drinks} />)
}

describe('DrinkCardsGrid component', () => {
  it('should render DrinkCardsGrid component', () => {
    renderDrinkCardsGrid()
  })

  it('should have a img with src and alt with value <Café>', () => {
    const { getAllByRole } = renderDrinkCardsGrid()

    const imgCafe = getAllByRole('img')[0]

    expect(imgCafe).toHaveAttribute('src')
    expect(imgCafe).toHaveAttribute('alt', 'Café')
  })

  it('should have a img with src and alt with value <Leite>', () => {
    const { getAllByRole } = renderDrinkCardsGrid()

    const imgLeite = getAllByRole('img')[1]

    expect(imgLeite).toHaveAttribute('src')
    expect(imgLeite).toHaveAttribute('alt', 'Leite')
  })

  it('should have a text with value <Café>', () => {
    const { getByText } = renderDrinkCardsGrid()

    const textCafe = getByText('Café')

    expect(textCafe).toBeInTheDocument()
  })

  it('should have a text with value <Leite>', () => {
    const { getByText } = renderDrinkCardsGrid()

    const textLeite = getByText('Leite')

    expect(textLeite).toBeInTheDocument()
  })

  it('should have a link with href to <drink/1>', () => {
    const { getAllByRole } = renderDrinkCardsGrid()

    const linkCafe = getAllByRole('link')[0]

    expect(linkCafe).toHaveAttribute('href', 'drink/1')
  })

  it('should have a link with href to <drink/2>', () => {
    const { getAllByRole } = renderDrinkCardsGrid()

    const linkLeite = getAllByRole('link')[1]

    expect(linkLeite).toHaveAttribute('href', 'drink/2')
  })
})
