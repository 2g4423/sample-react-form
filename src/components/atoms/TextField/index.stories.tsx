import TextField from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const schema = yup
    .object()
    .shape({
      textField: yup.string().required()
    })
    .required();
  const formMethods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { textField: 'Text Field Value' }
  });
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(action('submit'), action('error'))}>
        <TextField {...args} />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'textField',
  label: 'Text Field',
  size: 'small',
  fullWidth: true
};
