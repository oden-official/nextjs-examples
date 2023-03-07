import { PrimitiveAtom, useAtom } from "jotai";
import { ChangeEventHandler } from 'react';

interface Props {
  h2: string;
  atom: PrimitiveAtom<string>;
}

const Item: React.FunctionComponent<Props> = ({ h2, atom }) => {
  const [input, setInput] = useAtom(atom);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInput(value);
  }

  return <div>
    <h2>{h2}</h2>
    <input type="text" value={input} onChange={onChange} />
  </div>
}

export default Item;
