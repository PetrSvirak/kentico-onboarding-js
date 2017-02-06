import * as matchers from 'jest-immutable-matchers';

const immutableTests = (specs) => () => {
  beforeEach(() => jest.addMatchers(matchers));

  specs();
};

export default immutableTests;
