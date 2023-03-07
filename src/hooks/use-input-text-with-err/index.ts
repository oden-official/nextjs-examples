import { ChangeEventHandler, useState } from 'react';

export const useInputTextWithErr = (init: string, errHandler: (str: string) => string | null): [string, ChangeEventHandler<HTMLInputElement>, string | null] => {
  const [val, setVal] = useState<string>(init)
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setVal(value);
  }
  const err = errHandler(val);
  return [val, onChange, err];
}