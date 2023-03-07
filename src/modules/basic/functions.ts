import { REG_EXP } from '../../data/regex';
import { EMAIL_ERR, PW_ERR } from './data';

export const emailErrHandler = (email: string) => {
  if (email === '') return '';

  const ok = REG_EXP.EMAIL.test(email);
  if (!ok) return EMAIL_ERR.NOT_VALID;
  return null;
}

export const pwErrHandler = (pw: string, pwConfirm: string) => {
  if (pw === '' && pwConfirm === '') return '';

  const ok = REG_EXP.PW.test(pw);
  if (!ok) return PW_ERR.NOT_VALID;

  if (pw !== pwConfirm) return PW_ERR.NOT_MATCH;
  
  return null;
}
