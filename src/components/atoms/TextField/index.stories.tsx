import TextField from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'textField',
  size: 'small',
  fullWidth: true
};
