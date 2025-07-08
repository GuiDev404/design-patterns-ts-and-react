import React, { createContext } from 'react'

type ContextState = {
  open: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const FlyOutContext = createContext<ContextState>({ 
  open: false,
  toggle: ()=> {}
})