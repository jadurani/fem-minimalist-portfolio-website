import { Meta } from '@storybook/react';
import { useState } from 'react';
import EmailInput from './EmailInput';

export default {
  component: EmailInput,
  title: 'FormElements/EmailInput',
} as Meta;

export const Default = () => {
  const [email, setEmail] = useState<string>('');
  return <EmailInput onBlur={(value) => setEmail(value)} />;
};
