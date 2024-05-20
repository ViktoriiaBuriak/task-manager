import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";


const LoginForm = () => {
 const dispatch = useDispatch();

 const initialValues = {
   email: "",
   password: "",
 };

 const addRegisterSchema = Yup.object().shape({
   email: Yup.string()
     .email("You must enter valid email address!")
     .required("Required"),
   password: Yup.string()
     .min(7, "Too Short!")
     .max(38, "Too Long!")
     .required("Required"),
 });

 const handleSubmit = (value, action) => {
   dispatch(login(value));
   action.resetForm();
 };
 return (
   <>
     <Formik
       onSubmit={handleSubmit}
       initialValues={initialValues}
       validationSchema={addRegisterSchema}
     >
       <Form>
         <label>
           <Field type="email" name="email" />
           <ErrorMessage component="span" name="email" />
         </label>
         <label>
           <Field type="password" name="password" />
           <ErrorMessage component="span" name="password" />
         </label>
         <button type="submit">Log In</button>
       </Form>
     </Formik>
   </>
 );
}

export default LoginForm