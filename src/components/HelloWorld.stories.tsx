import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './HelloWorld';

export default {
  title: 'Components/AAAa',
  component: Button,
  args: {
    primary: 'boolean' as unknown as any,
    backgroundColor: 'string',
    size: "small",
    label: 'string',
    onClick: '() => void' as unknown as any
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const AAAA = Template.bind({});
AAAA.args = {};
