# 4Divisions-Web

## Project Overview

4Divisions-Web is a web-based chess application built with HTML, CSS, and JavaScript. The application features:

- **Bitboard representation** for efficient chess position handling
- **Draggable/droppable Unicode chess pieces** for intuitive gameplay
- **FEN string validation and parsing** for position import/export
- **Query string-driven board states** for shareable positions
- **Real-time FEN updates** as moves are made

## AI-Driven Development Experiment

This project serves as an **experiment in AI-assisted software development**, specifically exploring how **Claude Sonnet (via GitHub Copilot in VS Code)** can effectively implement a complete chess application following strict **Test-Driven Development (TDD)** and **Tidy First** methodologies.

### Development Methodology

The entire codebase is being developed using:

- **Kent Beck's TDD cycle**: Red → Green → Refactor
- **Tidy First principles**: Separating structural changes from behavioral changes
- **Small, frequent commits** with clear separation of concerns
- **AI pair programming** with human oversight and guidance

### Original Project Context

This is a reimplementation and enhancement of the existing [4Division-FenHelper](https://github.com/petejscott/4Division-FenHelper) project, taking the opportunity to:

- Apply modern TDD practices from the ground up
- Explore AI-assisted development workflows
- Build a more robust and maintainable codebase
- Document the AI development process for future reference

## Development Progress

The project follows a structured development plan with 92 specific tests covering:

1. **FEN String Validation** (Tests 1-11) - ✅ In Progress
2. **Bitboard Representation** (Tests 12-17)
3. **FEN to Bitboard Conversion** (Tests 18-24)
4. **Bitboard to FEN Conversion** (Tests 25-29)
5. **Board Rendering** (Tests 30-37)
6. **URL Query String Handling** (Tests 38-42)
7. **Basic Move Validation** (Tests 43-50)
8. **Piece-Specific Move Validation** (Tests 51-60)
9. **Drag and Drop** (Tests 61-68)
10. **Special Rules** (Tests 69-78)
11. **Check Detection** (Tests 79-87)
12. **Integration Tests** (Tests 88-92)

Each test is implemented following strict TDD principles, with commits made only when all tests pass.

## Getting Started

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Current Status

The project is currently implementing FEN string validation, with Tests 1-4 completed:

- ✅ Empty FEN string validation
- ✅ FEN part count validation (must have 6 parts)
- ✅ Valid starting position recognition
- ✅ Board section character validation

## AI Development Notes

This experiment demonstrates:
- How AI can effectively follow TDD principles
- The importance of clear development guidelines for AI assistants
- The value of small, incremental changes in AI-driven development
- How human-AI collaboration can maintain code quality standards

---

*This project is a live experiment in AI-assisted software development. The development process, including AI interactions and decision-making, is being documented for research and educational purposes.*
