import { useInputTextWithErr } from "src/hooks/use-input-text-with-err";
import { emailErrHandler, pwErrHandler } from './functions';
import { useInputPwWithErr } from "src/hooks/use-input-pw-with-err";

export const useStateLayer = () => {
  const [email, onChangeEmail, emailErr] = useInputTextWithErr('', emailErrHandler);
  const [[pw, onChangePw], [pwConfirm, onChangePwConfirm], pwErr] = useInputPwWithErr(['', ''], pwErrHandler);

  const ok = emailErr === null && pwErr === null;
  return {
    email,
    emailErr,
    pw,
    pwConfirm,
    pwErr,
    ok,

    onChangeEmail,
    onChangePw,
    onChangePwConfirm,
  }
}