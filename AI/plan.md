# Project Overview
Build a web-based (HTML, CSS, and Javascript) chess application called "4Divisions". This should use a bitboard and draggable/droppable pieces rendered using unicode characters. Board states should be driven by validated FEN strings provided via querystring, and valid moves should result in an updated FEN string in the querystring and displayed to the user. 

Build this following the instructions provided in DEVELOPMENT.md.

After each individual test passes, commit the changes to source control. After each refactor operation, rerun the relevant tests and--if they pass--commit changes to source control. Do NOT commit to source control if any tests are failing.

## 1. FEN String Validation

- [x] 1. Test empty FEN string returns invalid
- [x] 2. Test FEN with wrong number of parts (not 6) returns invalid
- [x] 3. Test valid starting position FEN returns valid
- [ ] 4. Test FEN with invalid characters in board section returns invalid
- [ ] 5. Test FEN with wrong number of ranks (not 8) returns invalid
- [ ] 6. Test FEN with wrong number of files per rank returns invalid
- [ ] 7. Test FEN with invalid active color returns invalid
- [ ] 8. Test FEN with invalid castling rights returns invalid
- [ ] 9. Test FEN with invalid en passant square returns invalid
- [ ] 10. Test FEN with invalid halfmove clock returns invalid
- [ ] 11. Test FEN with invalid fullmove number returns invalid

## 2. Bitboard Representation

- [ ] 12. Test empty bitboard initializes to all zeros
- [ ] 13. Test setting a single bit at position works correctly
- [ ] 14. Test getting a bit at position returns correct value
- [ ] 15. Test clearing a bit at position works correctly
- [ ] 16. Test converting square notation (e.g., "a1") to bit position
- [ ] 17. Test converting bit position to square notation

## 3. FEN to Bitboard Conversion

- [ ] 18. Test empty board FEN creates empty bitboards
- [ ] 19. Test single white pawn creates correct bitboard
- [ ] 20. Test single black pawn creates correct bitboard
- [ ] 21. Test starting position creates correct white pawn bitboard
- [ ] 22. Test starting position creates correct black pawn bitboard
- [ ] 23. Test all piece types create correct bitboards
- [ ] 24. Test complex middle-game position converts correctly

## 4. Bitboard to FEN Conversion

- [ ] 25. Test empty bitboards produce empty board FEN
- [ ] 26. Test single piece produces correct FEN rank
- [ ] 27. Test multiple pieces in a rank produce correct FEN
- [ ] 28. Test starting position bitboards produce correct FEN
- [ ] 29. Test game state (turn, castling, etc.) preserved in FEN

## 5. Board Rendering

- [ ] 30. Test board element exists in DOM
- [ ] 31. Test board has 64 squares, with eight rows and eight columns
- [ ] 32. Test squares have alternating colors (no adjacent squares share the same color)
- [ ] 33. Test square at a1 is correct color (light)
- [ ] 34. Test empty board renders no pieces
- [ ] 35. Test single piece renders in correct square
- [ ] 36. Test piece uses correct Unicode character
- [ ] 37. Test all pieces in starting position render correctly

## 6. URL Query String Handling

- [ ] 38. Test FEN from query string is read correctly
- [ ] 39. Test invalid FEN in query string shows error
- [ ] 40. Test empty query string uses default starting position
- [ ] 41. Test updating FEN updates query string
- [ ] 42. Test special characters in FEN are URL-encoded properly

## 7. Basic Move Validation

- [ ] 43. Test piece exists at source square
- [ ] 44. Test cannot move to square occupied by same color
- [ ] 45. Test pawn can move one square forward to empty square
- [ ] 46. Test pawn cannot move forward to occupied square
- [ ] 47. Test pawn can move two squares from starting position
- [ ] 48. Test pawn cannot move two squares if not on starting rank
- [ ] 49. Test pawn can capture diagonally
- [ ] 50. Test pawn cannot capture forward

## 8. Piece-Specific Move Validation

- [ ] 51. Test knight moves in L-shape
- [ ] 52. Test knight cannot move in straight line
- [ ] 53. Test bishop moves diagonally
- [ ] 54. Test bishop cannot move straight
- [ ] 55. Test rook moves straight
- [ ] 56. Test rook cannot move diagonally
- [ ] 57. Test queen moves like rook or bishop
- [ ] 58. Test king moves one square in any direction
- [ ] 59. Test pieces cannot jump over others (except knight)
- [ ] 60. Test knight can jump over pieces

## 9. Drag and Drop

- [ ] 61. Test piece element is draggable
- [ ] 62. Test dragging piece shows visual feedback
- [ ] 63. Test valid drop target highlights on drag over
- [ ] 64. Test dropping on valid square moves piece
- [ ] 65. Test dropping on invalid square returns piece to origin
- [ ] 66. Test dropping outside board returns piece to origin
- [ ] 67. Test FEN updates after successful move
- [ ] 68. Test turn changes after successful move

## 10. Special Rules

- [ ] 69. Test white moves first
- [ ] 70. Test cannot move opponent's pieces
- [ ] 71. Test en passant capture when available
- [ ] 72. Test en passant not available after one move
- [ ] 73. Test castling kingside when allowed
- [ ] 74. Test castling queenside when allowed
- [ ] 75. Test cannot castle through check
- [ ] 76. Test cannot castle from check
- [ ] 77. Test cannot castle after king moves
- [ ] 78. Test cannot castle after rook moves

## 11. Check Detection

- [ ] 79. Test direct attack by queen detected as check
- [ ] 80. Test direct attack by rook detected as check
- [ ] 81. Test direct attack by bishop detected as check
- [ ] 82. Test knight attack detected as check
- [ ] 83. Test pawn attack detected as check
- [ ] 84. Test no check when king not attacked
- [ ] 85. Test cannot move into check
- [ ] 86. Test must move out of check
- [ ] 87. Test pinned piece cannot move if exposes king

## 12. Integration Tests

- [ ] 88. Test full game move sequence updates FEN correctly
- [ ] 89. Test browser back/forward works with query string
- [ ] 90. Test copy FEN to clipboard functionality
- [ ] 91. Test paste FEN from clipboard functionality
- [ ] 92. Test responsive design on mobile viewport