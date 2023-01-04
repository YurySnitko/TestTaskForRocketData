import { FC } from "react";
import s from "./SubmitButton.module.css";

export const SubmitButton: FC = () => {
  return (
    <button className={s.button} type="submit">
      Войти в систему
    </button>
  );
};
