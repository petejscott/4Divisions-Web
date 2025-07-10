class FenValidator {
  validate(fenString) {
    if (fenString === '') {
      return { isValid: false };
    }
    
    const parts = fenString.split(' ');
    if (parts.length !== 6) {
      return { isValid: false };
    }
    
    // Validate board section (first part)
    const boardSection = parts[0];
    const validBoardChars = /^[rnbqkpRNBQKP12345678\/]+$/;
    if (!validBoardChars.test(boardSection)) {
      return { isValid: false };
    }
    
    return { isValid: true };
  }
}

module.exports = FenValidator;
