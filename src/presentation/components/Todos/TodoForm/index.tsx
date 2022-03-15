import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "@/presentation/components/Input/Input";
import { SaveTodoUseCase, Todo } from "@/domain";
import styles from "./todoForm.module.scss";

interface ITodoFormProps {
  saveTodoUseCase: SaveTodoUseCase;
}

const todoValidationSchema = new Yup.ObjectSchema({
  title: Yup.string().required(),
  body: Yup.string().required(),
  archived: Yup.boolean(),
  backgroundColor: Yup.string().required(),
  userId: Yup.string(),
});

export const TodoForm = ({ saveTodoUseCase }: ITodoFormProps) => {
  const form = useFormik<Todo>({
    initialValues: {
      title: "",
      body: "",
      archived: false,
      backgroundColor: "",
      userId: "13768526-c06b-4c6c-99fc-b48ed2e300af",
    },
    validationSchema: todoValidationSchema,
    onSubmit: (todo: Todo) => {
      saveTodoUseCase
        .execute(todo)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    },
  });

  return (
    <>
      <div className={styles["todo-form-container"]}>
        <Form onSubmit={form.handleSubmit} className={styles["todo-form-root"]}>
          <Input
            type="text"
            name="title"
            formLabel="Titulo"
            placeholder="Titulo da nota"
            onChange={form.handleChange}
            error={!!form.errors.title}
            errorMessage={form.errors.title}
          />
          <Input
            type="color"
            name="backgroundColor"
            formLabel="Cor"
            placeholder="Cor da nota"
            onChange={form.handleChange}
            error={!!form.errors.backgroundColor}
            errorMessage={form.errors.backgroundColor}
          />
          <Input
            name="body"
            as="textarea"
            formLabel="Texto"
            style={{ height: "10rem" }}
            placeholder="Texto da nota"
            onChange={form.handleChange}
            error={!!form.errors.body}
            errorMessage={form.errors.body}
          />
          <div className={styles["todo-form-controls"]}>
            <Button disabled={form.isSubmitting} type="submit">
              Criar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
