import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css"

const RegistrationForm = () => {
const dispatch = useDispatch()

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const addRegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Too Short!")
      .max(38, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("You must enter valid email address!")
      .required("Required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(38, "Too Long!")
      .required("Required"),
  });
    
    const handleSubmit = (value, action) => {
        dispatch(register(value))
        action.resetForm()
    }
  return (
    <div className={css.backgroundImage}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={addRegisterSchema}
      >
        <Form className={css.form}>
          <label className={css.formLabel}>
            <p>Name</p>
            <Field className={css.formInput} type="text" name="name" />
            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="name"
            />
          </label>
          <label className={css.formLabel}>
            <p>Email</p>
            <Field className={css.formInput} type="email" name="email" />
            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="email"
            />
          </label>
          <label className={css.formLabel}>
            <p>Password</p>
            <Field className={css.formInput} type="password" name="password" />
            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="password"
            />
          </label>
          <button className={css.formBtn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
