import { createRequire } from 'node:module';
import path from 'node:path';
import { generateApi, type GenerateApiParams } from 'swagger-typescript-api';

const require = createRequire(import.meta.url);

const generateCode = (): void => {
  const generateApiParams: GenerateApiParams = {
    output: path.resolve(process.cwd(), 'src/shared/api/generated-api/'),
    spec: require(path.resolve(process.cwd(), 'src/shared/api/swagger.json')),
    moduleNameFirstTag: true,
    extractEnums: true,
    extractRequestParams: true,
    extractRequestBody: true,
    extractResponseBody: true,
    modular: true,
    httpClientType: 'axios',
    addReadonly: true,
    prettier: {
      jsxSingleQuote: true,
      printWidth: 120,
      singleAttributePerLine: true,
      singleQuote: true,
      tabWidth: 2,
    },
  };

  generateApi(generateApiParams);
};

generateCode();
