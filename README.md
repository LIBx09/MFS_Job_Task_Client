Certainly! Here's a comprehensive `README.md` file for your Mobile Financial Service (MFS) application:

---

# Mobile Financial Service (MFS) Application

This is a **Mobile Financial Service (MFS)** application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js) that provides functionalities similar to platforms like **bKash** or **Nagad**. It allows users to manage their mobile finances, including **balance inquiries**, **send money**, **cash-in**, **cash-out**, and **agent** management. It uses **Firebase Authentication** for secure user logins and **JWT authentication** for protecting API routes.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User Authentication](#user-authentication)
  - [Transactions](#transactions)
  - [Balance Requests](#balance-requests)
- [Folder Structure](#folder-structure)
- [Contributors](#contributors)

---

## Features

1. **User Authentication**

   - Firebase Authentication for user login and registration.
   - Supports login with **mobile number/email** and **PIN**.
   - JWT-based authentication to protect sensitive routes.

2. **User Roles**

   - **User**: General customer with balance management.
   - **Agent**: Can perform cash-in and cash-out transactions.
   - **Admin**: Manages users, agents, and balances.

3. **Transactions**

   - **Cash-in**: User deposits money through an agent with no fee.
   - **Cash-out**: User withdraws money with a 1.5% fee (1% for the agent and 0.5% for the admin).
   - **Send Money**: Transaction between users with a minimum amount of 50 Taka and a 5 Taka fee for amounts over 100 Taka.

4. **Balance Management**

   - Balance inquiry for users and agents.
   - Minimum cash-out amount of 500 Taka.

5. **Admin Features**
   - View and manage **balance requests** from agents.
   - Approve/reject balance requests.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (native, no Mongoose)
- **Authentication**: Firebase Authentication, JWT

---

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v14.x or later)
- **MongoDB** (local or a cloud instance like MongoDB Atlas)
- **Firebase Project** (for Firebase Authentication)

#### Frontend (Client)

Navigate to the `client` directory and install the required dependencies:

```bash
cd client
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and set the following environment variables:

#### Backend

- **MONGO_URI**: MongoDB connection string.
- **JWT_SECRET**: Secret key for JWT authentication.
- **FIREBASE_API_KEY**: Firebase API Key (from Firebase Console).
- **FIREBASE_AUTH_DOMAIN**: Firebase Auth Domain (from Firebase Console).

#### Frontend

- **REACT_APP_FIREBASE_API_KEY**: Firebase API Key.
- **REACT_APP_FIREBASE_AUTH_DOMAIN**: Firebase Auth Domain.

---

## Usage

1. **Start the Backend**:
   Run the following command in the `server` directory:

   ```bash
   npm start
   ```

2. **Start the Frontend**:
   Run the following command in the `client` directory:

   ```bash
   npm start
   ```

---

## API Endpoints

### User Authentication

#### POST `/auth/login`

- **Description**: User logs in using mobile email and PIN.
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "pin": "1234"
  }
  ```

#### POST `/auth/register`

- **Description**: User registers by providing email, pin, and other details.
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "pin": "1234",
    "name": "John Doe"
  }
  ```

### Transactions

#### POST `/transactions/UCashOut`

- **Description**: User initiates a cash-out transaction through an agent.
- **Body**:
  ```json
  {
    "userId": "userId",
    "userPin": "1234",
    "agentPhn": "AgentPhoneNumber",
    "amount": 500
  }
  ```

#### POST `/transactions/USendMoney`

- **Description**: User sends money to another user.
- **Body**:
  ```json
  {
    "senderId": "userId",
    "recipientId": "recipientId",
    "amount": 100
  }
  ```

### Balance Requests (Admin Only)

#### GET `/balance-requests`

- **Description**: Admin can fetch all balance requests.
- **Query Parameters**:
  - `role`: Specify "agent" or "user" to filter requests.

#### PATCH `/balance-request/:id`

- **Description**: Admin approves or rejects balance requests.
- **Body**:
  ```json
  {
    "action": "approve" | "reject"
  }
  ```

---

## Contributors

- **Ibrahim Hasan Fuad** - Developer and Maintainer

---

This `README.md` should cover the key features, tech stack, installation, usage, and API documentation for your Mobile Financial Service (MFS) application. Let me know if you'd like to add more details or clarify any section!
