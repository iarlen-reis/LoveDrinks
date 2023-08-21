import { render } from '@testing-library/react'
import Drink from '@/app/drink/[id]/page'
import '@testing-library/jest-dom'
import 'intersection-observer'
import { api } from '@/utils/axios'

interface IDrinkProps {
  drinks: {
    idDrink: string
    strDrink: string
    strCategory: string
    strAlcoholic: string
    strInstructions: string
    strDrinkThumb: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
  }[]
}

jest.mock('../../../utils/axios')
const mockedAxios = api as jest.Mocked<typeof api>

const renderDrink = async () => {
  const drinksMock: IDrinkProps = {
    drinks: [
      {
        idDrink: '14181',
        strDrink: 'Cafe Savoy',
        strDrinkThumb:
          'https://www.thecocktaildb.com/images/media/drink/vqwptt1441247711.jpg',
        strCategory: 'Coffee / Tea',
        strAlcoholic: 'Alcoholic',
        strInstructions:
          'Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.',
        strIngredient1: 'Coffee',
        strIngredient2: 'Milk',
        strIngredient3: 'Triple Sec',
        strIngredient4: 'Brandy',
      },
    ],
  }

  mockedAxios.get.mockResolvedValue({ data: drinksMock })

  const drink = await Drink({ params: { id: '1' } })
  return render(drink)
}

describe('Drink page', () => {
  it('should render Drink page', async () => {
    const { debug } = await renderDrink()

    debug()
  })

  it('should have a link with href </> and text <Página inicial>', async () => {
    const { getAllByRole } = await renderDrink()

    const linkHome = getAllByRole('link')[0]

    expect(linkHome).toHaveAttribute('href', '/')
    expect(linkHome).toHaveTextContent('Página inicial')
  })

  it('should have a text with value <Cafe Savoy>', async () => {
    const { getAllByRole } = await renderDrink()

    const textCafeSavoy = getAllByRole('listitem')[2]

    expect(textCafeSavoy).toHaveTextContent('Cafe Savoy')
  })

  it('should have a image with alt <Cafe Savoy>', async () => {
    const { getByRole } = await renderDrink()

    const imageCafeSavoy = getByRole('img')

    expect(imageCafeSavoy).toHaveAttribute('alt', 'Cafe Savoy')
  })

  it('should have a h1 with text <Cafe Savoy>', async () => {
    const { getByRole } = await renderDrink()

    const h1CafeSavoy = getByRole('heading', { level: 1 })

    expect(h1CafeSavoy).toHaveTextContent('Cafe Savoy')
  })

  it('should have a h2 with text <Informations>', async () => {
    const { getByRole } = await renderDrink()

    const h2Informations = getByRole('heading', { name: 'Informations' })

    expect(h2Informations).toHaveTextContent('Informations')
  })

  it('should have a li with text <Category: Coffee / Tea>', async () => {
    const { getAllByRole } = await renderDrink()

    const liCategory = getAllByRole('listitem')[3]

    expect(liCategory).toHaveTextContent('Category: Coffee / Tea')
  })

  it('should have a li with text <Alcoholic?: Alcoholic>', async () => {
    const { getAllByRole } = await renderDrink()

    const liAlcoholic = getAllByRole('listitem')[4]

    expect(liAlcoholic).toHaveTextContent('Alcoholic?: Alcoholic')
  })

  it('should have a h2 with text <Ingredients>', async () => {
    const { getByRole } = await renderDrink()

    const h2Ingredients = getByRole('heading', { name: 'Ingredients' })

    expect(h2Ingredients).toHaveTextContent('Ingredients')
  })

  it('should have a li with text <Coffee>', async () => {
    const { getAllByRole } = await renderDrink()

    const liCoffee = getAllByRole('listitem')[5]

    expect(liCoffee).toHaveTextContent('Coffee')
  })

  it('should have a li with text <Milk>', async () => {
    const { getAllByRole } = await renderDrink()

    const liMilk = getAllByRole('listitem')[6]

    expect(liMilk).toHaveTextContent('Milk')
  })

  it('should have a li with text <Triple Sec>', async () => {
    const { getAllByRole } = await renderDrink()

    const liTripleSec = getAllByRole('listitem')[7]

    expect(liTripleSec).toHaveTextContent('Triple Sec')
  })

  it('should have a li with text <Brandy>', async () => {
    const { getAllByRole } = await renderDrink()

    const liBrandy = getAllByRole('listitem')[8]

    expect(liBrandy).toHaveTextContent('Brandy')
  })

  it('should have a h2 with text <Instructions>', async () => {
    const { getByRole } = await renderDrink()

    const h2Instructions = getByRole('heading', { name: 'Instructions' })

    expect(h2Instructions).toHaveTextContent('Instructions')
  })

  it('should have a text with value <Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.>', async () => {
    const { getByText } = await renderDrink()

    const textInstructions = getByText(
      'Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.',
    )

    expect(textInstructions).toBeInTheDocument()
  })
})
