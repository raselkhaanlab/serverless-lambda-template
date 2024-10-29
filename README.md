# serverless-lambda-template

This is a workable production ready template porject for serverless nodejs.
This template is based on serverless framework. This project by default comes up with jest testing, eslint and prettier configuration.
This template is designed to be used with AWS Lambda and API Gateway.
This project is also use yo and generator-astro-sls cli for make it easier to generate boilerplate handler, middleware, service, and util

## Requirements

- [Node v18+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)

## Getting Started

Install dependencies:

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

## Running in Production

```bash
npm run deploy
```

## Formating

```bash
# format project with prettier
npm run format
```

## Linting

```bash
# lint code with ESLint
npm run lint

# try to fix ESLint errors
npm run lint:fix

# lint and watch for changes
npm run lint:watch
```

## Test

```bash
# run all tests with Jest
npm run test

# run unit tests with coverage
npm run test:unit

# run integration tests
npm run test:integration

# run all tests and watch for changes
npm run test:watch
```

## Validate

```bash
# run lint and tests
npm run validate
```

### Generator CLI

Generate a new Handler:

```bash
npm run generate:handler
```

Generate a new middleware:

```bash
npm run generate:middleware
```

Generate a new service:

```bash
npm run generate:service
```

Generate a new utility:

```bash
npm run generate:util
```

## License

[MIT License](README.md) - [Rasel khan]
