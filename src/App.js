import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting, resetForm, setErrors }) => {
      setSubmitting(true);

      //to simulate network call
      setTimeout(() => {
        alert(JSON.stringify(values));
        // setErrors({ email: "Error may set after sumbitting" });
        setSubmitting(false);
        resetForm();
      }, 300);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name should be minimum of 3 characters.")
        .required("Required."),
      email: Yup.string()
        .email("Please enter valid email.")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password should be minimum of 6 charecters long"),
    }),
  });

  return (
    <div className="form-container">
      <h3>React Form validation using Formik and yup</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
        </div>
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
