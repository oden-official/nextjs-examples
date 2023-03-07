import { fireEvent, render, screen } from '@testing-library/react'
import BasicModule from 'src/modules/basic'
import '@testing-library/jest-dom'
import { EMAIL_ERR } from 'src/modules/basic/data';

describe("BasicModule", () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(<BasicModule />).container;
  })

  it("snapshot", () => {
    expect(container).toMatchSnapshot()
  })

  describe("email input", () => {
    it(`email ok ====>>>>> null`, async () => {
      const emailEl = screen.getByRole('email')
      fireEvent.change(emailEl, { target: { value: "test@test.co.kr" } });
      
      const emailErrEl = screen.getByRole('emailErr');
      expect(emailErrEl).toBeEmptyDOMElement();
    })
  
    it(`email Err ====>>>>> text should be ${EMAIL_ERR.NOT_VALID}`, async () => {
      const emailEl = screen.getByRole('email')
      fireEvent.change(emailEl, { target: { value: "test" } });
      
      const emailErrEl = screen.getByRole('emailErr');
      expect(emailErrEl).toHaveTextContent(EMAIL_ERR.NOT_VALID);
    })
  })
  
})