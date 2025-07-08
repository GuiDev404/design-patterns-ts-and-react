import { OptionsIcon } from '../../components/Icons';
import FlyOut from '../FlyOut';

// const options = [
//   { id: '1', label: 'Edit' },
//   { id: '2', label: 'Delete' },
// ];

export default function FlyOutMenu() {
  return (
    <FlyOut className="min-w-[100px] flex flex-col gap-2">
      <FlyOut.Toggle className='bg-zinc-800  rounded-lg p-2 list-none text-white'>
        <OptionsIcon width={20} height={20} />
      </FlyOut.Toggle>

      <FlyOut.List className='bg-zinc-800 rounded-lg p-2  text-white'>
        <FlyOut.Item className='font-semibold px-4 py-1 cursor-pointer hover:bg-zinc-700 rounded-lg'>Edit</FlyOut.Item>
        <FlyOut.Item className='font-semibold px-4 py-1 cursor-pointer hover:bg-zinc-700 rounded-lg'>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  );
}
