import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "@/presentation/components/Input/Input";
import { SaveTodoUseCase, Todo } from "@/domain";
import styles from "./todoForm.module.scss";
import { useSession } from "next-auth/react";

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
  const { data } = useSession();
  const form = useFormik<Todo>({
    initialValues: {
      title: "",
      body: "",
      archived: false,
      backgroundColor: "",
      userId: (data?.user as any)?.id,
    },
    validationSchema: todoValidationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (todo: Todo) => {
      try {
        await saveTodoUseCase.execute(todo);
        form.resetForm();
      } catch (error) {
        console.error(error);
      }
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
            value={form.values.title}
            onChange={form.handleChange}
            error={!!form.errors.title}
            errorMessage={form.errors.title}
          />
          <Input
            type="color"
            name="backgroundColor"
            formLabel="Cor"
            placeholder="Cor da nota"
            value={form.values.backgroundColor}
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
            value={form.values.body}
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
