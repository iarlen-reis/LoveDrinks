import { render } from '@testing-library/react'
import Header from '@/components/Header'
import '@testing-library/jest-dom'

const renderHeader = () => {
  return render(<Header />)
}

describe('Header component', () => {
  it('should render correctly', () => {
    renderHeader()
  })

  it('should have a logo with href to </> and text <I loveDrinks>', () => {
    const { getByRole } = renderHeader()

    const logoLink = getByRole('link', {
      name: 'link de navegação para a página inicial',
    })

    expect(logoLink).toHaveAttribute('href', '/')

    expect(logoLink).toHaveTextContent('I loveDrinks')
  })

  it('should have a link with href to </sobre> and text <Sobre>', () => {
    const { getByRole } = renderHeader()

    const aboutLink = getByRole('link', {
      name: 'link de navegação para a página sobre',
    })

    expect(aboutLink).toHaveAttribute('href', '/sobre')
    expect(aboutLink).toHaveTextContent('Sobre')
  })

  it('should have a link with href to <https://www.thecocktaildb.com/api.php> and text <API>', () => {
    const { getByRole } = renderHeader()

    const apiLink = getByRole('link', {
      name: 'link de navegação para a página da TheCocktailDB',
    })

    expect(apiLink).toHaveAttribute(
      'href',
      'https://www.thecocktaildb.com/api.php',
    )

    expect(apiLink).toHaveTextContent('API')
  })
})
