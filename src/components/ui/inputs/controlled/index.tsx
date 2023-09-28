'use client';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FieldValues, useController } from 'react-hook-form';

import { ControlledInputProps } from './types';

export default function ControlledInput<FormValues extends FieldValues>(
  props: ControlledInputProps<FormValues>
) {
  const { control, name, rules, defaultValue, shouldUnregister, ...rest } =
    props;
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    defaultValue,
    shouldUnregister,
    disabled: rest.disabled,
  });

  return (
    <FormControl isInvalid={fieldState.invalid}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input id={field.name} {...field} {...rest} />
      <FormErrorMessage>
        {fieldState.invalid && fieldState.error?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
