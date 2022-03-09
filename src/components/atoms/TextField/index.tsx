import MuiTextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import _get from 'lodash/get';
import { FormHelperText } from '@mui/material';

export interface Props {
  name: string;
  label?: string;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
}

const TextField = ({ name, label, size = 'small', fullWidth = false }: Props) => {
  const {
    control,
    getValues,
    formState: { errors }
  } = useFormContext();
  const errorMessage = _get(errors, `${name}.message`);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={getValues(name)}
      render={({ field }) => (
        <>
          <MuiTextField
            {...field}
            name={name}
            label={label}
            size={size}
            fullWidth={fullWidth}
            error={!!errorMessage}
          />
          <FormHelperText error={!!errorMessage}>{errorMessage}</FormHelperText>
        </>
      )}
    />
  );
};

export default TextField;
