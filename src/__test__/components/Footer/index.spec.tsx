import { render } from '@testing-library/react'
import Footer from '@/components/Footer'
import '@testing-library/jest-dom'

const renderFooter = () => {
  return render(<Footer />)
}

describe('Footer component', () => {
  it('should render correctly', () => {
    renderFooter()
  })

  it('should have a link with href <https://github.com/iarlen-reis> and text <© Iarlen Reis 2023>', () => {
    const { getByRole } = renderFooter()

    const link = getByRole('link', {
      name: 'link de navegação para o github do Iarlen Reis',
    })

    expect(link).toHaveAttribute('href', 'https://github.com/iarlen-reis/')
    expect(link).toHaveTextContent('© Iarlen Reis 2023')
  })
})
