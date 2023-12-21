import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registrationform = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "First Name must contain only letters")
      .required("First Name is required"),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Last Name must contain only letters")
      .required("Last Name is required"),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    // Handle registration logic here
    console.log("Registration form submitted with values:", values);

    try {
      const response = await axios.post(
        "https://657eb8313e3f5b18946404b1.mockapi.io/users",
        values
      );

      console.log("Registration successful:", response.data);
      alert("Registration successful");
      resetForm();
      navigate("/");
      // Additional logic if needed
    } catch (error) {
      console.error("Error during registration:", error.message);
      // Handle error
    }
  };

  return (
    <div className="registration-container">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="registration-form">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" className="error" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" className="error" component="div" />
          </div>

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
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              className="error"
              component="div"
            />
          </div>

          <div>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Registrationform;
