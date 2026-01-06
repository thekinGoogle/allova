# Contributing to Allova

Thank you for your interest in contributing to Allova! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/allova.git`
3. Add upstream remote: `git remote add upstream https://github.com/thekinGoogle/allova.git`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development Setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and configure as needed
3. Start development server: `npm run dev`

## Code Style

- Use TypeScript for all code
- Follow ESLint rules (run `npm run lint:fix` to auto-fix)
- Format code with Prettier (run `npm run format`)
- Use meaningful variable and function names
- Add comments for complex logic

## Commit Messages

Use clear, descriptive commit messages:

```
feat: Add new feature description
fix: Fix bug description
docs: Update documentation
refactor: Refactor code
test: Add/update tests
chore: Update dependencies
```

## Pull Requests

1. Ensure your branch is up-to-date: `git fetch upstream && git rebase upstream/main`
2. Push your changes: `git push origin feature/your-feature-name`
3. Open a PR with a clear description
4. Link related issues
5. Ensure all checks pass

## Testing

- Write tests for new features
- Ensure all tests pass: `npm test`
- Check coverage: `npm run test:coverage`

## Documentation

- Update README.md if adding new features
- Add inline comments for complex logic
- Update API documentation if needed

## Questions?

Feel free to open an issue for questions or discussions.

Thank you for contributing!
