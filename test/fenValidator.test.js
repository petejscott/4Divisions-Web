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

  test('FEN with invalid castling rights returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with invalid character in castling rights
    const resultInvalidChar = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkx - 0 1');
    expect(resultInvalidChar.isValid).toBe(false);
    
    // Test with invalid characters (not K, Q, k, q, or -)
    const resultInvalidChars = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQab - 0 1');
    expect(resultInvalidChars.isValid).toBe(false);
    
    // Test with numbers in castling rights
    const resultWithNumbers = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w K1q - 0 1');
    expect(resultWithNumbers.isValid).toBe(false);
  });

  test('FEN with invalid en passant square returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with invalid file letter (should be a-h)
    const resultInvalidFile = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq i3 0 1');
    expect(resultInvalidFile.isValid).toBe(false);
    
    // Test with invalid rank number (should be 1-8)
    const resultInvalidRank = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq e9 0 1');
    expect(resultInvalidRank.isValid).toBe(false);
    
    // Test with wrong format (should be two characters or -)
    const resultWrongFormat = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq e33 0 1');
    expect(resultWrongFormat.isValid).toBe(false);
    
    // Test with invalid characters
    const resultInvalidChars = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq xx 0 1');
    expect(resultInvalidChars.isValid).toBe(false);
  });

  test('FEN with invalid halfmove clock returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with negative halfmove clock
    const resultNegative = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - -1 1');
    expect(resultNegative.isValid).toBe(false);
    
    // Test with non-numeric halfmove clock
    const resultNonNumeric = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - abc 1');
    expect(resultNonNumeric.isValid).toBe(false);
    
    // Test with decimal halfmove clock
    const resultDecimal = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 1.5 1');
    expect(resultDecimal.isValid).toBe(false);
    
    // Test with empty halfmove clock
    const resultEmpty = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -  1');
    expect(resultEmpty.isValid).toBe(false);
  });

  test('FEN with invalid fullmove number returns invalid', () => {
    const validator = new FenValidator();
    
    // Test with negative fullmove number
    const resultNegative = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 -1');
    expect(resultNegative.isValid).toBe(false);
    
    // Test with zero fullmove number (should be at least 1)
    const resultZero = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0');
    expect(resultZero.isValid).toBe(false);
    
    // Test with non-numeric fullmove number
    const resultNonNumeric = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 abc');
    expect(resultNonNumeric.isValid).toBe(false);
    
    // Test with decimal fullmove number
    const resultDecimal = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1.5');
    expect(resultDecimal.isValid).toBe(false);
    
    // Test with empty fullmove number
    const resultEmpty = validator.validate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 ');
    expect(resultEmpty.isValid).toBe(false);
  });
});
