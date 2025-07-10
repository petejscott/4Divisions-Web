class FenValidator {
  validate(fenString) {
    if (fenString === '') {
      return { isValid: false };
    }
    
    const parts = fenString.split(' ');
    if (parts.length !== 6) {
      return { isValid: false };
    }
    
    return { isValid: true };
  }
}

module.exports = FenValidator;
