import Radio from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>;

const options = new Array(3).fill(0).map((_, index) => {
  return { label: `Radio${index}`, value: `radio${index}`, disabled: index === 2 };
});

const Template: ComponentStory<typeof Radio> = (args) => {
  const schema = yup
    .object()
    .shape({
      radio: yup
        .string()
        .test((value) => value === options[0].value)
        .required()
    })
    .required();
  const formMethods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { radio: options[1].value }
  });
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(action('submit'), action('error'))}>
        <Radio {...args} />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'radio',
  options: options,
  row: true,
  fullWidth: true,
  color: 'primary',
  label: 'Radios',
  labelPlacement: 'end'
};
