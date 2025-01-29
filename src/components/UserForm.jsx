import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = ({ initialValues, onSubmit, isEdit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.object({
      name: Yup.string().required("Department is required"),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="user-form">
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div>
            <label>Department</label>
            <Field type="text" name="company.name" />
            <ErrorMessage
              name="company.name"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isEdit ? "Update User" : "Add User"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;