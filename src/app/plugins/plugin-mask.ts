import type { App } from 'vue';
// @ts-expect-error no types
import { plugin as InputFacade } from 'vue-input-facade';

interface ITokenValue {
  pattern?: RegExp;
  transform?: (token: string) => string;
  escape?: boolean;
}

interface IMaskToken {
  [key: string]: ITokenValue;
}

interface IMaskOptions {
  name: string;
  tokens: IMaskToken;
}

const inputFacadeOptions: IMaskOptions = {
  name: 'mask',
  tokens: {
    '#': { pattern: /\d/ },
    I: { pattern: /[^ЁА-яё]/ },
    C: { pattern: /[ ЁА-яё-]/ },
    E: { pattern: /[\dЁА-яё]/ },
    X: { pattern: /[\dA-Za-z]/ },
    S: { pattern: /[A-Za-z]/ },
    A: { pattern: /[A-Za-z]/, transform: (v) => v.toLocaleUpperCase() },
    a: { pattern: /[A-Za-z]/, transform: (v) => v.toLocaleLowerCase() },
    b: { pattern: /[\dA-Za-z]/, transform: (v) => v.toLocaleLowerCase() },
    '!': { escape: true },
    U: { pattern: /[ 'A-Za-z-]/, transform: (v) => v.toLocaleUpperCase() },
  },
};

export const withMask = (app: App): void => {
  app.use(InputFacade, inputFacadeOptions);
};
