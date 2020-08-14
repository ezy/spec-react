# Spec app for jsonplaceholder.typicode.com

This is a ReactJS app using the blog api from typicode, built to show my approach to react dev. It includes the following methodolgy:

- Functional programming as per the current direction of React
- Tests setup with Jest and Enzyme
- A robust scalable folder structure
- Linting with eslint, prettier and airbnb

## Build time

The entire app was built in 2 coding sessions for a total time of around 2.5 hours.

## Setup methodology

Created with the standard Create React App - [see a shell script for doing similar with typescript in one hit here](https://gist.github.com/ezy/107c74c014251f0c8f2c2b0bea460d58)

## Available Scripts

The standard create react scripts are availavle in `package.json` for doing all the usual basics.

There are added scripts for the following:

- lint: lint
- format: lint format
- isready: building when ready

## Linting

Linting is setup to ensure code quality and consistency using eslint, prettier and airbnb style guide.

## Components

All components reside in `src/components`.

## Helpers

All helpers reside in `src/helpers`. If there was a requirement for any services (eg. extracting fetch into a single http request service) they would be located in `src/services`.

## Tests

All tests reside in `src/__tests__`. They're an example rather than being exhaustive to show a few different scenarios.

## Things I would do for prod

- Use typescript (.tsx, .ts)
- Use `docker-compose` for running any backend and db
- Implement a CI/CD solution
- Extract fetch into an http service for GET, PUT, POST, PATCH, DELETE
