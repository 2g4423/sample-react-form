import MuiTextField from '@mui/material/TextField';

export interface Props {
  name: string;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
}

const TextField = ({ name, size = 'small', fullWidth = false }: Props) => {
  return <MuiTextField name={name} size={size} fullWidth={fullWidth} />;
};

export default TextField;
