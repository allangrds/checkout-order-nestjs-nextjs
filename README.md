# Mashgin Fullstack Test

## Table of content

- [Requeriments](#requeriments)
- [Installation](#installation)
- [Technologies](#technologies)

## Requeriments

- Docker v20.10.22;
- Docker Compose v2.15.1.

## Installation

### Client

1. Copy the file `.env.local.example` to `.env.local`;
1. If you don't wanna to mock the api, change `NEXT_PUBLIC_MOCK_API` to `false`
1. Run `make client-up`;
2. Access `localhost:3000`.

### API

1. Run `make api-up`;
2. Access `localhost:3001`.

### API Docs

1. Run `make docs-up`;
2. Access `localhost:3006`.

## Technologies

- Client
  - NextJS 13.1.6
  - MSW(for api mocking)
  - Stitches + Radix UI(for style)
  - React hook form + zod(for form management and validation)
- API
  - NestJS 9.0.0
- Docs
  - APIBlueprint + Aglio
