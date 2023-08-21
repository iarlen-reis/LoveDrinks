import { render } from '@testing-library/react'
import Search from '@/app/search/page'
import '@testing-library/jest-dom'
import 'intersection-observer'
import { api } from '@/utils/axios'

jest.mock('../../../utils/axios')
const mockedAxios = api as jest.Mocked<typeof api>

const renderSearch = async () => {
  const drinksMock = {
    drinks: [
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
    ],
  }

  mockedAxios.get.mockResolvedValue({ data: drinksMock })

  const search = await Search({ searchParams: { q: 'Voodka' } })

  return render(search)
}

const renderSearchEmpty = async () => {
  const drinksMock = {}

  mockedAxios.get.mockResolvedValue({ data: drinksMock })

  const search = await Search({ searchParams: { q: 'conhaque' } })

  return render(search)
}

describe('Search page', () => {
  it('should render Search page', async () => {
    await renderSearch()
  })

  it('should have a link with href </> and text <Página inicial>', async () => {
    const { getAllByRole } = await renderSearch()

    const linkHome = getAllByRole('link')[0]

    expect(linkHome).toHaveAttribute('href', '/')
    expect(linkHome).toHaveTextContent('Página inicial')
  })

  it('should have a text with value <Voodka>', async () => {
    const { getByText } = await renderSearch()

    const textVoodka = getByText('Voodka')

    expect(textVoodka).toHaveTextContent('Voodka')
  })

  it('should hava a h1 with text <Resultados para: Voodka>', async () => {
    const { getByRole } = await renderSearch()

    const h1 = getByRole('heading', { level: 1 })

    expect(h1).toHaveTextContent('Resultados para: Voodka')
  })

  it('should have a DrinkCard with a image with alt <Café>, a text with value <Café> and a link to <drink/1>', async () => {
    const { getAllByRole, getByText } = await renderSearch()

    const imageCafe = getAllByRole('img')[0]
    const textCafe = getByText('Café')
    const linkCafe = getAllByRole('link')[1]

    expect(imageCafe).toHaveAttribute('alt', 'Café')
    expect(textCafe).toHaveTextContent('Café')
    expect(linkCafe).toHaveAttribute('href', 'drink/1')
  })

  it('should have a DrinkCard with a image with alt <Leite>, a text with value <Leite> and a link to <drink/2>', async () => {
    const { getAllByRole, getByText } = await renderSearch()

    const imageLeite = getAllByRole('img')[1]
    const textLeite = getByText('Leite')
    const linkLeite = getAllByRole('link')[2]

    expect(imageLeite).toHaveAttribute('alt', 'Leite')
    expect(textLeite).toHaveTextContent('Leite')
    expect(linkLeite).toHaveAttribute('href', 'drink/2')
  })
})

describe('Search page empty', () => {
  it('should render Search page empty', async () => {
    const { debug } = await renderSearchEmpty()

    debug()
  })

  it('should have a link with href </> and text <Página inicial>', async () => {
    const { getAllByRole } = await renderSearchEmpty()

    const linkHome = getAllByRole('link')[0]

    expect(linkHome).toHaveAttribute('href', '/')
    expect(linkHome).toHaveTextContent('Página inicial')
  })

  it('should have a text with value <conhaque>', async () => {
    const { getByText } = await renderSearchEmpty()

    const textConhaque = getByText('conhaque')

    expect(textConhaque).toHaveTextContent('conhaque')
  })

  it('should have a h1 with text <Resultados para: conhaque>', async () => {
    const { getByRole } = await renderSearchEmpty()

    const h1 = getByRole('heading', { name: 'Resultados para: conhaque' })

    expect(h1).toHaveTextContent('Resultados para: conhaque')
  })

  it('should have a h1 with text <Nenhum resultado encontrado>', async () => {
    const { getByRole } = await renderSearchEmpty()

    const h1 = getByRole('heading', { name: 'Nenhum resultado encontrado' })

    expect(h1).toHaveTextContent('Nenhum resultado encontrado')
  })
})
