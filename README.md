# SonicStore — MERN Stack E-Commerce Website

SonicStore is a full-stack e-commerce web application built using MongoDB, Express.js, React.js, and Node.js. It provides an online shopping interface with product browsing, product management, and authentication functionality.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

## Project Structure

```text
SonicStore/
├── Backend/
├── admin/
├── frontend/
├── package-lock.json
└── README.md
```

## Features

- Product browsing and product details
- Product filtering
- Backend API integration
- MongoDB database integration
- User authentication
- Admin interface for product management

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/amitjhajra/E-commerce-website-MERN-stack-.git
cd E-commerce-website-MERN-stack-
```

### 2. Install dependencies

Install dependencies separately in the backend, frontend, and admin directories:

```bash
cd Backend
npm install
```

Repeat `npm install` inside `frontend` and `admin`.

### 3. Configure environment variables

Create the required `.env` files based on your application configuration. Add your database connection string, JWT secret, and other required settings. Never commit secrets to GitHub.

### 4. Run the application

Start the backend, frontend, and admin applications using the scripts defined in their respective `package.json` files.

## Future Enhancements

- Order management
- Checkout and payment integration
- Additional shopping features

## Author

**Amit Jhajra**

GitHub: [@amitjhajra](https://github.com/amitjhajra)
