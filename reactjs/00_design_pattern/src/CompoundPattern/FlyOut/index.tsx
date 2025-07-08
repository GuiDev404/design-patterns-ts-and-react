import React, { use, useState } from 'react'
import { FlyOutContext } from './context'

export default function FlyOut({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const [ open, toggle ] = useState(false)

  return (
    <FlyOutContext value={{ open, toggle }}>
      <div className={`absolute right-5 top-5 ${className}`}>
        {children}
      </div>
      
    </FlyOutContext>
  )
}

type ToggleProps = {
  children: React.ReactNode, 
  className?: string 
}

function Toggle({ children, className = '' }: ToggleProps) {
  const { toggle } = use(FlyOutContext)

  const handleToggle = ()=> toggle(prev=> !prev)

  return (
    <button onClick={handleToggle} className={`cursor-pointer  inline-flex self-end items-center ${className}`}>
      {children}
    </button>
  );
}

type ListProps = {
  children: React.ReactNode
  className?: string
}

function List({ children, className = ''  }: ListProps) {
  const { open } = use(FlyOutContext)

  return open ? <ul className={`${className}`}> {children} </ul> : null
}

type PropsItem = {
  children: React.ReactNode
  className?: string
}

function Item({ children, className }: PropsItem){
  return <li className={className}>{children}</li>
}

FlyOut.Toggle = Toggle

FlyOut.Item = Item;
FlyOut.List = List