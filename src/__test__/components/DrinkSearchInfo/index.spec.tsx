import { render } from '@testing-library/react'
import DrinkSearchInfo from '@/components/DrinkSearchInfo'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderDrinkSearchInfo = () => {
  return render(<DrinkSearchInfo label="Voodka" />)
}

describe('DrinkSearchInfo component', () => {
  it('should render DrinkSearchInfo component', () => {
    renderDrinkSearchInfo()
  })

  it('should have a link with href </> and label <Página inicial>', () => {
    const { getByRole } = renderDrinkSearchInfo()

    const link = getByRole('link')

    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveTextContent('Página inicial')
  })

  it('should have a text with label <Voodka>', () => {
    const { getByText } = renderDrinkSearchInfo()

    const text = getByText('Voodka')

    expect(text).toBeInTheDocument()
  })

  it('should have a h1 with label <Resultados para: Voodka>', () => {
    const { getByRole } = renderDrinkSearchInfo()

    const h1 = getByRole('heading', { level: 1 })

    expect(h1).toHaveTextContent('Resultados para: Voodka')
  })
})
