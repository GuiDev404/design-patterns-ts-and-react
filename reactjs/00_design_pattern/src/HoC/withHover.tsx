/* eslint-disable @typescript-eslint/no-explicit-any */
 
import { useState } from "react"

export default function withHover<T>(Component: React.ComponentType<T>){
  return (props:any) => {
    const [isHover, setIsHover] = useState(false)

    return <Component 
      {...props}
      hovering={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    />
  }
}