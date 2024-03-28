# Food Delivery Backend

This is a Node.js backend application for a food delivery system. It provides APIs for managing restaurants, menus, orders, and deliveries.

## Features

- RESTful APIs for CRUD operations on restaurants, menus, orders, and deliveries.
- PostgreSQL DB integration for data storage.
- Error handling and validation.
- Logging for tracking requests and errors.
- Unit and integration tests for ensuring code quality.

## Requirements

- Node.js
- PostgreSQL Database

## Installation

1. Clone the repository:

git clone https://github.com/SaurabhKumar18071998/Food-Delivery-Backend.git

2. Install dependencies:

cd food-delivery-backend

npm install

3. Set up environment variables:
Create a .env file in the root directory and define the following variables:

PORT=3000
PostgreSQL_DB_URI = postgres://root:VNsQJoiI0qyCtKZozsN33wJgeQI8GNWv@dpg-co2f4kgl6cac73bmk5a0-a.oregon-postgres.render.com/food_shop_4dq1
Hostname = dpg-co2f4kgl6cac73bmk5a0-a
DB_Port = 5432
Database = food_shop_4dq1

4. Run the application:

node src/index.js

5. You can use tools like Postman or curl to interact with the APIs. Here are some sample endpoints:

POST /pricing/calculate: Price Calculation according to organization id, zone, total_distance, item_type

6. Testing
Run unit tests:

npm test
