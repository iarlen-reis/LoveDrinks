import { render } from '@testing-library/react'
import MobileButton from '@/components/MobileButton'
import '@testing-library/jest-dom'
import { MenuContext } from '@/contexts/MenuContext'

const renderMobileButton = (isMoble: boolean) => {
  return render(
    <MenuContext.Provider
      value={{ isMenuOpen: isMoble, handleToogleMenu: jest.fn() }}
    >
      <MobileButton />
    </MenuContext.Provider>,
  )
}

describe('MobileButton component', () => {
  it('should render MobileButton component', () => {
    renderMobileButton(false)
  })

  it('should have a icon with class <lucide-menu>', () => {
    const { getByRole } = renderMobileButton(false)

    const icon = getByRole('img')

    expect(icon).toHaveClass('lucide-menu')
  })

  it('should have a icon with class <lucide-x>', () => {
    const { getByRole } = renderMobileButton(true)

    const icon = getByRole('img')

    expect(icon).toHaveClass('lucide-x')
  })
})
