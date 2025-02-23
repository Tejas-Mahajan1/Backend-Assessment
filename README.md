# MERN Role-Based Admin Panel

This project is a role-based management admin panel built using the MERN stack (MongoDB, Express.js, React.js/Next.js, Node.js) with TypeScript for type safety. It allows for user role management, product management, and order management.

## Features

- **User Roles & Permissions**
  - Admin: Manage team members and assign roles.
  - Manager: View and manage team orders.
  - Employee: Place orders.

- **Team Management**
  - Admin can add team members and assign roles.
  - Manager can view assigned team members.

- **Product Management**
  - Admin and Managers can add/edit products.
  - Products have name, description, price, and image.

- **Order Management**
  - Employees can place orders.
  - Orders include customer name, product details, and status (Pending, Delivered, Cancelled).

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js/Next.js, TypeScript
- **Deployment**: Vercel, Netlify, or other platforms

## Folder Structure

├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.ts
│ └── package.json
│
├── frontend/
│ ├── pages/
│ ├── components/
│ ├── context/
│ ├── utils/
│ └── package.json



## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```bash
   cd mern-role-based-admin/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd mern-role-based-admin/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Log in with your credentials to access the admin panel.
- Use the admin panel to manage users, products, and orders based on your role.

## Deployment

- Deploy the frontend to Vercel or Netlify.
- Deploy the backend to a platform like Heroku or AWS.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.