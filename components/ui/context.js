import React from 'react'

const initialState = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
}

export const UIContext = React.createContext(initialState)

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext = ({ children }) => (
  <>
    {children}
  </>
)