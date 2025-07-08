import type { DogsImagesProps } from './types';
import useHover from './useHover';
// import withHover from './withHover';
import withLoader from './withLoader';

function DogImages(props: DogsImagesProps) {
  const [ hoverRef, isHover ] = useHover()
  
  return (
    // <div onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseEnter}>
    //   {props?.hovering && <div id='hover' className='bg-violet-500 text-white rounded-lg inline-block p-2 mb-4'>Hovering!</div>}
    <div ref={hoverRef}>
      {isHover && <div id='hover' className='bg-violet-500 text-white rounded-lg inline-block p-2 mb-4'>Hovering!</div>}

      <div id='list' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
        {props.data.message.map((dog, index) => (
          <img src={dog} alt='Dog' key={index} />
        ))}
      </div>
    </div>
  );
}

const DogImagesWithLoader = withLoader<DogsImagesProps>(
  DogImages,
  'https://dog.ceo/api/breed/labrador/images/random/6'
);
export default DogImagesWithLoader

// const DogImagesWithHover = withHover<DogsImagesProps>(DogImagesWithLoader);
// export default DogImagesWithHover;
