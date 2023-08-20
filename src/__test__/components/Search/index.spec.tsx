import { render } from '@testing-library/react'
import Search from '@/components/Search'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderSearch = () => {
  return render(<Search />)
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

describe('Search component', () => {
  it('should render Search component', () => {
    renderSearch()
  })

  it('should have input', () => {
    const { getByRole } = renderSearch()

    const input = getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  it('should have button with a type <submit>', () => {
    const { getByRole } = renderSearch()

    const button = getByRole('button')

    expect(button).toHaveAttribute('type', 'submit')
  })

  it('should have a search icon with a class <lucide-search>', () => {
    const { getByRole } = renderSearch()

    const icon = getByRole('img')

    expect(icon).toHaveClass('lucide-search')
  })
})
