import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addTask } from "../../redux/tasks/slice"
import { nanoid } from "nanoid";

const TaskForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    text: "",
  };

  const onAddTask = (formData) => {
    const taskText = {
      ...formData,
      id: nanoid()
    }
    dispatch(addTask(taskText));
  };

  const handleSubmit = (value, action) => {
    onAddTask(value);
    action.resetForm();
  };

  const addTaskSchema = Yup.object().shape({
    text: Yup.string().required("the input field cannot be empty"),
  });
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={addTaskSchema}
      >
        <Form>
          <label>
            <Field type="text" name="text" />
            <ErrorMessage component="span" name="text" />
          </label>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};

export default TaskForm;
