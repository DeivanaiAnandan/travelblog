import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .test("valid-domain", "Invalid email domain", (value) => {
      const validDomains = ["gmail.com", "example.com", "gmail.co.in"]; // Add your valid domains here
      const domain = value.split("@")[1];
      return validDomains.includes(domain);
    })
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const Loginform = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.get(
        `https://657eb8313e3f5b18946404b1.mockapi.io/users`
      );

      const user = response.data.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        setAuthenticated(true);
        console.log("Login successful!");
        navigate("/");
      } else {
        alert("Invalid username or password");
        resetForm();
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }

    setSubmitting(false);
  };

  return (
    <div className="login-form-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" className="error" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" className="error" component="div" />
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Loginform;
