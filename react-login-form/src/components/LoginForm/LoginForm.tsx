import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ControlledInput } from "../ControlledInput/ControlledInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import s from "./LoginForm.module.css";
import { LoginFormInputs } from "./LoginForm.types";

const defaultValues = {
  email: "",
  password: "",
};

export const LoginForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ defaultValues });

  const onSubmit: SubmitHandler<LoginFormInputs> = ({ email, password }) => {
    alert(
      `Вы успешно вошли в аккаунт! E-mail: ${email}, password: ${password}`
    );
  };

  return (
    <div className={s.container}>
      <h2>Вход</h2>
      <p>Для существующих пользователей</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          name="email"
          control={control}
          label="E-mail:"
          rules={{
            required: { value: true, message: "Это поле обязательное" },
            pattern: {
              value: /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/,
              message: "Укажите корректный email адрес",
            },
          }}
          spellCheck={false}
        />
        <ControlledInput
          name="password"
          control={control}
          label="Пароль:"
          type="password"
          rules={{
            required: { value: true, message: "Это поле обязательное" },
            minLength: {
              value: 8,
              message: "Пароль должен состоять минимум из 8 символов",
            },
          }}
        />
        <SubmitButton />
      </form>
    </div>
  );
};
