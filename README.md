# Bank

Bank is a SPA built with React. The app demonstrates a virtual bank environment. 
you can view and make your transactions.

Demo: [https://rons-bank.herokuapp.com](https://rons-bank.herokuapp.com)

## Table Of Contents
- [Bank](#bank)
  - [Table Of Contents](#table-of-contents)
  - [Running the project](#running-the-project)
  - [Screenshots](#screenshots)
    - [Transactions](#transactions)
    - [Filter by month](#filter-by-month)
    - [Filter by category](#filter-by-category)
    - [Operations](#operations)
  - [Tech-stack](#tech-stack)

## Running the project
1. Clone the repo.
2. Run `npm install`.
3. Run `npm run build`
4. Run `mongod`
5. Run `npm start`.
6. Navigate to `http://localhost:4000`.

## Screenshots

### Transactions
An overview of all your transactions. You can select another month/category with the dropdowns and view your current balance. 
<p align="center"><img src="assets/transactions.png" width="300" /></p>

### Filter by month
<p align="center"><img src="assets/date-picker.png" width="300" /></p>

### Filter by category
<p align="center"><img src="assets/category-select.png" width="300" /></p>

### Operations
Fill out the inputs and then click *Deposit* or *Withdraw* to add a new transactions.
<p align="center"><img src="assets/operations.png" width="300" /></p>

## Tech-stack
1. React, Material-UI, Axios and MobX.
2. Express (Node.js), Mongoose (MongoDB).