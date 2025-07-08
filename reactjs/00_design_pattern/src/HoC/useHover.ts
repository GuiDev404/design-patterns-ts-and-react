import { useEffect, useRef, useState } from "react"

const useHover = () => {
  const [ isHover, setIsHover ] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const handleMouseEnter = ()=> setIsHover(true)
  const handleMouseLeave = ()=> setIsHover(false)
  
  useEffect(()=> {
    const node = ref.current

    if (node){
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('mouseleave', handleMouseLeave)
      return ()=> {
        node.removeEventListener('mouseenter', handleMouseEnter)
        node.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

  }, [ref])


  return [ ref, isHover ]
}

export default useHover