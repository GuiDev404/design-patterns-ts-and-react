import { use } from "react";
import { FlyOutContext } from "../context";

type Props = {
  children: React.ReactNode, 
  className?: string 
}

export default function Toggle({ children, className = '' }: Props) {
  const { toggle } = use(FlyOutContext)

  const handleToggle = ()=> toggle(prev=> !prev)

  return (
    <button onClick={handleToggle} className={`cursor-pointer flex items-center ${className}`}>
      {children}
    </button>
  );
}
