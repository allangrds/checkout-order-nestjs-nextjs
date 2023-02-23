# Challange

## Instructions

Create a simple checkout Order System web app for a restaurant.

It should be divided into a client app and a server web API.

Clients should be able to:

- See menu items fetched from the web API
- Add/remove items multiple times to their local cart
- Fill a payment form
- Submit the order to the web API

The payment model can have any format and doesn't need to be processed.

The order submission endpoint should just store the order (items, total and payment) in a file or db and return a successful response.

## Web API

Should expose endpoints to fetch the menu and submit the order.

- menu: use the json sent as resource with the assignment. Feel free to modify it.

- order: expected to have the items list, total and a payment object.

## Important notes

This is supposed to be a small project. Simplicity is key.
Usage of Docker, CSS frameworks and JS packages are encouraged.
Feel free to add features if you feel comfortable.

## Evaluation

Your submission will be evaluated on

- Simplicity
- Accordance to specifications
- Architecture
- Code quality, documentation and readability
- Error handling

We will reach you so you can quickly explain your code and discuss which would be the next steps for the project.
