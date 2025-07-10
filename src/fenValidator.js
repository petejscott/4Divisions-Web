class FenValidator {
  validate(fenString) {
    if (fenString === '') {
      return { isValid: false };
    }
    
    return { isValid: true };
  }
}

module.exports = FenValidator;
