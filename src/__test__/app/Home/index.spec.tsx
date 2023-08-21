import { render } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderHome = () => {
  return render(<Home />)
}

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }
  },
}))

describe('Home page', () => {
  it('should render Home page', () => {
    renderHome()
  })

  it('should have a h1 with text <I love Drinks>', () => {
    const { getByRole } = renderHome()

    const h1 = getByRole('heading', {
      level: 1,
    })

    expect(h1).toHaveTextContent('I love Drinks')
  })

  it('should have a paragraph with text <Your favorite drink is here!>', () => {
    const { getByText } = renderHome()

    const p = getByText('Your favorite drink is here!')

    expect(p).toBeInTheDocument()
  })

  it('should have a input search with placeholder <Find drinks...>', () => {
    const { getByPlaceholderText } = renderHome()

    const input = getByPlaceholderText('Find drinks...')

    expect(input).toBeInTheDocument()
  })

  it('should have a button with type <submit>', () => {
    const { getByRole } = renderHome()

    const button = getByRole('button')

    expect(button).toHaveAttribute('type', 'submit')
  })

  it('should have a DrinkCard with a image with alt <Bramble>, a text with value <Bramble> and a link with href <drink/17210>', () => {
    const { getAllByRole, getByText } = renderHome()

    const imageBramble = getAllByRole('img')[1]
    const textBramble = getByText('Bramble')
    const linkBramble = getAllByRole('link')[0]

    expect(imageBramble).toHaveAttribute('alt', 'Bramble')
    expect(textBramble).toBeInTheDocument()
    expect(linkBramble).toHaveAttribute('href', 'drink/17210')
  })

  it('should have a DrinkCard with a image with alt <Boxcar>, a text with value <Boxcar> and a link with href <drink/11149>', () => {
    const { getAllByRole, getByText } = renderHome()

    const imageBoxcar = getAllByRole('img')[2]
    const textBoxcar = getByText('Boxcar')
    const linkBoxcar = getAllByRole('link')[1]

    expect(imageBoxcar).toHaveAttribute('alt', 'Boxcar')
    expect(textBoxcar).toBeInTheDocument()
    expect(linkBoxcar).toHaveAttribute('href', 'drink/11149')
  })

  it('should have a DrinkCard with a image with alt <Turf Cocktail>, a text with value <Turf Cocktail> and a link with href <drink/12418>', () => {
    const { getAllByRole, getByText } = renderHome()

    const imageTurfCocktail = getAllByRole('img')[3]
    const textTurfCocktail = getByText('Turf Cocktail')
    const linkTurfCocktail = getAllByRole('link')[2]

    expect(imageTurfCocktail).toHaveAttribute('alt', 'Turf Cocktail')
    expect(textTurfCocktail).toBeInTheDocument()
    expect(linkTurfCocktail).toHaveAttribute('href', 'drink/12418')
  })

  it('should have a DrinkCard with a image with alt <Gin Smash>, a text with value <Gin Smash> and a link with href <drink/11416>', () => {
    const { getAllByRole, getByText } = renderHome()

    const imageGinSmash = getAllByRole('img')[4]
    const textGinSmash = getByText('Gin Smash')
    const linkGinSmash = getAllByRole('link')[3]

    expect(imageGinSmash).toHaveAttribute('alt', 'Gin Smash')
    expect(textGinSmash).toBeInTheDocument()
    expect(linkGinSmash).toHaveAttribute('href', 'drink/11416')
  })

  it('should have a DrinkCard with a image with alt <Thai Coffee>, a text with value <Thai Coffee> and a link with href <drink/12782>', () => {
    const { getAllByRole, getByText } = renderHome()

    const imageThaiCoffee = getAllByRole('img')[5]
    const textThaiCoffee = getByText('Thai Coffee')
    const linkThaiCoffee = getAllByRole('link')[4]

    expect(imageThaiCoffee).toHaveAttribute('alt', 'Thai Coffee')
    expect(textThaiCoffee).toBeInTheDocument()
    expect(linkThaiCoffee).toHaveAttribute('href', 'drink/12782')
  })

  it('should have a DrinkCard with a image with alt <Ipamena>, a text with value <Ipamena> and a link with href <drink/17176>', () => {
    const { getAllByRole, getByText } = renderHome()

    const imageIpamena = getAllByRole('img')[6]
    const textIpamena = getByText('Ipamena')
    const linkIpamena = getAllByRole('link')[5]

    expect(imageIpamena).toHaveAttribute('alt', 'Ipamena')
    expect(textIpamena).toBeInTheDocument()
    expect(linkIpamena).toHaveAttribute('href', 'drink/17176')
  })
})
