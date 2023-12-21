import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SubscribeForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subscribe: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .test("valid-domain", "Invalid email domain", (value) => {
          const validDomains = ["gmail.com", "example.com", "gmail.co.in"]; // Add your valid domains here
          const domain = value.split("@")[1];
          return validDomains.includes(domain);
        })
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "https://657ed77d3e3f5b1894643e97.mockapi.io/subscribers",
          values
        );

        console.log("Form submitted successfully:", response.data);

       
        resetForm();

        
        alert("Thanks for the subscription!");
        navigate("/");
      } catch (error) {
        console.error("Error submitting form:", error.message);
        
      }
    },
  });

  return (
    <form className="text-center subscribeform" onSubmit={formik.handleSubmit}>
      <h2>Subscribe Today</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          className="form-control form-control-sm"
          required
          placeholder="Your Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          className="form-control form-control-sm"
          required
          placeholder="Your Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          className="form-check-input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.subscribe}
        />
        <label htmlFor="subscribe" className="form-check-label float-start">
          Subscribe to newsletter
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SubscribeForm;
