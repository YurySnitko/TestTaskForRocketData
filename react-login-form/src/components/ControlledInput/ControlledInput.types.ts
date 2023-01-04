import { InputHTMLAttributes } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type ControlledInputProps<T extends FieldValues> =
  UseControllerProps<T> &
    InputHTMLAttributes<HTMLInputElement> & {
      label: string;
    };
