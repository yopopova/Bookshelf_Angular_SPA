# Bookshelf

'Bookshelf' is a single-page application based on the Angular framework where users can find, add or like their favorite books. The app includes the following views and functionalities:

- `Home` view which is the main app view
- `Catalog` view where the user can find the catalog with all existing books
- `Details` view where the user can see every book's details
- `Add Book` view where the user can add a book, if he has a registration and is logged into his profile
- `Edit Book` view where the user can edit a book, if he is the creator of that book
- `Delete Book` option where the user can delete a book, if he is the creator of that book
- `Like` option where the logged-in users can like a book
- `Profile` view with user's information
- `Register` view where the user can make registration
- `Login` view where the user can log into his profile
- `Logout` option where the user can logout from his profile
- `404` view that is displayed when a user enters a link that does not exist

## App Details

The app is based on:

- Angular (v16)
- TypeScript
- HTML
- CSS
- RESTful API
- SoftUni Practice Server (as Database)
- Gradient Magic Backgrounds
- Font Awesome Icons

## Project Content

In the repository you will find two folders:

- `client` folder contains the app's front-end part
- `server` folder contains the app's back-end part

## How to Start/Stop the App

After downloading the application on your computer, you must first type `npm install` in your VS Code terminal to install `node_modules` folder. Then I suggest you to open two terminals in VS Code. Name the first one `client` and the other one `server` to distinguish them. In the `server` terminal, type `cd server` to enter the server folder, and then run the `node server.js` command to start the server. Then click on `client` terminal and type `cd client` to enter the client folder. Then type `ng serve` command to start the front-end part of the application. The following will appear in the `client` terminal:

```javascript
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size   
vendor.js             | vendor        |   2.64 MB | 
polyfills.js          | polyfills     | 333.17 kB | 
main.js               | main          | 247.33 kB | 
styles.css, styles.js | styles        | 230.62 kB |
runtime.js            | runtime       |   6.52 kB |

                      | Initial Total |   3.44 MB

Build at: 2024-12-14T09:50:17.256Z - Hash: 7a037ceabe1c386c - Time: 7679ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


√ Compiled successfully.
✔ Browser application bundle generation complete.
```

Click on `http://localhost:4200/` to open the app in your browser. After you finish working with the application, click on `client` terminal and press the `Ctrl+C` command to stop the front-end part of the application. Then click on the `server` terminal and press the same `Ctrl+C` command to stop the server.

## SoftUni Practice Server as Database

Please keep in mind that the database is based on SoftUni Practice Server created by [Viktor Kostadinov](https://github.com/viktorpts) and is not persistent. This means that you can register users, log in to your user profile, and create book recordings, but when you restart the server the data you made will be lost and the database will return to its initial state. If you want to know more about working with SoftUni Practice Server and its additional features you can [follow this link](https://github.com/softuni-practice-server/softuni-practice-server).

## Book Record in the Database

Every book record in the database has the following structure:

```javascript
books: {
    "bookId": {
        "_ownerId": "The Owner Id",
        "title": "Book Title",
        "cover": "Book Cover",
        "author": "Author Name",
        "pages": "Book Pages",
        "price": "Book Price",
        "description": "Book Description",
        "_createdOn": 0101010101,
        "_id": "Book Id",
    }
}
```

## RESTful API

For the app data, the following endpoints are supported:

- `GET /data/books` - to get all the records from the database
- `POST /data/books` - to create a book
- `PUT /data/books/:id` - to edit a book
- `DELETE /data/books/:id` - to delete a book

For the likes, the following endpoints are supported:

- `GET /data/likes` - to get all the likes for the current record
- `POST /data/likes` - to make a like

For the user, the following endpoints are supported:

- `POST /users/register` - for user registration
- `POST /users/login` - for user login
- `GET /users/logout` - for user logout
- `GET /users/me` - to get the information for logged in user and populate it in the user's profile

## Premade Accounts

The app database comes with the following premade user accounts, which you may use for login:

```javascript
{
    "email": "peter@gmail.com",
    "password": "123456" 
}
```
and
```javascript
{
    "email": "maria@gmail.com",
    "password": "123456" 
}
```
