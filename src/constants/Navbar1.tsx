import { HiHome } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { VscLibrary } from 'react-icons/vsc';

export const NAVBAR1 = {
  Home: {
    icon: <HiHome />,
    className: 'active',
  },
  Search: {
    icon: <BsSearch />,
    className: '',
  },
  'Your Library': {
    icon: <VscLibrary />,
    className: '',
  },
};
