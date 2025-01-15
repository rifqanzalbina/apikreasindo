# Express Authentication API

This project is a simple Express.js application that provides user authentication functionality using email and password. It includes routes for user registration and login, and it stores user data in a database.

## Project Structure

```
express-auth-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the authentication controller
│   │   └── authController.js
│   ├── models                # Contains the user model
│   │   └── userModel.js
│   ├── routes                # Contains the authentication routes
│   │   └── authRoutes.js
│   └── config                # Contains database configuration
│       └── db.js
├── package.json              # NPM configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/express-auth-api.git
   ```

2. Navigate to the project directory:
   ```
   cd express-auth-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
  - Request body: `{ "email": "user@example.com", "password": "yourpassword" }`

- **POST /api/auth/login**: Log in an existing user.
  - Request body: `{ "email": "user@example.com", "password": "yourpassword" }`

## Deployment

To deploy the application to Vercel:

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Run the following command in the project directory:
   ```
   vercel
   ```

3. Follow the prompts to complete the deployment process.

## License

This project is licensed under the MIT License.