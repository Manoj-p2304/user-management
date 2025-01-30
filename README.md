# User Management Dashboard

A React-based web application for managing user data with create, read, update, and delete (CRUD) operations. The application integrates with JSONPlaceholder API for simulating backend interactions.

# LIVE AT

https://lively-dieffenbachia-f04bb6.netlify.app/

## 🚀 Features

- **User List Display**: View all users with their details including ID, name, email, and department
- **User Management**:
  - Add new users
  - Edit existing user details
  - Delete users
- **Error Handling**: Comprehensive error management for API interactions
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Immediate UI updates after CRUD operations

## 🛠️ Technology Stack

- **Frontend Framework**: React
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **API**: JSONPlaceholder
- **Styling**: CSS3 with modern best practices

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Manoj-p2304/user-management.git
```

2. Navigate to the project directory:
```bash
cd user-management
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🎯 Usage

### View Users
- Navigate to the home page to see the list of all users
- Each user card displays their basic information

### Add a New User
1. Click the "Add User" button
2. Fill in the required information in the form
3. Submit the form to add the user

### Edit User
1. Click the "Edit" button on a user's card
2. Modify the user's information in the form
3. Save the changes

### Delete User
1. Click the "Delete" button on a user's card
2. Confirm the deletion in the popup

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── UserList.jsx   # User listing component
│   ├── UserForm.jsx   # Form for adding/editing users
│   └── Navbar.jsx     # Navigation component
├── services/          # API and other services
│   └── api.js         # API interaction functions
├── pages/             # Page components
│   ├── Home.jsx       # Home page
│   ├── AddUser.jsx    # Add user page
│   └── EditUser.jsx   # Edit user page
└── App.js             # Main application component
```

## 🔍 API Integration

The application uses JSONPlaceholder's `/users` endpoint for CRUD operations:
- GET `/users` - Fetch all users
- GET `/users/{id}` - Fetch specific user
- POST `/users` - Add new user
- PUT `/users/{id}` - Update user
- DELETE `/users/{id}` - Delete user

Note: Since JSONPlaceholder is a mock API, changes are not persisted to a real database.

## ⚠️ Known Limitations

1. JSONPlaceholder is a mock API, so changes are not actually saved
2. Limited to 10 users from the API
3. No authentication/authorization implemented

## 🔄 Future Improvements

- [ ] Add authentication and authorization
- [ ] Implement pagination or infinite scroll
- [ ] Add search and filter functionality
- [ ] Enhance form validation
- [ ] Add unit tests
- [ ] Implement data caching
- [ ] Add dark mode theme

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the mock API
- [React](https://reactjs.org/) for the amazing framework
- [Axios](https://axios-http.com/) for HTTP client functionality

## 📧 Contact

Manoj Kumar P
manoj.p2304@gmail.com
