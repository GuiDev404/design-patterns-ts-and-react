import { use } from "react"
import { FlyOutContext } from "../context"

type Option = {
  id: string
  label: string
}

type Props = {
  options: Option[]
  className?: string
}

export default function List({ options, className = ''  }: Props) {
  const { open } = use(FlyOutContext)

  return open && (
    <ul className={`${className}`}>
      {options.map(option=> <li key={option.id}> {option.label} </li>)}
    </ul>
  )
}
