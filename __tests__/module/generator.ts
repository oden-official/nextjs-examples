import { SUFFIXS } from "./data";
import { calcCharSet } from "./functions";
import { CharSet } from "./types";

class Generator {
  int({ min, max }: { min: number; max: number }): number {
    return Math.floor(Math.random()*(max - min + 1)) + min;
  }

  str({ charSet, additional, min, max }: { charSet: CharSet[], additional?: string, min: number, max: number }): string {
    const length = this.int({ min, max });
    let result = '';
    const chars = additional ? calcCharSet(charSet) + additional : calcCharSet(charSet);
    const charactersLength = chars.length;
    let counter = 0;
    while (counter < length) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  email(): string {
    const username = this.str({ charSet: ['upper', 'lower', 'number'], additional: '-_', min: 3, max: 20 });
    const domain = this.str({ charSet: ['upper', 'lower', 'number'], min: 3, max: 20 });
    const select = this.int({min: 0, max: SUFFIXS.length - 1});
    const suffix = SUFFIXS[select];
    const email = username + '@' + domain + suffix;
    return email;
  }

  pw(): string {
    return this.str({ charSet: ["lower", "upper", "number", "special"], min: 5, max: 17 }) + "1a!"
  }
}

export const generator = new Generator();