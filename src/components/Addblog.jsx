import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup'; 

import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const AddBlog = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Title should only contain letters')
      .required('Title is required'),
    author: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Author should only contain letters')
      .required('Author is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    image: Yup.string().required('Image URL is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      description: '',
      category: '',
      image: '',
    },
    validationSchema: validationSchema, 
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          'https://65731f51192318b7db419661.mockapi.io/blogposts',
          values
        );

        console.log('Blog added successfully:', response.data);
        alert('Blog is added successfully');

        formik.resetForm();
        navigate('/');
      } catch (error) {
        console.error('Error adding blog:', error);
      }
    },
  });

  return (
    <div className="addblog">
      <h2 style={{ marginTop: '8%' }}>
        <b>Add Blog</b>
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors.title && formik.touched.title && (
            <div className="error">{formik.errors.title}</div>
          )}
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          {formik.errors.author && formik.touched.author && (
            <div className="error">{formik.errors.author}</div>
          )}
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.description && formik.touched.description && (
            <div className="error">{formik.errors.description}</div>
          )}
        </label>
        <br />
        <label>
          Category:
          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            className="category_label"
          >
            <option value="">Select Category</option>
            <option value="Solo-Travel">Solo-Travel</option>
            <option value="Jungle-Travel">Jungle-Travel</option>
            <option value="Ocean-Travel">Ocean-Travel</option>
            <option value="Old-City-Travel">Old-City-Travel</option>
            <option value="Mount-Travel">Mount-Travel</option>
          </select>
          {formik.errors.category && formik.touched.category && (
            <div className="error">{formik.errors.category}</div>
          )}
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          {formik.errors.image && formik.touched.image && (
            <div className="error">{formik.errors.image}</div>
          )}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
