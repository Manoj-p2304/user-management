// EditUser.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById, updateUser } from "../services/api";
import UserForm from "../components/UserForm";
import Navbar from "../components/Navbar";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch (error) {
        setError("Failed to fetch user");
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      await updateUser(id, values);
      console.log(id, values)
      navigate("/");
    } catch (error) {
      setError("Failed to update user");
      console.error("Error updating user:", error);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Edit User</h1>
        <UserForm
          initialValues={user}
          onSubmit={handleSubmit}
          isEdit={true}
        />
      </div>
    </div>
  );
};

export default EditUser;