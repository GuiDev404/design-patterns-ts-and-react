import { useEffect, useState } from 'react'

type RandomDogsResponse = {
  message: string[] | string
  status: string
}
function getRandomDogs (){
  return fetch('https://dog.ceo/api/breed/labrador/images/random/6')
    .then(async (response)=> {
      if (!response.ok){
        throw new Error('No se pudo obtener las imagenes de los perrubis')
      }

      const data = await response.json() as RandomDogsResponse

      if (data.status !== "success") {
        throw new Error('No se pudo obtener las imagenes de los perrubis') 
      }

      return data
    })
}

export default function useDogs() {
  const [loading, setLoading] = useState(true)
  const [dogs, setDogs] = useState<string[]>([])

  useEffect(()=> {
    getRandomDogs()
      .then(data=> {
        const arrayOfDogs = Array.isArray(data.message) ? data.message : [data.message]
        setDogs(arrayOfDogs)
      })
      .catch(error=> console.log(error.message))
      .finally(()=> setLoading(false))
    
  }, [])

  return { loading, dogs }
}
