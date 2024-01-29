import { Meta } from '@storybook/react';
import { useState } from 'react';
import FullNameInput from './FullNameInput';

export default {
  component: FullNameInput,
  title: 'FormElements/FullNameInput',
} as Meta;

export const Default = () => {
  const [fullName, setFullName] = useState<string>('');
  return <FullNameInput onBlur={(value) => setFullName(value)} />;
};
