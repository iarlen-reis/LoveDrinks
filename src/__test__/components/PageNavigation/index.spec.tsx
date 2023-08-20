import { render } from '@testing-library/react'
import PageNavigation from '@/components/PageNavigaiton'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderPageNavigation = () => {
  return render(<PageNavigation label="Voodka" to="/" />)
}

describe('PageNavigation component', () => {
  it('should render component', () => {
    renderPageNavigation()
  })

  it('should have a link with href to </> and text <Pagina inicial>', () => {
    const { getByRole } = renderPageNavigation()

    const link = getByRole('link', {
      name: 'link de navegação para a página inicial',
    })

    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveTextContent('Página inicial')
  })

  it('should have a text with value <Voodka>', () => {
    const { getByText } = renderPageNavigation()

    const text = getByText('Voodka')

    expect(text).toBeInTheDocument()
  })
})
