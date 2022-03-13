import MuiRadio from '@mui/material/Radio';
import { Controller, useFormContext } from 'react-hook-form';
import _get from 'lodash/get';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup, TextField } from '@mui/material';

export interface Option {
  label: string;
  value: string;
  disabled: boolean;
}

export interface Props {
  name: string;
  options: Option[];
  fullWidth?: boolean;
  row?: boolean;
  size?: 'small' | 'medium';
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  label?: string;
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top';
}

const Radio = ({
  name,
  options,
  row = false,
  fullWidth = false,
  size = 'small',
  color = 'default',
  label = '',
  labelPlacement = 'end'
}: Props) => {
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
        <FormControl error={!!errorMessage} fullWidth={fullWidth}>
          {!!label && <FormLabel>{label}</FormLabel>}
          <RadioGroup {...field} row={row}>
            {options.map((option, index) => {
              return (
                <FormControlLabel
                  key={option.value + index}
                  value={option.value}
                  label={option.label}
                  labelPlacement={labelPlacement}
                  control={
                    <MuiRadio size={size} color={!!errorMessage ? 'error' : color} disabled={option.disabled} />
                  }
                />
              );
            })}
          </RadioGroup>
          <FormHelperText sx={{ m: 0 }}>{errorMessage}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default Radio;
