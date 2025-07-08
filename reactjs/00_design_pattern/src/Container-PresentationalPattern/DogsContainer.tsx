import DogImages from './DogImages';

const dogs = [
    "https://images.dog.ceo/breeds/labrador/n02099712_3980.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_5017.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_5338.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_6248.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_7968.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_8790.jpg"
]

const DogsContainer = () => {
  // estado,efectos, para obtener los perrubis

  return <DogImages dogs={dogs} />
};

export default DogsContainer;
