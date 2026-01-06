# Allova

A comprehensive web application framework built with TypeScript and Node.js.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Docker](#docker)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Getting Started

Allova is a modern, scalable framework designed for building robust web applications with TypeScript.

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0 or yarn >= 3.0.0
- Docker (optional, for containerized development)
- PostgreSQL 16+ (if using database locally)
- Redis 7+ (if using caching locally)

## 💻 Installation

### Clone the repository

```bash
git clone https://github.com/thekinGoogle/allova.git
cd allova
```

### Install dependencies

```bash
npm install
```

### Setup environment variables

```bash
cp .env.example .env
```

Edit `.env` with your configuration values.

## 🔨 Development

### Start development server

```bash
npm run dev
```

This will start the development server with hot-reloading.

### Build the project

```bash
npm run build
```

### Run production build

```bash
npm start
```

### Type checking

```bash
npm run type-check
```

### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

### Code formatting

```bash
npm run format
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🐳 Docker

### Build Docker image

```bash
npm run docker:build
```

### Start with Docker Compose

```bash
npm run docker:up
```

This will start:
- Application server (port 3000)
- PostgreSQL database (port 5432)
- Redis cache (port 6379)

### View logs

```bash
npm run docker:logs
```

### Stop containers

```bash
npm run docker:down
```

## 📁 Project Structure

```
allova/
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/       # Request handlers
│   ├── services/         # Business logic
│   ├── models/           # Data models
│   ├── routes/           # API routes
│   ├── middleware/        # Express middleware
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   └── index.ts          # Application entry point
├── test/                 # Test files
├── dist/                 # Compiled JavaScript (generated)
├── .docker/              # Docker related files
├── Dockerfile            # Docker build configuration
├── docker-compose.yml    # Docker Compose configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
├── .gitignore            # Git ignore rules
├── .prettierrc           # Code formatting rules
├── .eslintrc.json        # Linting rules
├── .env.example          # Example environment variables
└── README.md             # Project documentation
```

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Run production build |
| `npm test` | Run test suite |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Check for linting errors |
| `npm run lint:fix` | Fix linting errors |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Check TypeScript types |
| `npm run docker:build` | Build Docker image |
| `npm run docker:up` | Start Docker containers |
| `npm run docker:down` | Stop Docker containers |
| `npm run docker:logs` | View Docker container logs |

## 🔌 API Documentation

API endpoints are available at `/api/v1`.

### Health Check

```bash
GET /health
```

Returns the current health status of the application.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.
