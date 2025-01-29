import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { addUser } from "../services/api";
import Navbar from "../components/Navbar";

const AddUser = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await addUser(values);
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Add User</h1>
        <UserForm
          initialValues={{ name: "", email: "", company: { name: "" } }}
          onSubmit={handleSubmit}
          isEdit={false}
        />
      </div>
    </div>
  );
};

export default AddUser;