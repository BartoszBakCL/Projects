import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../common/Title";

const Register = () => {
  const initialValues = { email: "", password: "", password2: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      document.querySelectorAll("input").forEach((elem) => {
        elem.classList.remove("error");
      });
    } else if (Object.keys(formErrors).length === 1) {
      if (Object.keys(formErrors)[0] === "email") {
        document.querySelectorAll("input")[0].classList.add("error");
        document.querySelectorAll("input")[1].classList.remove("error");
        document.querySelectorAll("input")[2].classList.remove("error");
      } else if (Object.keys(formErrors)[0] === "password") {
        document.querySelectorAll("input")[0].classList.remove("error");
        document.querySelectorAll("input")[1].classList.add("error");
        document.querySelectorAll("input")[2].classList.remove("error");
      } else {
        document.querySelectorAll("input")[0].classList.remove("error");
        document.querySelectorAll("input")[1].classList.remove("error");
        document.querySelectorAll("input")[2].classList.add("error");
      }
    } else if (Object.keys(formErrors).length === 2) {
      if (
        Object.keys(formErrors)[0] === "email" &&
        Object.keys(formErrors)[1] === "password"
      ) {
        document.querySelectorAll("input")[0].classList.add("error");
        document.querySelectorAll("input")[1].classList.add("error");
        document.querySelectorAll("input")[2].classList.add("error");
      } else if (
        Object.keys(formErrors)[0] === "email" &&
        Object.keys(formErrors)[1] === "password2"
      ) {
        document.querySelectorAll("input")[0].classList.add("error");
        document.querySelectorAll("input")[1].classList.remove("error");
        document.querySelectorAll("input")[2].classList.add("error");
      } else if (
        Object.keys(formErrors)[0] === "password" &&
        Object.keys(formErrors)[1] === "password2"
      ) {
        document.querySelectorAll("input")[0].classList.remove("error");
        document.querySelectorAll("input")[1].classList.add("error");
        document.querySelectorAll("input")[2].classList.add("error");
      }
    } else if (Object.keys(formErrors).length === 3) {
      document.querySelectorAll("input").forEach((elem) => {
        elem.classList.add("error");
      });
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Wpisz sw??j email!";
    } else if (!regex.test(values.email)) {
      errors.email = "Podany email jest nieprawid??owy!";
    }
    if (!values.password) {
      errors.password = "Wpisz swoje has??o!";
    } else if (values.password.length < 6) {
      errors.password = "Podane has??o jest za kr??tkie!";
    }
    if (!values.password2) {
      errors.password2 = "Powt??rz swoje has??o!";
    } else if (values.password != values.password2) {
      errors.password2 = "Has??a nie s?? takie same!";
    }
    return errors;
  };

  return (
    <section className="login">
      <Title title="Zarejestuj si??" />
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="login__success">
          Jeste?? zalogowany jako {formValues.email}
        </div>
      ) : null}
      <form className="login__container" onSubmit={handleSubmit}>
        <div className="login__field">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            className="login__input"
            type="text"
            value={formValues.email}
            onChange={handleChange}
          />
          <span className="login__error">{formErrors.email}</span>

          <label htmlFor="password">Has??o</label>
          <input
            name="password"
            className="login__input"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <span className="login__error">{formErrors.password}</span>

          <label htmlFor="password2">Powt??rz has??o</label>
          <input
            name="password2"
            className="login__input"
            type="password"
            value={formValues.password2}
            onChange={handleChange}
          />
          <span className="login__error">{formErrors.password2}</span>
        </div>
        <div className="login__btns">
          <Link to="/logowanie" className="login__btn">
            Zaloguj si??
          </Link>
          <button className="login__btn">Za?????? konto</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
