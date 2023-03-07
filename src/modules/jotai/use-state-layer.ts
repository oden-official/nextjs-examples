import { useAtom } from 'jotai';
import { configAtom } from '../../stores/global.store';
import { itemInputAtom } from './store';



export const useStateLayer = () => {
  const items = [
    {
      key: 1,
      h2: "1",
      atom: itemInputAtom
    },
    {
      key: 2,
      h2: "2",
      atom: itemInputAtom
    },
  ];
  const [{ email, username }, ] = useAtom(configAtom);
  

  return {
    items,
    email,
    username,
  }
}