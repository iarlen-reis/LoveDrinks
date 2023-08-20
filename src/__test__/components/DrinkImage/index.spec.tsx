import { render } from '@testing-library/react'
import DrinkImage from '@/components/DrinkImage'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderDrinkImage = () => {
  return render(
    <DrinkImage
      src="https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg"
      alt="imagem da bebida Spiking coffee"
    />,
  )
}

describe('DrinkImage component', () => {
  it('should render DrinkImage component', () => {
    renderDrinkImage()
  })

  it('should have a image with src and alt with text <imagem da bebida Spiking coffee>', () => {
    const { getByRole } = renderDrinkImage()

    const image = getByRole('img')

    expect(image).toHaveAttribute('src')

    expect(image).toHaveAttribute('alt', 'imagem da bebida Spiking coffee')
  })
})
