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
  const { control, name, ...rest } = props;
  const { field, fieldState } = useController({ control, name });

  return (
    <FormControl isInvalid={fieldState.error?.message === ''}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input id={field.name} {...field} {...rest} />
      <FormErrorMessage>
        {fieldState.error?.message && fieldState.error?.message}
      </FormErrorMessage>
    </FormControl>
  );
}

