import { renderHook } from "@testing-library/react";
import { useInputPwWithErr } from './index';

describe("UseInputPwWithErr", () => {
  it("errHandler => null =====>>>>> null", () => {
    const init: [string, string] = ['', ''];
    const errHandler = (pw: string, pwConfrim: string) => null;
    const { result } = renderHook(() => useInputPwWithErr(init, errHandler));
    const [val, onChange, err] = result.current;
    expect(err).toEqual(null);
  })

  it("errHandler => 'err' =====>>>>> 'err'", () => {
    const init: [string, string] = ['', ''];
    const errMsg = 'err'
    const errHandler = (pw: string, pwConfrim: string) => errMsg;
    const { result } = renderHook(() => useInputPwWithErr(init, errHandler));
    const [val, onChange, err] = result.current;
    expect(err).toEqual(errMsg);
  })
})