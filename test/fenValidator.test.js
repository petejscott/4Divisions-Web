const FenValidator = require('../src/fenValidator');

describe('FEN String Validation', () => {
  test('empty FEN string returns invalid', () => {
    const validator = new FenValidator();
    const result = validator.validate('');
    expect(result.isValid).toBe(false);
  });

  test('FEN with wrong number of parts (not 6) returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with too few parts
    const resultTooFew = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq');
    expect(resultTooFew.isValid).toBe(false);
    
    // Test with too many parts
    const resultTooMany = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1 extra');
    expect(resultTooMany.isValid).toBe(false);
  });

  test('valid starting position FEN returns valid', () => {
    const validator = new FenValidator();
    const startingPositionFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    const result = validator.validate(startingPositionFen);
    expect(result.isValid).toBe(true);
  });
});
