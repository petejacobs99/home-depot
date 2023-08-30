<div style="text-align: center;">

### Buckets and Beyond

Buckets and Beyond is a full-stack web application inspired by the Home Depot website. It offers a wide range of products, categories, and features to enhance your shopping experience.

### Pages and Components

## Home Page

The home page features category content blocks, a featured items carousel, and links to important pages including About Us, FAQ, and My Account.

## Category List Page

This page displays categories within a department, aiding users in finding their desired products.

## Item Listing Page

Displays a list of items with search, filter, and sorting mechanisms.

## Item Detail Page

Provides detailed information about an item, including variations/types, reviews, photos, and links to suggested items.

## Order Page

Shows items added to the user's cart, with the ability to edit quantities, delete items, or save items for later.

## Checkout Page

Displays a summary of items for purchase, allowing users to proceed to payment. Also provides sign-in/sign-up options for guests.

## User Profile Page

Displays user account information, settings, order history, reviews, and saved items.

## Authentication Page

Provides options for users to log in or create an account.

## Search Results Page

Similar to the Item Listing Page, this page shows filtered views of search results.

### CRUD Operations

Create: Users and reviews.

Read: Displaying items, cart items, orders, reviews.

Update: Modifying cart contents, updating user profile, editing reviews.

Delete: Removing items from the cart, canceling orders, deleting reviews, deleting account.

### Features

Add to Cart: Users can add items to their cart.

Add to Wishlist: Users can add items to their wishlist for future purchase.

Checkout: Users can review and proceed to payment for items in their cart.

Review and Rate: Users can leave reviews and ratings on items.

Search for Items: Users can search for specific items using keywords.

### API Routes and Requests

Here are some example API routes, requests, and responses for reference:

# User Authentication - Login:

POST /api/auth/login

Request Payload:

```
{
  "email": "you@email.com",
  "password": "1234567abc123!"
}
```

Example Response:

```
{
  "token": "cbqgoibhcoqbhqouibgcuiqabgcuio",
  "user": {
    "email": "you@email.com",
    "name": "Your Name"
  }
}
```

# User Registration:

POST /api/auth/register

Request Payload:

```
{
  "name": "Your Name",
  "email": "you@email.com",
  "password": "1234567abc123!"
}
```

Example Response: (Same as login response)

# Get item Listing:

GET /api/items

Example Response:

```
[
  {
    "itemId": "12345",
    "name": "item 1",
    "price": 29.99,
    "imageUrl": "https://something.com/img/item1.jpg"
  },
  {
    "itemId": "67890",
    "name": "item 2",
    "price": 49.99,
    "imageUrl": "https://something.com/img/item2.jpg"
  }
]
```

### Contributors

Elysea Crawford
Mel Blanco
Mimi Zhou
San Lae Lae Cho
Jillian Guerra
Joey Zazzi
Laura Cohen
Peter Jacobs

</div>






