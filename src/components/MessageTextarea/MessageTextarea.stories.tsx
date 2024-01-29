import { Meta } from '@storybook/react';
import { useState } from 'react';
import MessageTextarea from './MessageTextarea';

export default {
  component: MessageTextarea,
  title: 'FormElements/MessageTextarea',
} as Meta;

export const Default = () => {
  const [message, setMessage] = useState<string>('');
  return <MessageTextarea onBlur={(value) => setMessage(value)} />;
};
