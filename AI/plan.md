# Project Overview
Build a web-based (HTML, CSS, and Javascript) chess application called "4Divisions". This should use a bitboard and draggable/droppable pieces rendered using unicode characters. Board states should be driven by validated FEN strings provided via querystring, and valid moves should result in an updated FEN string in the querystring and displayed to the user. 

Build this following the instructions provided in DEVELOPMENT.md.

After each individual test passes, commit the changes to source control. After each refactor operation, rerun the relevant tests and--if they pass--commit changes to source control. Do NOT commit to source control if any tests are failing.

## 1. FEN String Validation

Test empty FEN string returns invalid
Test FEN with wrong number of parts (not 6) returns invalid
Test valid starting position FEN returns valid
Test FEN with invalid characters in board section returns invalid
Test FEN with wrong number of ranks (not 8) returns invalid
Test FEN with wrong number of files per rank returns invalid
Test FEN with invalid active color returns invalid
Test FEN with invalid castling rights returns invalid
Test FEN with invalid en passant square returns invalid
Test FEN with invalid halfmove clock returns invalid
Test FEN with invalid fullmove number returns invalid

## 2. Bitboard Representation

Test empty bitboard initializes to all zeros
Test setting a single bit at position works correctly
Test getting a bit at position returns correct value
Test clearing a bit at position works correctly
Test converting square notation (e.g., "a1") to bit position
Test converting bit position to square notation

## 3. FEN to Bitboard Conversion

Test empty board FEN creates empty bitboards
Test single white pawn creates correct bitboard
Test single black pawn creates correct bitboard
Test starting position creates correct white pawn bitboard
Test starting position creates correct black pawn bitboard
Test all piece types create correct bitboards
Test complex middle-game position converts correctly

## 4. Bitboard to FEN Conversion

Test empty bitboards produce empty board FEN
Test single piece produces correct FEN rank
Test multiple pieces in a rank produce correct FEN
Test starting position bitboards produce correct FEN
Test game state (turn, castling, etc.) preserved in FEN

## 5. Board Rendering

Test board element exists in DOM
Test board has 64 squares, with eight rows and eight columns
Test squares have alternating colors (no adjacent squares share the same color)
Test square at a1 is correct color (light)
Test empty board renders no pieces
Test single piece renders in correct square
Test piece uses correct Unicode character
Test all pieces in starting position render correctly

## 6. URL Query String Handling

Test FEN from query string is read correctly
Test invalid FEN in query string shows error
Test empty query string uses default starting position
Test updating FEN updates query string
Test special characters in FEN are URL-encoded properly

## 7. Basic Move Validation

Test piece exists at source square
Test cannot move to square occupied by same color
Test pawn can move one square forward to empty square
Test pawn cannot move forward to occupied square
Test pawn can move two squares from starting position
Test pawn cannot move two squares if not on starting rank
Test pawn can capture diagonally
Test pawn cannot capture forward

## 8. Piece-Specific Move Validation

Test knight moves in L-shape
Test knight cannot move in straight line
Test bishop moves diagonally
Test bishop cannot move straight
Test rook moves straight
Test rook cannot move diagonally
Test queen moves like rook or bishop
Test king moves one square in any direction
Test pieces cannot jump over others (except knight)
Test knight can jump over pieces

## 9. Drag and Drop

Test piece element is draggable
Test dragging piece shows visual feedback
Test valid drop target highlights on drag over
Test dropping on valid square moves piece
Test dropping on invalid square returns piece to origin
Test dropping outside board returns piece to origin
Test FEN updates after successful move
Test turn changes after successful move

## 10. Special Rules

Test white moves first
Test cannot move opponent's pieces
Test en passant capture when available
Test en passant not available after one move
Test castling kingside when allowed
Test castling queenside when allowed
Test cannot castle through check
Test cannot castle from check
Test cannot castle after king moves
Test cannot castle after rook moves

## 11. Check Detection

Test direct attack by queen detected as check
Test direct attack by rook detected as check
Test direct attack by bishop detected as check
Test knight attack detected as check
Test pawn attack detected as check
Test no check when king not attacked
Test cannot move into check
Test must move out of check
Test pinned piece cannot move if exposes king

## 12. Integration Tests

Test full game move sequence updates FEN correctly
Test browser back/forward works with query string
Test copy FEN to clipboard functionality
Test paste FEN from clipboard functionality
Test responsive design on mobile viewport