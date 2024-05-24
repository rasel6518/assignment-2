# Assignment 2 - Product and Order Management System

This is a simple product and order management system built with Node.js, Express, TypeScript, and MongoDB. The application allows users to manage products and orders with features like inventory management and search functionality.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 16 or later)
- MongoDB installed and running
- npm (Node package manager)

## Installation

1. Clone the repository

    ```bash
    git clone https://github.com/rasel6518/assignment-2
    cd assignment-2
    ```

2. Install dependencies

    ```bash
    npm install
    ```



## Running the Application

1. Start the MongoDB server if it is not already running

    ```bash
    mongod
    ```

2. Start the application in development mode

    ```bash
    npm run start:dev
    ```

The server will start on the port specified in the `.env` file (default is 3000).

To build the project for production and start the server, you can use:

```bash
npm run build
npm run start:prod
