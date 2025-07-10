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
    
    // Validate number of ranks (should be 8)
    const ranks = boardSection.split('/');
    if (ranks.length !== 8) {
      return { isValid: false };
    }
    
    // Validate each rank has exactly 8 files
    for (const rank of ranks) {
      let fileCount = 0;
      for (const char of rank) {
        if (/[12345678]/.test(char)) {
          fileCount += parseInt(char);
        } else if (/[rnbqkpRNBQKP]/.test(char)) {
          fileCount += 1;
        }
      }
      if (fileCount !== 8) {
        return { isValid: false };
      }
    }
    
    // Validate active color (second part - must be 'w' or 'b')
    const activeColor = parts[1];
    if (activeColor !== 'w' && activeColor !== 'b') {
      return { isValid: false };
    }
    
    // Validate castling rights (third part - must be '-' or combination of K, Q, k, q)
    const castlingRights = parts[2];
    const validCastling = /^(-|[KQkq]+)$/;
    if (!validCastling.test(castlingRights)) {
      return { isValid: false };
    }
    
    // If not '-', validate that castling contains only valid characters
    if (castlingRights !== '-') {
      const validCastlingChars = /^[KQkq]+$/;
      if (!validCastlingChars.test(castlingRights)) {
        return { isValid: false };
      }
    }
    
    // Validate en passant square (fourth part - must be '-' or valid square notation)
    const enPassantSquare = parts[3];
    if (enPassantSquare !== '-') {
      // Must be exactly 2 characters: file (a-h) + rank (1-8)
      if (enPassantSquare.length !== 2) {
        return { isValid: false };
      }
      
      const file = enPassantSquare[0];
      const rank = enPassantSquare[1];
      
      // Validate file is a-h
      if (!/[a-h]/.test(file)) {
        return { isValid: false };
      }
      
      // Validate rank is 1-8
      if (!/[1-8]/.test(rank)) {
        return { isValid: false };
      }
    }

    return { isValid: true };
  }
}

module.exports = FenValidator;
