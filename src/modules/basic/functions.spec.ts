import { EMAIL_ERR, PW_ERR } from './data';
import { emailErrHandler, pwErrHandler } from "./functions"
import { itIter } from '../../../__tests__/module/iterate';
import { generator } from '../../../__tests__/module/generator';



describe("BasicFunctions", () => {
  describe("emailErrHandler", () => {
    it(" '' =====>>>>> '' ", () => {
      const email = '';
      const ret = emailErrHandler(email);
      expect(ret).toEqual('')
    });
    itIter(` not valid =====>>>>> ${EMAIL_ERR.NOT_VALID}`, 1, () => {
      const email = generator.str({min: 8, max: 32, charSet: ["lower", "number", "upper"]});
      const ret = emailErrHandler(email);
      expect(ret).toEqual(EMAIL_ERR.NOT_VALID);
    });
    itIter(" ok =====>>>>> null ", 1, () => {
      const email = generator.email();
      const ret = emailErrHandler(email);
      expect(ret).toEqual(null);
    });
  })

  describe("pwErrHandler", () => {
    it(" '' =====>>>>> '' ", () => {
      const pw = '';
      const pwConfrim = '';
      const ret = pwErrHandler(pw, pwConfrim);
      expect(ret).toEqual('');
    });
    itIter(` not valid =====>>>>> ${PW_ERR.NOT_VALID}`, 1, () => {
      const pw = '';
      const pwConfrim = generator.str({ charSet: ["lower", "upper", "number", "special"], min: 1, max: 32 });
      const ret = pwErrHandler(pw, pwConfrim);
      expect(ret).toEqual(PW_ERR.NOT_VALID);
    });
    itIter(` not valid =====>>>>> ${PW_ERR.NOT_VALID}`, 1, () => {
      const pw = generator.str({ charSet: ["lower", "upper", "number"], min: 1, max: 32 });;
      const pwConfrim = '';
      const ret = pwErrHandler(pw, pwConfrim);
      expect(ret).toEqual(PW_ERR.NOT_VALID)
    });
    itIter(` not valid =====>>>>> ${PW_ERR.NOT_MATCH}`, 1, () => {
      const pw = generator.pw();
      const pwConfrim = generator.str({ charSet: ["lower", "upper", "number", "special"], min: 0, max: 32 });
      if (pw === pwConfrim) return;
      const ret = pwErrHandler(pw, pwConfrim);
      expect(ret).toEqual(PW_ERR.NOT_MATCH);
    });
    itIter("ok =====>>>>> null", 1, () => {
      const pw = generator.pw();
      const pwConfrim = pw;
      const ret = pwErrHandler(pw, pwConfrim);
      expect(ret).toEqual(null);
    });
  })
})