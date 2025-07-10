const FenValidator = require('../src/fenValidator');

describe('FEN String Validation', () => {
  test('empty FEN string returns invalid', () => {
    const validator = new FenValidator();
    const result = validator.validate('');
    expect(result.isValid).toBe(false);
  });
});
