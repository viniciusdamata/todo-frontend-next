import clsx from "clsx";
import { Form, FormControlProps } from "react-bootstrap";
import InputMask, { InputState, MaskOptions } from "react-input-mask";
import styles from "./input.module.scss";

interface InputProps extends FormControlProps {
  formLabel?: string;
  name?: string;
  error?: boolean;
  errorMessage?: string;
  mask?: string;
  beforeMaskedValueChange?(
    newState: InputState,
    oldState: InputState,
    userInput: string,
    maskOptions: MaskOptions
  ): InputState;
}

export const Input = ({
  formLabel,
  error,
  errorMessage,
  mask,
  size,
  beforeMaskedValueChange,
  ...rest
}: InputProps) => {
  return (
    <Form.Group className="mb-3">
      {mask ? (
        <>
          <Form.Label>{formLabel}</Form.Label>
          <InputMask
            mask={mask}
            {...rest}
            className={clsx(styles["form-control"], {
              [styles["form-control-error"]]: error,
            })}
            beforeMaskedValueChange={beforeMaskedValueChange}
            maskChar=""
          >
            {(inputProps: any) => <Form.Control size={size} {...inputProps} />}
          </InputMask>
        </>
      ) : (
        <>
          <Form.Label>{formLabel}</Form.Label>
          <Form.Control
            size={size}
            {...rest}
            className={clsx(styles["form-control"], {
              [styles["form-control-error"]]: error,
            })}
          />
        </>
      )}
      {error ? (
        <Form.Text className={styles["form-text-error"]}>
          <p>{errorMessage}</p>
        </Form.Text>
      ) : null}
    </Form.Group>
  );
};
