# Checkout Order - Nestjs + Nextjs

This is a simple project where the application will return a list of fictitious items, the user will be able to insert these items in the cart (which will disappear when pressing f5), update the cart items, go to a payment screen, fill in the data and create the request.

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
  - MSW(api mocking)
  - Stitches + Radix UI(style)
  - React hook form + zod(form management and validation)
- API
  - NestJS 9.0.0
- Docs
  - APIBlueprint + Aglio
