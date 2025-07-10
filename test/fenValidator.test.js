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

  test('FEN with invalid characters in board section returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with invalid character 'x' in board section
    const resultInvalidChar = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPxPPPP/RNBQKBNR w KQkq - 0 1');
    expect(resultInvalidChar.isValid).toBe(false);
    
    // Test with invalid character '9' in board section (only 1-8 allowed for empty squares)
    const resultInvalidNumber = validator.validate('rnbqkbnr/pppppppp/9/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(resultInvalidNumber.isValid).toBe(false);
  });

  test('FEN with wrong number of ranks (not 8) returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with too few ranks (only 7)
    const resultTooFewRanks = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP w KQkq - 0 1');
    expect(resultTooFewRanks.isValid).toBe(false);
    
    // Test with too many ranks (9)
    const resultTooManyRanks = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(resultTooManyRanks.isValid).toBe(false);
  });

  test('FEN with wrong number of files per rank returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with rank having too many files (9 instead of 8)
    const resultTooManyFiles = validator.validate('rnbqkbnrr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(resultTooManyFiles.isValid).toBe(false);
    
    // Test with rank having too few files (7 instead of 8)
    const resultTooFewFiles = validator.validate('rnbqkbnr/ppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(resultTooFewFiles.isValid).toBe(false);
  });

  test('FEN with invalid active color returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with invalid active color 'x'
    const resultInvalidColor = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR x KQkq - 0 1');
    expect(resultInvalidColor.isValid).toBe(false);
    
    // Test with invalid active color 'W' (uppercase not allowed)
    const resultUppercaseW = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR W KQkq - 0 1');
    expect(resultUppercaseW.isValid).toBe(false);
    
    // Test with invalid active color 'B' (uppercase not allowed)
    const resultUppercaseB = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR B KQkq - 0 1');
    expect(resultUppercaseB.isValid).toBe(false);
  });
});
