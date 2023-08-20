import { render } from '@testing-library/react'
import MenuMobile from '@/components/MenuMobile'
import '@testing-library/jest-dom'

const renderMenuMobile = () => {
  return render(<MenuMobile />)
}

describe('MenuMobile component', () => {
  it('should render MenuMobile component', () => {
    renderMenuMobile()
  })

  it('should have a link with href </sobre> and text <Sobre>', () => {
    const { getByRole } = renderMenuMobile()

    const link = getByRole('link', {
      name: 'link de navegação para a página sobre',
    })

    expect(link).toHaveAttribute('href', '/sobre')

    expect(link).toHaveTextContent('Sobre')
  })

  it('should have a link with href to <https://www.thecocktaildb.com/api.php> and text <API>', () => {
    const { getByRole } = renderMenuMobile()

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
