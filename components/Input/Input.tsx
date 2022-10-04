/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  FormControl,
  Input as ChakraInput,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";
import {
  Control,
  ControllerRenderProps,
  Controller,
  FieldError,
} from "react-hook-form";

interface Props {
  name: string;
  placeholder?: string;
  defaultValue: string;
  control: Control<any>;
  error: FieldError | undefined;
}

const Input = ({ name, placeholder, defaultValue, control, error }: Props) => {
  const renderInput = ({
    field: { onChange, value },
  }: {
    field: ControllerRenderProps;
  }) => {
    return (
      <FormControl isInvalid={!!error}>
        <ChakraInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <FormErrorMessage>
          <FormErrorIcon /> {error && error?.message}
        </FormErrorMessage>
      </FormControl>
    );
  };

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={renderInput}
    />
  );
};

export default Input;
