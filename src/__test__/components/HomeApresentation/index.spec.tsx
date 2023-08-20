import { render } from '@testing-library/react'
import HomeApresentation from '@/components/HomeApresentation'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderHomeApresentation = () => {
  return render(<HomeApresentation />)
}

describe('HomeApresentation component', () => {
  it('should render HomeApresentation component', () => {
    renderHomeApresentation()
  })

  it('should have a h1 with text <I love Drinks>', () => {
    const { getByRole } = renderHomeApresentation()

    const h1 = getByRole('heading', {
      level: 1,
    })

    expect(h1).toHaveTextContent('I love Drinks')
  })

  it('should have a paragraph with text <Your favorite drink is here!>', () => {
    const { getByText } = renderHomeApresentation()

    const p = getByText('Your favorite drink is here!')

    expect(p).toBeInTheDocument()
  })
})
