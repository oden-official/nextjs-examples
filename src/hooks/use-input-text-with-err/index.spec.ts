import { renderHook } from "@testing-library/react";
import { useInputTextWithErr } from 'src/hooks/use-input-text-with-err';

describe("UseInputTextWithErr", () => {
  it("errHandler => null =====>>>>> null", () => {
    const init = '';
    const errHandler = (str: string) => null;
    const { result } = renderHook(() => useInputTextWithErr(init, errHandler));
    const [val, onChange, err] = result.current;
    expect(err).toEqual(null);
  })

  it("errHandler => 'err' =====>>>>> 'err'", () => {
    const init = '';
    const errMsg = 'err'
    const errHandler = (str: string) => errMsg;
    const { result } = renderHook(() => useInputTextWithErr(init, errHandler));
    const [val, onChange, err] = result.current;
    expect(err).toEqual(errMsg);
  })
})