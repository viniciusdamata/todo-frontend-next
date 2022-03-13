import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "@/presentation/components/Input/Input";
import { useCallback } from "react";
import { SaveTodoUseCase, Todo } from "@/domain";
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

const TodoForm = ({ saveTodoUseCase }: ITodoFormProps) => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
          flexGrow: 1,
          width: "100%",
        }}
      >
        <Form
          onSubmit={form.handleSubmit}
          style={{
            flexBasis: "600px",
            padding: "1rem",
            border: "1px solid #ced4da",
            borderRadius: ".5rem",
          }}
        >
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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button disabled={form.isSubmitting} type="submit">
              Criar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default TodoForm;
