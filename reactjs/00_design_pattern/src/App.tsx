// import ImageList from "./CompoundPattern/Image";
// import DogImages from "./Container-PresentationalPattern/DogImages";
// import DogsContainer from "./Container-PresentationalPattern/DogsContainer";
import DogImages from "./HoC/DogImages";

function App() {
  return (
    <div className='max-w-6xl w-[95%] mx-auto my-4'>
      <h1 className="text-3xl font-bold mb-4"> Design Patterns </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
        {/* <ImageList /> */}
        {/* <DogsContainer /> */}
        {/* <DogImages /> */}
      
      </div>
      
      <DogImages />
    </div>
  );
}

export default App;
