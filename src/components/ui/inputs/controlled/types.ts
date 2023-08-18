import { InputProps } from '@chakra-ui/react';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type ControlledInputProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & InputProps & { label: string };

