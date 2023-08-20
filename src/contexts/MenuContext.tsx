import { createContext, useContext, useState } from 'react'

interface IMenuContext {
  isMenuOpen: boolean
  handleToogleMenu: () => void
}

export const MenuContext = createContext<IMenuContext>({
  isMenuOpen: false,
  handleToogleMenu: () => ({}),
})

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleToogleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleToogleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => useContext(MenuContext)
