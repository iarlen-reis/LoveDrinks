import { render } from '@testing-library/react'
import LinkNavigation from '@/components/LinkNavigation'
import '@testing-library/jest-dom'

const renderLinkNavigation = () => {
  return render(
    <LinkNavigation
      to="/"
      label="Página inicial"
      arialLabel="link de navegação para a página inicial"
    />,
  )
}

describe('LinkNavigation component', () => {
  it('should render the component', () => {
    renderLinkNavigation()
  })

  it('should have a link with href </> and text <Página inicial>', () => {
    const { getByRole } = renderLinkNavigation()

    const link = getByRole('link', {
      name: 'link de navegação para a página inicial',
    })

    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveTextContent('Página inicial')
  })
})
