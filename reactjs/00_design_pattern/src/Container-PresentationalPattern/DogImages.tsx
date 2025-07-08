import useDogs from "./hooks/useDogs";

type Props = {
  dogs: string[];
};

export default function DogImages({ dogs }: Props) { // 
  const { dogs:perrubis, loading } = useDogs(); // esta es una alternativa al ComponentContenedor

  return perrubis.map((dog, i) => (
    <img key={i} src={dog} className='w-full h-[250px] empty:bg-gray-200 object-cover' alt='Dog' />
  ));
}
