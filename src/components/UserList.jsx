import { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/api";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setError("Failed to fetch users");
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError("Failed to delete user");
      console.error("Error deleting user:", error);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="container">
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div>
              <h3>{user.name} (ID: {user.id})</h3>
              <p>Email: {user.email}</p>
              <p>Department: {user.company?.name || "N/A"}</p>
            </div>
            <div className="user-actions">
              <Link to={`/edit/${user.id}`}>
                <button className="edit">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="delete"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

