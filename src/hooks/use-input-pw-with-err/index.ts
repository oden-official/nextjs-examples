import { ChangeEventHandler, useState } from 'react';

export const useInputPwWithErr = ([pwInit, pwConfirmInit]: [string, string], errHandler: (pw: string, pwConfirm: string) => string | null): [[string, ChangeEventHandler<HTMLInputElement>], [string, ChangeEventHandler<HTMLInputElement>], string | null] => {
  const [pw, setPw] = useState<string>(pwInit)
  const [pwConfirm, setPwConfrim] = useState<string>(pwConfirmInit)
  const onChangePw: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setPw(value);
  }
  const onChangePwConfirm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setPwConfrim(value);
  }
  const err = errHandler(pw, pwConfirm);
  return [[pw, onChangePw], [pwConfirm, onChangePwConfirm], err];
}