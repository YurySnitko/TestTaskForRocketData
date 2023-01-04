import { FieldValues, useController } from "react-hook-form";
import { ControlledInputProps } from "./ControlledInput.types";
import s from "./ControlledInput.module.css";

export const ControlledInput = <T extends FieldValues>({
  name,
  control,
  rules,
  label,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, control, rules });

  return (
    <div className={s.wrapper}>
      <label htmlFor={name}>
        {label}
        {rules?.required && <span> * </span>}
      </label>
      <input
        className={error?.message && s.withError}
        onChange={field.onChange}
        value={field.value}
        name={field.name}
        onBlur={field.onBlur}
        ref={field.ref}
        id={name}
        {...rest}
      />
      <span className={s.errorMessage}>{error?.message}</span>
    </div>
  );
};
